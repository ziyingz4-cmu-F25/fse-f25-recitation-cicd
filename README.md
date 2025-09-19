# CICD Recitation Demo

This small demo project is for a recitation on CI/CD using GitHub Actions. It includes:

- A tiny frontend (`index.html`, `src/app.js`) styled with Tailwind (via CDN) to keep things simple.
- A few unit tests written with Jest in `tests/app.test.js`.

Quickstart

1. Install dependencies:

```bash
npm install
```

2. Run tests locally:

```bash
npm test
```

3. Serve the demo site locally:

```bash
npm start
# then open http://localhost:3000
```

## Example GitHub Actions Workflow: Node.js CI

```txt
name: Node.js CI

on:
  pull_request:
    branches: ["main"]

jobs:
  build:
    runs-on: ubuntu-latest
    timeout-minutes: 4

    strategy:
      matrix:
        node-version: [20.x]

    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: "npm"
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```
