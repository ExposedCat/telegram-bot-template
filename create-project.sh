#! /bin/bash

mkdir -p $1
cp -r . $1
rm -rf $1/.git $1/create-project.sh $1/README.md
mv $1/src/example-config.env $1/src/config.env