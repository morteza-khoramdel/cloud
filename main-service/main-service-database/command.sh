/bin/bash
sudo docker run -d --rm --name main-service-database --network main-service-network -e POSTGRES_PASSWORD=postgres -e PGDATA=/var/lib/postgresql/data/pgdata -v /home/morteza/WebstormProjects/microservice/main-service/game-database/data:/var/lib/postgresql/data postgres
