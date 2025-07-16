from transformers import pipeline
import re

generator = pipeline("text-generation", model="distilgpt2")

def clean_ai_response(text):
    text = re.sub(r'(confidence, ){2,}', 'confidence, ', text)
    text = re.sub(r'P\(.*?\)', '', text)
    text = re.sub(r'(https?://[^\s]+)', '', text)
    text = re.sub(r'\n{2,}', '\n', text)
    text = re.sub(r'Â', '', text)
    text = re.sub(r'(The following is the following:)+', '', text, flags=re.IGNORECASE)
    text = re.sub(r'(Dowry harassment is a serious crime.*?threats\.)+', 
                  'Dowry harassment is a serious crime where women are abused or tortured for money, gifts, or property after marriage.', 
                  text, flags=re.IGNORECASE)
    return text.strip()

def generate_response(prompt, top_contexts=[]):
    context_text = "\n\n".join([c['text'][:500] for c in top_contexts])
    full_prompt = f"Context:\n{context_text}\n\nUser: {prompt}\nBot:" if top_contexts else f"User: {prompt}\nBot:"

    result = generator(full_prompt, max_length=300, num_return_sequences=1)
    generated = result[0]['generated_text']

    # Extract only the first Bot response — cut off at next 'User:' if it appears
    response_part = generated.split("User:")[0]
    response_part = response_part.replace(full_prompt, "").strip()

    clean_text = clean_ai_response(response_part)
    return clean_text
