import os
import json
import faiss
import numpy as np
import pickle
from sentence_transformers import SentenceTransformer
import nltk
import pdfplumber
import pandas as pd
import docx
import warnings

warnings.filterwarnings("ignore")

from nltk.tokenize.punkt import PunktSentenceTokenizer, PunktParameters
punkt_param = PunktParameters()
tokenizer = PunktSentenceTokenizer(punkt_param)

def classify_category(text):
    text_lower = text.lower()
    if any(word in text_lower for word in ["helpline", "emergency", "call now"]):
        return "Helpline"
    elif any(word in text_lower for word in ["legal", "court", "lawyer"]):
        return "Legal"
    elif any(word in text_lower for word in ["hospital", "clinic", "doctor"]):
        return "Medical"
    elif any(word in text_lower for word in ["counselling", "psychologist", "support group"]):
        return "Psychological"
    else:
        return "General"

documents = []

pdf_folder = "data/pdfs"
for filename in os.listdir(pdf_folder):
    if filename.endswith(".pdf"):
        with pdfplumber.open(os.path.join(pdf_folder, filename)) as pdf:
            text = "\n".join(page.extract_text() for page in pdf.pages if page.extract_text())
            documents.append({"source": filename, "content": text})

doc_folder = "data/docs"
for filename in os.listdir(doc_folder):
    if filename.endswith(".docx"):
        doc = docx.Document(os.path.join(doc_folder, filename))
        text = "\n".join(p.text for p in doc.paragraphs)
        documents.append({"source": filename, "content": text})

excel_folder = "data/xls"
for filename in os.listdir(excel_folder):
    if filename.endswith(".xlsx"):
        df = pd.read_excel(os.path.join(excel_folder, filename))
        text = df.to_string()
        documents.append({"source": filename, "content": text})

os.makedirs("data", exist_ok=True)
with open("data/extracted_data.json", "w", encoding="utf-8") as f:
    json.dump(documents, f, indent=2)

chunks, sources, categories = [], [], []
for doc in documents:
    category = classify_category(doc['content'])
    sentences = tokenizer.tokenize(doc['content'])
    chunk, current_len = "", 0
    for sent in sentences:
        if current_len + len(sent) > 1000:
            chunks.append(chunk.strip())
            sources.append(doc['source'])
            categories.append(category)
            chunk, current_len = "", 0
        chunk += sent + " "
        current_len += len(sent)
    if chunk:
        chunks.append(chunk.strip())
        sources.append(doc['source'])
        categories.append(category)

# Deduplicate chunks before embedding
unique_chunks, unique_sources, unique_categories = [], [], []
seen_chunks = set()

for i, c in enumerate(chunks):
    key = c[:300]
    if key not in seen_chunks:
        unique_chunks.append(c)
        unique_sources.append(sources[i])
        unique_categories.append(categories[i])
        seen_chunks.add(key)

chunks, sources, categories = unique_chunks, unique_sources, unique_categories

print(f"Total Unique Chunks: {len(chunks)}")

model = SentenceTransformer('all-MiniLM-L6-v2')
embeddings = model.encode(chunks, show_progress_bar=True)

dimension = embeddings.shape[1]
index = faiss.IndexFlatL2(dimension)
index.add(np.array(embeddings))

faiss.write_index(index, "data/faiss_index.index")
with open("data/chunks.pkl", "wb") as f:
    pickle.dump({'chunks': chunks, 'sources': sources, 'categories': categories}, f)

print("✅ FAISS index and deduplicated chunk metadata created successfully.")
