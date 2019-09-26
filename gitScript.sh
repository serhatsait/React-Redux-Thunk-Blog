#!/bin/bash
Commit=${1?Error: no commit description}

git status

git add -A

git commit -am "$Commit"

git push origin master

echo "işlem bitti..."