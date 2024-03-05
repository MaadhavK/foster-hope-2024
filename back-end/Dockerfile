FROM python:latest

WORKDIR /back-end

COPY . .
RUN pip install --no-cache-dir -r requirements.txt

CMD ["nohup", "gunicorn", "-b", "0.0.0.0:8080", "endpoints:app", "&"]