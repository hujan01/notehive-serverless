import { Module } from '@nestjs/common';
import { UserBaseController } from './user.controller';
import { UserBaseService } from './user.service';

@Module({
  controllers: [UserBaseController],
  providers: [UserBaseService],
})
export class UserModule {}
