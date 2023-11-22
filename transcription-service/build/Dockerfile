# Use an official Python runtime as a parent image
FROM python:3.10

LABEL Name="Transcription Service" 

ARG srcDir=src
WORKDIR /app

ENV TZ=America/Santiago

COPY $srcDir/requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir --upgrade -r ./requirements.txt --default-timeout=100 future

COPY $srcDir/run.py .
COPY $srcDir/main.py .
COPY $srcDir/app ./app

EXPOSE 8080

# Run run.py, uvicorn is launched programmatically
CMD ["python", "-u", "-m", "run"]
