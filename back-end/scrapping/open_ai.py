from openai import OpenAI
import os
from supabase import create_client
from dotenv import load_dotenv

# Load environment variables from .env file
dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')
load_dotenv(dotenv_path=dotenv_path)

# Grab .env keys
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")


# Set your OpenAI API key
open_ai_key = os.environ.get("OPEN_AI_KEY")

client = OpenAI(api_key=open_ai_key)

def ask_chatgpt(prompt):
    
  # Example prompt
  prompt_text = "What is the meaning of life?"

  # Generate a response using ChatGPT
  response =  client.chat.completions.create(
      model="gpt-4",  # You can use other engines as well
      messages=[
          {"role": "user", "content": prompt}
      ]
  )
  return response.choices[0].message.content


