import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module'; //app.module.ts change to root.module.ts
import { UserModule } from './user.module';
import { ChatModule } from './chat.module';
import { OrdersModule } from './orders.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  await app.listen(3000);
}
bootstrap();
