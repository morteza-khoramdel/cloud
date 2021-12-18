# /bin/bash
docker run -d  --rm   --name authentication-and-authorization-database -e POSTGRES_PASSWORD=postgres --network authentication-and-authorization-network -e PGDATA=/var/lib/postgresql/data/pgdata -v $(dirname "$(readlink -f "$0")")/../auth-database/data:/var/lib/postgresql/data postgres
