FROM python:3.8.10

# The enviroment variable ensures that the python output is set straight
# to the terminal with out buffering it first
ENV PYTHONUNBUFFERED 1
WORKDIR /analytical_service
# Get the Real World example app
# RUN git clone -b master https://gitlab+deploy-token-675373:CRzFR-LKxS1HGTu4DKiy@gitlab.com/c4316/analysis-service.git /analytical_service

COPY . .
RUN pip --version

# Set the working directory to /drf
# NOTE: all the directives that follow in the Dockerfile will be executed in
# that directory.


RUN ls .
RUN pip install --no-cache-dir -U pip wheel setuptools
# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# VOLUME /analytical_service

EXPOSE 8080

CMD python manage.py makemigrations && python manage.py showmigrations && python manage.py migrate admin && python manage.py migrate api && python manage.py runserver 0.0.0.0:8080
