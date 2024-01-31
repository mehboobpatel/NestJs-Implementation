import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: []
})
export class Feature3 {  //used in main.ts
  constructor(){
    console.log("Feature3 Module");
  }
}

