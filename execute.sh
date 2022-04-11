#!/usr/bin/env bash

set -x +e

echo "Using node version: $(node -v)"

node --loader ts-node/esm src/with-js-extension.ts

echo -e "\n\n\n"

node --loader ts-node/esm src/with-no-extension.ts

echo -e "\n\n\n"

node --loader ts-node/esm src/with-ts-extension.ts


