from transformers import pipeline, AutoTokenizer

# Load summarizer model and tokenizer
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
tokenizer = AutoTokenizer.from_pretrained("facebook/bart-large-cnn")

def summarize_text(text, max_tokens=700):
    # Truncate by token length, not word count
    tokens = tokenizer.encode(text, return_tensors="pt")
    if tokens.shape[1] > 1024:
        tokens = tokens[:, :1024]
        text = tokenizer.decode(tokens[0], skip_special_tokens=True)

    result = summarizer(text, max_length=700, min_length=200, do_sample=False)
    return result[0]['summary_text']
