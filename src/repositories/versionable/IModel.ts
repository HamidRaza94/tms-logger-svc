import { Document, Types } from 'mongoose';

interface IVersionableModel extends Document {
	_id: Types.ObjectId;
	createdAt: Date;
	deletedAt: Date;
	updatedAt: Date;
}

export default IVersionableModel;
