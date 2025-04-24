#!/bin/bash
cd projects/de-sdk-core
ng build de-sdk-core
cd ../../dist/de-sdk-core
yalc publish --push