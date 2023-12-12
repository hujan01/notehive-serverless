import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule], // 导入模块的列表，如果需要使用其他模块的服务，需要通过这里导入
  controllers: [AppController], // 控制器
  providers: [AppService], // 服务提供者，处理具体的业务逻辑
})
export class AppModule {}
