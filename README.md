![sam-local-logo](https://s9.postimg.org/uf1p8i8vj/sam-local-banner.png)

# SAM local

## 0.x
- ![Version](https://images.microbadger.com/badges/version/xemuliam/sam:0.2.8.svg) ![Layers](https://images.microbadger.com/badges/image/xemuliam/sam:0.2.8.svg) __0.2.8 = 0.2 = latest__
- ![Version](https://images.microbadger.com/badges/version/xemuliam/sam:0.2.7.svg) ![Layers](https://images.microbadger.com/badges/image/xemuliam/sam:0.2.7.svg)
- ![Version](https://images.microbadger.com/badges/version/xemuliam/sam:0.2.6.svg) ![Layers](https://images.microbadger.com/badges/image/xemuliam/sam:0.2.6.svg)

[Docker](https://www.docker.com/what-docker) image for [AWS SAM local](https://github.com/awslabs/aws-sam-local).

- ![Docker builds](https://img.shields.io/docker/automated/xemuliam/sam.svg) ![Docker Pulls](https://img.shields.io/docker/pulls/xemuliam/sam.svg) ![Docker Stars](https://img.shields.io/docker/stars/xemuliam/sam.svg)

```
 ___________
< SAM local >
 -----------
    \
     \
      \
                    ##        .
              ## ## ##       ==
           ## ## ## ##      ===
       /""""""""""""""""___/ ===
  ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~
       \______ o          __/
        \    \        __/
          \____\______/
```

# Overview
Main idea is to give possibility to develop and test AWS SAM applications without AWS involvement and charging.

You can make direct invocation of particular lambda functions or use APIG-interface to call them.

Two runtimes are present in examples: Pytnon and NodeJS. Examples have been made to provide simple and clear view how it works. Examples are identical in the result and almost identical in code-style and formatting.


Feel difference :)

## Official SAM Local Documentation

- [AWS Lambda Docs](https://docs.aws.amazon.com/lambda/latest/dg/test-sam-local.html)


# Usage

This image can either be used as a image for building on top of SAM-local or just to experiment with. I personally have not attempted to use this in a production use case.


## Pre-Requisites
Ensure the following pre-requisites are met.

- Linux, Mac, Windows + WSL
- Docker 1.10+

## How to use

1. Clone or download this project code
2. Go to `docker-sam-local` directory

__Please bear in mind that syntax of commands **remains intact** despite dockerization__

### Help

```
./sam
```

### Template validation
```
./sam validate
```
or
```
./sam validate -t template.yaml
```

### Local invoke of lambda-function:

#### with event from stdin
```
echo '{"name":"Jude"}' | ./sam local invoke python
```

#### with event from file
```
./sam local invoke -e event.json node
```


Don't be confused by calling functions **node** or **python**. Those are resource names in my **template.yaml** file. Just for fun.


### Service (API) mode:

```
./sam local start-api
```


In service mode you can use your browser or __curl__ to call particular functions by REST-API:

#### GET request
```
curl http://localhost:3000/python/Jude
```

#### POST request
```
curl -d '{"test":"payload"}' http://localhost:3000/node/Vanessa
```


# Enjoy! :)
