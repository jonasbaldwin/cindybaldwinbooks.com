#!/bin/bash

SCRIPT_PATH=`dirname "$0"`

aws s3 cp $SCRIPT_PATH/../public s3://cindybaldwinbooks.com --recursive --exclude "*.DS_Store"

aws s3api put-object-acl --bucket s3://cindybaldwinbooks.com --key exampleobject --acl public-read
