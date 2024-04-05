# Cuba

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## How to insall CUBA

Step 1
 ` npm install -g @angular/cli` 

Step 2
 ` npm install  --force `

Step 3
 ` ng build `


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Clear Cache

`npm cache clean --force`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# <font color="orange"> My Command  </font>

## Deploy Server

` ng serve `

## Create Component

` ng g component  components/inventory/report/invbygroup --module app `

` ng g component  components/transaction/stock-receive/str-list --module app `

` ng g component  components/transaction/stock-receive/str-create --module app `

` ng g component  components/transaction/stock-move/stm-create --module app `

` ng g component  components/transaction/stock-move/stm-list --module app `

` ng g component  components/transaction/stock-move --module app `

` ng g component  components/transaction/stock-out --module app `

## Create Module 
ต้องเพิ่ม Route ด้วยเพื่อใช้ในการสร้างเมนูเรียกหน้าเพจ <br/>
` ng g module components/transaction --routing ` 