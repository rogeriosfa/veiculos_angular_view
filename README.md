# Instruções para uso

Para roda este projeto você precisa ter [Node.js](https://nodejs.org/en/) instalado em sua maquina.

Também estamos utilizano [Angular CLI](https://github.com/angular/angular-cli/wiki).

    npm install -g @angular/cli

Após Instalar Angular CLI, no diretorio do projeto execute o seguinte comando para criar o pacote node_modules:

    npm install

Agora que tudo está configurado, basta executar o seguinte comando para rodar o projeto no navegador:

    ng serve

O projeto será disponibilizado na seguinte rota: 

    http://localhost:4200

Caso a porta 4200 esteja em uso, o pront irá avisar, para contorna esse questão basta usar o seguinte comando:

    ng serve --port 4201

# VeiculosView

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
