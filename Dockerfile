FROM node:18.9.0-alpine3.15

RUN apk add bash
SHELL ["/bin/bash", "-c"]

WORKDIR /app
CMD /bin/bash