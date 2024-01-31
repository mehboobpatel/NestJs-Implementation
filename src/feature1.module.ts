import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: []
})
export class Feature1 {  //used in main.ts
  constructor(){
    console.log("Feature1 Module");
  }
}

