#!/bin/bash
set -e

pnpm test
pnpm check
pnpm build
firebase deploy
git commit -am "v$npm_package_version"
