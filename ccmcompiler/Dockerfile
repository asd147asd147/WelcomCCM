FROM ubuntu:latest
LABEL maintainer "asd147asd147@naver.com"
RUN apt-get update && \
apt-get install yarn  -y && \
apt-get install curl -y && \
curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
apt-get install nodejs -y && \
apt-get install build-essential -y && \
apt-get install python3 

COPY . /home/ccmcompile/
WORKDIR /home/ccmcompile/