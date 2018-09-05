#!/bin/sh

set -o pipefail

date

PRESET_NAME=client-api-test
WORK_DIR=$GOPATH/src/boscoin.io/sebak-test
git clone https://github.com/zzim2x/sebak-test $WORK_DIR

cd $WORK_DIR/$PRESET_NAME && go test ./... -v 2>&1 | go-junit-report -set-exit-code=1 | tee -a /logs/artifacts/result.xml
