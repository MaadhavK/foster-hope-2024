FROM python:latest

WORKDIR /back-end

RUN apt-get update \
    && apt-get install -y python3 python3-pip
COPY . .
RUN pip install --no-cache-dir -r requirements.txt

CMD ["nohup", "gunicorn", "-b", "0.0.0.0:8080", "endpoints:app", "&"]