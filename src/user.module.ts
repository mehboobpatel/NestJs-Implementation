import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: []
})
export class UserModule {  //used in main.ts
  constructor(){
    console.log("User Module");
  }
}

