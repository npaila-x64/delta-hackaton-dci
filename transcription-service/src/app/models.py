from pydantic import BaseModel

class EncodedImage(BaseModel):
    content: str
