import { Model as MongooseModel } from 'mongoose';

import { VersionableRepository } from '../../versionable';
import IModel from './IModel';
import Model from './Model';
import { IData, IConditions } from './IQuery';
import { IOptions } from '../../entities';

class Repository extends VersionableRepository<IModel, MongooseModel<IModel>, IData, IConditions, IOptions> {
	constructor() {
		super(Model);
	}

	public async create(data: IData): Promise<IModel> {
		return await super.save(data);
	}

	public async read(conditions?: IConditions, options?: IOptions): Promise<IModel[]> {
		return await super.find(conditions, options);
	}

	public async readById(id: string, options?: IOptions): Promise<IModel> {
		return await super.findOne({ id }, options);
	}
}

export default new Repository();
