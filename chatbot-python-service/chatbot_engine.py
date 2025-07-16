import faiss
import json
from sentence_transformers import SentenceTransformer
import numpy as np
import pickle
from summarizer import summarize_text

# Load model and index
model = SentenceTransformer('all-MiniLM-L6-v2')
index = faiss.read_index("data/faiss_index.index")

# Load metadata
with open("data/chunks.pkl", "rb") as f:
    meta_data = pickle.load(f)

chunks = meta_data['chunks']
sources = meta_data['sources']
categories = meta_data['categories']

def get_chatbot_response(prompt):
    query_vec = model.encode([prompt])
    D, I = index.search(np.array(query_vec).astype('float32'), 5)

    results = []
    for idx in I[0]:
        if idx < len(chunks):
            results.append({
                'text': chunks[idx],
                'source': sources[idx],
                'category': categories[idx]
            })

    # Remove near-duplicate chunks by comparing first 150 characters
    unique_results = []
    seen = set()
    for r in results:
        key = r['text'][:150]
        if key not in seen:
            unique_results.append(r)
            seen.add(key)

    combined_text = "\n\n".join(r['text'] for r in unique_results)

    if len(combined_text.split()) > 200:
        summary = summarize_text(combined_text)
    else:
        summary = combined_text

    return {
        'response': summary,
        'top_contexts': unique_results[:2]
    }
