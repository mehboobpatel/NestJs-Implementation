<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

we will use watch mode 

```
npm run start:dev
```

## Stay in touch

```
following the structure just firstly maintain root.module.ts and main.ts check for the imports in the main.ts 
```

Than add a constructor to the export class root module to console.log 

now check the terminal u will se 
RootModule



similary make three files
``` 
touch user.module.ts orders.module.ts chat.module.ts
```

and than change the constructor's console.log and other namee declaration accordingly 

so we are basically following this structure. 
![Architecture](image.png)

now enter in the code of root.module.ts under import and pass the three module as array 
  imports: [UserModule , ChatModule, OrdersModule],


now check the terminal u will se 
RootModule
UserModule
ChatModule
OrdersModule 


after this follow the architecture diagram
and make three files of Feature1,2,3
``` 
touch feature1.module.ts feature2.module.ts feature3.module.ts
```

and import this module accordingly in to the orders.module.ts and chat.module.ts

you will get this output finally 

![Alt text](image-1.png)

* NOTE since we are manually creating the modules file so to solve this we have nest commands just type nest --help

so to create files from cli use
```
nest g mo clicreated
```

where g stands for generate and mo stands for module 

* so this will automatctly create a folder (clicreated) and a file called clicreate.module.ts
and will import it in root.module.ts
in my case it got imprtd in chat.module.ts but if you creating a project from scratch it will go under root.module.ts

![cli command](image-3.png)

like this ![Alt text](image-2.png)
## License

Nest is [MIT licensed](LICENSE).
