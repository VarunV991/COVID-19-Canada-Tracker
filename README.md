# Covid-19-Canada-Tracker

![NodeJS](https://img.shields.io/badge/NodeJS-10.18-blue) ![NPM](https://img.shields.io/badge/npm-6.14.4-orange) ![Heroku](https://img.shields.io/badge/Heroku-Deployment-brightgreen)

## Objective

The objective of this project is to create <strong>COVID-19 tracker for Canada using basic web tools</strong>.

## Live Demo

<a href="https://interactive-svg-map.herokuapp.com/">Canada Tracker</a>

## Directory Tree 

```
├── node_modules
├── public
│   ├── assets
│   ├── js
│   │   ├── indexCheerio.js
│   ├── stylesheets
│   │   ├── index.css
├── views
│   ├── index.ejs
├── Procfile
├── README.md
├── app.js
├── package-lock.json
├── package.json

```

## Stack Used

* Express
* NodeJS

## Data Used

The COVID-19 Status Data of Canada is taken from <a href="https://en.wikipedia.org/wiki/COVID-19_pandemic_in_Canada#Background_and_epidemiology">here.</a><br>
A custom made Data API is used to fetch the current COVID status data of Canada from the source. You can find the code for the data api <a href="https://github.com/VarunV991/COVID-Daily-Data-API">here.</a>

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all the dependecies required for this project.

### `npm start`

Runs the app in the production mode.<br />
