#!/bin/bash

DATE=`date +"%Y-%m-%d_%H-%M-%S"`
SCRIPT_PATH=`dirname "$0"`

mkdir $SCRIPT_PATH/../backup/$DATE

aws s3 cp s3://cindybaldwinbooks.com $SCRIPT_PATH/../backup/$DATE --recursive

echo ""
echo "Backup Complete"
echo Copied current files to cbb-s/backup/$DATE