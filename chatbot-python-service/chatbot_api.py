from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
from chatbot_engine import get_chatbot_response
from generative_model import generate_response

app = Flask(__name__)
CORS(app)

db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'Rohit@123',
    'database': 'domv'
}

@app.route('/chatbot/ask', methods=['POST'])
def ask():
    data = request.get_json()
    query = data.get('prompt', '').lower()

    response_obj = get_chatbot_response(query)
    faiss_response = response_obj.get('response', '').strip()
    top_contexts = response_obj.get('top_contexts', [])

    # Fallback condition — no good context or empty summary
    if not faiss_response or len(top_contexts) == 0:
        ai_only_response = generate_response(query)
        response = f"🤖 AI Response:\n\n{ai_only_response}"
    else:
        empathetic_reply = generate_response(query, top_contexts)
        response = f"📖 Based on reliable resources:\n\n{faiss_response}\n\n🤖 AI Advice:\n\n{empathetic_reply}"

    return jsonify({'response': response})

if __name__ == '__main__':
    print("✅ Device set to use CPU")
    app.run(debug=True)
