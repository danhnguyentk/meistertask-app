# Meistertask app

## Overview
This code base provides the web for Meistertask applications.

---
## Technical Stack

### 1. Languages

##### HTML5
see [Wikipedia](https://en.wikipedia.org/wiki/HTML5)
> HTML5 Hypertext Markup Language revision 5 (HTML5) is markup language for the structure and presentation of World Wide Web contents. HTML5 supports the traditional HTML and XHTML-style syntax and other new features in its markup, New APIs, XHTML and error handling.

##### CSS3
see [Wikipedia](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3)
> CSS3 A cascading style sheet (CSS) is a Web page derived from multiple sources with a defined order of precedence where the definitions of any style element conflict.

##### Javascript
see [Wikipedia](https://en.wikipedia.org/wiki/JavaScript)
> Javascript an object-oriented computer programming language commonly used to create interactive effects within web browsers. ECMAScript 2015 is an ECMAScript standard that was ratified in June 2015. ES2015 is a significant update to the language, and the first major update to the language since ES5 was standardized in 2009.

### 2. Frontend Web Frameworks

##### Angular2
see [angular](https://angular.io/)
> Angular is a development platform for building mobile and desktop web applications.

### 3. Tools

##### Angular CLI
see [Angular CLI](https://cli.angular.io/)
> The Angular CLI is a command line interface tool that can create a project, add files, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

##### Webpack 2.2.0
see [Webpack](https://webpack.github.io/)
> Webpack is a module bundler. Webpack takes modules with dependencies and generates static assets representing those modules.

#### 4. Librarys

##### Lodash 4.17.4
see [lodash](https://lodash.com/)
> A modern JavaScript utility library delivering modularity, performance & extras.

##### Typescript 2.0.0
see [Typescript](https://www.typescriptlang.org)
> Typescript is a typed superset of Javascript that compiles ti plain Javascript. 

##### Ngx-dropdown 0.0.22
see [ngx-dropdown](https://github.com/pleerock/ngx-dropdown)
> Ngx-dropdown create dropdown for angular2 application using bootstrap3, not depend of jquery.

##### Ngx-modal 0.0.29
see [ngx-modal](https://github.com/pleerock/ngx-modal)
> Ngx-dropdown create modal for angular2 application using bootstrap3, not depend of jquery.

##### Ng2-dnd 2.2.2
see [ng2-dnd](https://github.com/akserg/ng2-dnd)
> Ng2-dnd drag and drop between elements or components

##### Moment 2.18.1
see [moment](https://momentjs.com/)
> Moment parse, validate, manipulate and display dates and times in javascript.

##### @ngrx/core 1.2.0
see [@ngrx/core](https://github.com/ngrx/core)
> The core is library that all ngrx modules are based on, includes core operators and utilities.

##### @ngrx/store 2.2.2
see [@ngrx/store](https://github.com/ngrx/store)
> The store is a state-management solution inspired by the famous library Redux. Redux popularized the idea of organizing the application state into simple objects (use primitive and non-primitive types in JavaScript) and updating this state by replacing it with a new state.

##### @ngrx/effects 2.0.3
see [@ngrx/effects](https://github.com/ngrx/effects)
> The ngrx/effects module is essentially a factory with which to create a side effect model for ngrx/store. Sometimes, a certain action should be followed by another action.

##### @ngrx/store-devtools 3.2.4
see [@ngrx/store-devtools](https://github.com/ngrx/store-devtools)
> The ngrx/store-devtools module is useful for development. It relies on Redux Devtools and allows watch the store's state at any time, see which actions are dispatched along with its payload, undo actions, and much more.

##### ngrx-store-freeze 0.1.9
see [ngrx-store-freeze](https://www.npmjs.com/package/ngrx-store-freeze)
> The ngrx-store-freeze is library very useful during development mode to ensure that no part of the app accidentally mutates the state. When mutation occurs, an exception will be thrown.

##### ngrx-store-logger 0.1.8
see [ngrx-store-logger](https://github.com/btroncone/ngrx-store-logger)
> The ngrx-store-logger is library very usefull durung developing mode to logger state, action for @ngrx/store application 

##### Json-server 0.10.1
see [json-server](https://github.com/typicode/json-server)
> The json-server is library get a full fake REST API with zero coding in less than 30 seconds. 

---
## Installation
Open terminal, run `npm install`

## Scripts

### 1. Run

** npm start **

* Run app on local server

** npm run start.dev **

* Run app on dev server

** npm run start.stag **

* Run app on staging server

** npm run start.prod **

* Run app on production server

When run one of each command above, navigate to [http://localhost:3000/](http://localhost:3000/) to run app

### 2. Build

** npm run build **

* Build app on local server

** npm run build.dev **

* Build app on dev server

** npm run build.stag **

* Build app on staging server

** npm run build.prod **

* Build app on production server

### 3. Test

** npm run test **

* Execute the unit tests via [Karma](https://karma-runner.github.io).

** npm run test.coverage **

* Check coverage test

** npm run e2e **

* Execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
