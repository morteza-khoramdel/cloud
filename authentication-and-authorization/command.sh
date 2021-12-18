/bin/bash
sudo docker run -p 8000:8000 -v /edit-this-path-to/config:/config  --network authentication-and-authorization-network --name authentication-and-authorization-backend --rm authentication-and-authorization-backend
