FROM node:14.14.0-alpine
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/ .bin:$PATH
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install

COPY . /app

CMD ["yarn"]
CMD ["yarn", "db:create"]
CMD ["yarn", "db:migrate"]
CMD ["yarn", "db:seed"]
CMD ["yarn", "dev"]