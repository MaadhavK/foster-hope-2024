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

# Example prompt
prompt_text = "What is the meaning of life?"

# Generate a response using ChatGPT
response =  client.chat.completions.create(
    model="gpt-3.5-turbo",  # You can use other engines as well
    messages=[
        {"role": "user", "content": "Who won the world series in 2020?"}
    ]
)

# Print the response
print(response.choices[0].message.content)