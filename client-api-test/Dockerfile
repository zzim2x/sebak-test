FROM golang:1.10.4-alpine

RUN apk add --no-cache git openssh

RUN go get github.com/jstemmer/go-junit-report
RUN mv $GOPATH/bin/go-junit-report /usr/bin/
ADD ./entrypoint.sh /entrypoint.sh

