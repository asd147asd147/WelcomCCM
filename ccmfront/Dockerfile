FROM node:14.14.0-alpine
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/ .bin:$PATH
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install && \
npm install -g create-react-app

COPY . /app
CMD ["npm", "start"]