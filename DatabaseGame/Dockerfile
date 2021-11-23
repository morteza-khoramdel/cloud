FROM postgres

WORKDIR /app

COPY ./db.dump /app

CMD pg_restore -d postgres db.dump




