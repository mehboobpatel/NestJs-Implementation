import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { ChatModule } from './chat.module';
import { OrdersModule } from './orders.module';


@Module({
  imports: [UserModule , ChatModule, OrdersModule],
  controllers: [],
  providers: [],
  exports: []
})
export class RootModule {  //used in main.ts
  constructor(){
    console.log("Root Module");
  }
}

