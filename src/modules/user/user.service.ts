import { Injectable } from '@nestjs/common';
import { UserItem } from 'src/core/types/user';

@Injectable()
export class UserBaseService {
  private userList = [];

	getUserList(): UserItem[] {
		return this.userList;
	}

	addUser(userData: UserItem): UserItem[] {
		this.userList.push(userData);
		return this.userList;
	}

	deleteUser(userId): UserItem[] {
		this.userList = this.userList.filter(item => item.id !== parseInt(userId));
		return this.userList;
	}

	updateUser(userData: UserItem): UserItem[] {
		this.userList = this.userList.map(item => {
			if (item.id === userData.id) {
				return userData;
			}
			return item;
		})
		return this.userList;
	}

	getUserDetail(userId: string): UserItem {
		return this.userList.find(item => item.id === parseInt(userId)) || {};
  }
}
