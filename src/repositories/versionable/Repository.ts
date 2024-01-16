import { Document, Model, Types } from 'mongoose';
import SystemResponse from 'system-response-lib';

import { IVersionableQuery } from './IQuery';

class VersionableRepository<
	D extends Document,
	M extends Model<D>,
	IData extends IVersionableQuery,
	IConditions extends IVersionableQuery,
	IOptions,
> {
	constructor(private model: M) {}

	private static generateObjectId(): string {
		return String(new Types.ObjectId());
	}

	protected async save(data: IData): Promise<D> {
		const id = VersionableRepository.generateObjectId();

		const doc = new this.model({ ...data, _id: id });
		let result: D;

		try {
			result = await doc.save();
		} catch (ex) {
			const errorMessage = ex?.message ? ex.message : 'Document could not create';
			throw SystemResponse.internalServerError(errorMessage, ex);
		}

		if (!result) {
			throw SystemResponse.internalServerError('Document could not create');
		}

		return doc;
	}

	protected async find(conditions?: IConditions, options?: IOptions): Promise<D[]> {
		try {
			const finalOptions = { lean: true, ...options };

			return await this.model.find(conditions).setOptions(finalOptions);
		} catch (ex) {
			const errorMessage = ex?.message ? ex.message : 'Documents could not fetch';
			throw SystemResponse.internalServerError(errorMessage, ex);
		}
	}

	protected async findOne(conditions?: IConditions, options?: IOptions): Promise<D> {
		try {
			const finalOptions = { lean: true, ...options };

			const finalCondition = conditions?.id ? { _id: conditions?.id } : conditions;

			return await this.model.findOne(finalCondition).setOptions(finalOptions);
		} catch (ex) {
			const errorMessage = ex?.message ? ex.message : 'Document could not fetch';
			throw SystemResponse.internalServerError(errorMessage, ex);
		}
	}
}

export default VersionableRepository;
