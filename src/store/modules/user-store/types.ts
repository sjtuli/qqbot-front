export type RoleType = '' | '*' | 'admin' | 'user';

export type wxlogin = {
	openid?: string
	session_key?: string
	unionId?: string
	errcode?: number
	errmsg?: string
}

export default interface UserState extends wxlogin {
	id?: number,
	avatar?: string,
	createdAt?: number,
	isAdmin?: number,
	nickname?: string,
	sessionKey?: string,
	state?: number,
	updatedAt?: number,
	access_token?: string,
	token?: string,
	role?: string,
}


