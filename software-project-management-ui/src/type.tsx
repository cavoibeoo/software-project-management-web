export type Id = string | number;

export type Column = {
	_id: string;
	name: string;
	description: string;
	workflowType: string;
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

export type Sprint = {
	_id: string;
	name: string;
	status: string;
	startDate: Date;
	endDate: Date;
	sprintGoal: string;
	issues: [any];
};

export type Issue = {
	_id: string;
	key: string;
	summary: string;
	// Add other properties if necessary
};

export type ColumnWorkflow = {
	Id: string;
	title: string;
	workflowType: string;
};
