FROM python:3

WORKDIR /app

ENV FLASK_APP=server.py

ENV FLASK_ENV=development

COPY ./requirement.txt .

RUN pip install -r requirement.txt

COPY . .

CMD ["python", "server.py"]