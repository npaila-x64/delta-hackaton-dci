import os # Included to Python
import json

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI # OpenAI official Python package

from app.models import EncodedImage

os.environ["OPENAI_API_KEY"] = "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"

client = OpenAI(
    api_key=os.getenv("openaikey"))

app = FastAPI()

app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_methods=["*"],
        allow_headers=["*"],
        )

# Could be used as dashboard
@app.get('/')
def read_root():
    return {"Hello": "World"}

@app.post('/image')
def process_image(encoded_image: EncodedImage):
    response = client.chat.completions.create(
        model="gpt-4-vision-preview",
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": """
                        ¿Puedes transcribir la siguiente imagen en un formato JSON correctamente formateado, enfocándote en cada campo y asegurándote de que sea exactamente lo que dice la imagen? Asegúrate de que el JSON esté correctamente formateado según los estándares para este formato. Solo dame el JSON como respuesta para copiarlo y pegarlo para su posterior uso.
                        """
                    },
                    {
                        "type": "image_url",
                        "image_url": f"data:image/jpeg;base64,{encoded_image.content}",
                    },
                ],
            }
        ],
        max_tokens=2048,
    )

    respuesta_chatbot = response.choices[0].message.content
    formato_respuesta_chatbot = respuesta_chatbot.replace("```", "").replace("json", "").strip()
    diccionario_respuesta = json.loads(formato_respuesta_chatbot)

    return diccionario_respuesta
