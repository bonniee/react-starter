
# React starter kit

A quick starter repo for React projects.

- React
- Babel
- Webpack
- Jasmine + Karma + PhantomJS

## Install

```
npm install
```

## Build

```
webpack
```

## Test

```
npm test
```

## Preview

While developing, you'll likely want to preview your changes locally.

```
webpack --watch
python -m SimpleHTTPServer
open http://localhost:8000
```

## Deploy

You can deploy with `surge.sh`, or with your favorite method of deploying static sites.

```
npm install -g surge
surge
```

## Project structure

```
├── LICENSE
├── README.md
├── app.js
├── components
│   ├── Hello.js
│   └── tests
│       └── hello-test.js
├── index.html
├── karma.conf.js
├── package.json
├── static
│   └── bundle.js
├── tests.webpack.js
└── webpack.config.js
```

Configs:

- `package.json` contains your JavaScript dependencies and project config; most notably it sets up `npm test` to trigger `karma start`
- `webpack.config.js`: webpack configuration
- `tests.webpack.js`: identifies all test files
- `karma.conf.js`: configures Karma, for running tests

The actual app:

- `index.html` is the HTML page; it loads your bundled JavaScript from `static/bundle.js`, which is produced by Webpack
- `app.js` is the JavaScript entry point; it renders the `<Hello>` React component into the page
- `Hello.js` contains the `<Hello>` React component
- `hello-test.js` contains a simple test
