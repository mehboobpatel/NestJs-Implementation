import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { ChatModule } from './chat.module';
import { OrdersModule } from './orders.module';
import { AppController } from './app/app.controller';
import { ServcontController } from './servcont/servcont.controller';
import { CatService } from './cat/cat.service';


@Module({
  imports: [UserModule , ChatModule, OrdersModule],
  controllers: [AppController, ServcontController],
  providers: [CatService],
  exports: []
})
export class RootModule {  //used in main.ts
  constructor(){
    console.log("Root Module");
  }
}

