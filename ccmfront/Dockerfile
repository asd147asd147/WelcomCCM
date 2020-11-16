FROM node:14.14.0-alpine
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/ .bin:$PATH
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install

COPY . /app
CMD ["npm", "install"]
CMD ["npm", "start"]