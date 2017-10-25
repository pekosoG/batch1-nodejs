FROM node
WORKDIR /beers

COPY /batch1-app/package.json /beers
RUN npm install

COPY /batch1-app/ /beers
CMD npm start