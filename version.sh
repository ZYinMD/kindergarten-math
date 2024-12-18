#!/bin/bash
set -e

pnpm test run # `vitest` runs with watch, `vitest run` runs once
pnpm check
pnpm build
git commit -am "v$npm_package_version"
git push
