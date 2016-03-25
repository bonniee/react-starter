
# React starter kit

A quick starter repo for React projects.

- React
- Babel
- Webpack

## Install

```
npm install
```

## Build

```
webpack
```

## Deploy

You can deploy with `surge.sh`, or with your favorite method of deploying static sites.

```
npm install -g surge
surge
```

## Project structure

Configs:

- `package.json` contains your JavaScript dependencies (react, babel, and webpack)
- `webpack.config.js`: webpack configuration

The actual app:

- `index.html` is the HTML page; it loads your bundled JavaScript from `static/bundle.js`, which is produced by Webpack
- `app.js` is the JavaScript entry point; it renders the `<Hello>` React component into the page.
- `Hello.js` contains the `<Hello>` React component

