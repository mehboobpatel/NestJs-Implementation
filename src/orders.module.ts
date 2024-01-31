import { Module } from '@nestjs/common';
import { Feature2 } from './feature2.module';
import { Feature1 } from './feature1.module';


@Module({
  imports: [Feature1 ,Feature2],
  controllers: [],
  providers: [],
  exports: []
})
export class OrdersModule {  //used in main.ts
  constructor(){
    console.log("Orders Module");
  }
}

