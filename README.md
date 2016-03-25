
# React + Flask starter kit

A quick starter repo that includes Flask and React, with Babel and Webpack. For proof-of-concept projects, workshop settings, etc where you don't want to worry about developer setup or writing config files.

TLDR; for the quick and dirty setup, install your dependencies:

```
pip install virtualenv
virtualenv venv; source venv/bin/activate
pip install -r requirements.txt
npm install -g webpack; npm install
```

Then in two separate tabs run `python app.py` and `webpack --watch`. Make edits to `js/Hello.js` and `app.py` to edit the frontend and backend, respectively.

These steps are explained in more detail below.

## Prerequisites

You'll need some package managers.

- `npm`
- `pip`

## Setup

For the backend:

```
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
```

For the frontend:

If you don't have webpack, install it:

```
npm install -g webpack
```

Then, use `npm` to install the remaining JavaScript dependencies.

```
npm install
```

## Development

The entry point for the app is in `js/app.js`. The starter React component is `js/Hello.js`. Editing this file is a good place to start.

While developing on the frontend, run `webpack --watch` to keep re-compiling your JavaScript code.

Running `webpack` creates a file in `static/bundle.js`, which is the bundled version of your frontend code.

The "backend" here is a bare-bones Flask app. Look in `app.py` if you want to make edits to the backend.

To run the application, follow the steps in the next section.

## Running the app

If you're using a virtualenv, activate it.

```
source venv/bin/activate
```

Then run the Flask app:

```
python app.py
```

