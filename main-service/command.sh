/bin/bash
sudo docker run -p 8001:8001 -v /home/morteza/WebstormProjects/microservice/config:/config  --network main-service-network --name main-service-backend --rm main-service-backend