FROM node

COPY package.json .

COPY . .

WORKDIR .
RUN ls .
RUN npm i

EXPOSE 8000

# VOLUME [ "/app/node_modules" ]


CMD [ "node", "index.js" ]

