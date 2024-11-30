export type Id = string | number;

export type Column = {
	Id: string;
	title: string;
};

export type Task = {
	id: Id;
	columnId: Id;
	summary: string;
	description: string;
	daysLeft: string;
	TeamMembers: Array<{
		img: string;
	}>;
	bgClass: string;
};