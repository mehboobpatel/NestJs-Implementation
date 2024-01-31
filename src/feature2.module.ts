import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: []
})
export class Feature2 {  //used in main.ts
  constructor(){
    console.log("Feature2 Module");
  }
}

