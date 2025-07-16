import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Rohit@123",
    database="domv"
)

def get_session_history(session_id):
    cursor = db.cursor()
    cursor.execute("SELECT history FROM chat_sessions WHERE session_id = %s", (session_id,))
    row = cursor.fetchone()
    return row[0] if row else ""

def update_session_history(session_id, history):
    cursor = db.cursor()
    cursor.execute("REPLACE INTO chat_sessions (session_id, history) VALUES (%s, %s)", (session_id, history))
    db.commit()

def log_feedback(session_id, prompt, response, feedback):
    cursor = db.cursor()
    cursor.execute("INSERT INTO feedback_log (session_id, prompt, response, feedback, timestamp) VALUES (%s, %s, %s, %s, NOW())",
                   (session_id, prompt, response, feedback))
    db.commit()

def get_helplines():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM helpline")
    return cursor.fetchall()

def get_support_groups():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM support_group")
    return cursor.fetchall()

def get_success_stories(limit=2):
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM success_story WHERE approved = 1 ORDER BY datePosted DESC LIMIT %s", (limit,))
    return cursor.fetchall()
