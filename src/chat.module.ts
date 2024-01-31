import { Module } from '@nestjs/common';
import { Feature3 } from './feature3.module';
import { ClicreatedModule } from './clicreated/clicreated.module';


@Module({
  imports: [Feature3, ClicreatedModule],
  controllers: [],
  providers: [],
  exports: []
})
export class ChatModule {  //used in main.ts
  constructor(){
    console.log("Chat Module");
  }
}

