FROM python:3

WORKDIR /app

ENV FLASK_APP server.py

COPY ./requirement.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["python", "server.py"]