import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserBaseService } from './user.service';
import { UserItem } from 'src/core/types/user';
import { AddUserDto } from './dto/addUser.dto';


@Controller('/userBase')
export class UserBaseController {
    constructor(private readonly userBaseService: UserBaseService) { }

    @Get('/getUserList')
    getUserList() {
        return {
            code: 0,
            msg: 'success',
            data: []
        }
        // return this.userBaseService.getUserList();
    }

    @Post('addUser')
    addUser(@Body() userData: AddUserDto): UserItem[] {
        return this.userBaseService.addUser(userData);
    }

    @Get('getUserDetail/:id')
    getUserDetail(@Param('id') id: string): UserItem {
        return this.userBaseService.getUserDetail(id);
    }

    @Put('updateUser')
    updateUser(@Body() userData): UserItem[] {
        return this.userBaseService.updateUser(userData);
    }

    @Delete('deleteUser')
    deleteUser(@Query() query): UserItem[] {
        return this.userBaseService.deleteUser(query.id);
    }
}
