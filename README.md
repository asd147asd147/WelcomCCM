# Welcome CCM 

> 코딩역량관리 시스템이다.  
> 웹에서 코드를 작성하고 실행시켜 결과까지 확인할 수 있다.  
> 여러 문제를 풀고 자신의 코딩역량을 확인할 수 있다.  
> 사용자가 문제를 직접 제작할 수 있다.

## 요구사항

- Node.js >= 14.x
- Yarn
- python >= 3.7.x
- gcc/g++(x86_64) >= 8.3.x
- Docker >= 19.03.x, Docker Desktop >= 2.3.x
- PostgreSQL >= 12.x

```
$ docker pull postgres
$ docker run -d -p 5432:5432 --name pgsql -e POSTGRES_PASSWORD=postgres postgres
```

## 설치방법

+ Clone from Github
```
$ git clone https://github.com/asd147asd147/WelcomCCM.git
$ cd WelcomCCM
$ cd ccmback
$ yarn
```
+ dotEnv( .env ) setting

```
$ copy .env env
```

도커에서만 실행할 경우
+ Docker Compose
```
/WelcomCCM$ docker-compose up -d
```

도커에서 실행하지 않을 경우
+ Database init
```
/WelcomCCM/ccmback$ yarn db:create
/WelcomCCM/ccmback$ yarn db:migrate
/WelcomCCM/ccmback$ yarn db:seed
```
+ Backend server Run
```
/WelcomCCM/ccmback$ yarn dev
```

+ Compiler Server Run
```
/WelcomCCM/ccmcompiler$ npm start
```

+ Frontend Server Run
```
/WelcomCCM/ccmfront$ npm start
```

## 참여인원

- 최원준, asd147asd147@naver.com, Code Editor & Communication
- 김태호, rjsdnxogh55@gmail.com, Compiler
- 안현주, muzee99@pusan.ac.kr, Web

## 참고

- ACE Editor Open Source, https://ace.c9.io/#nav=about&api=editor

## 라이센스

- ACE Editor - BSD
