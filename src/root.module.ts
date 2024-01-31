import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { ChatModule } from './chat.module';
import { OrdersModule } from './orders.module';
import { AppController } from './app/app.controller';


@Module({
  imports: [UserModule , ChatModule, OrdersModule],
  controllers: [AppController],
  providers: [],
  exports: []
})
export class RootModule {  //used in main.ts
  constructor(){
    console.log("Root Module");
  }
}

