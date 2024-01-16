import { Types } from 'mongoose';

interface IVersionableQuery {
	id?: string;
	deletedAt?: Date;
}

export { IVersionableQuery };
