import { ERROR_TYPE, ERROR_LEVEL } from '@/utils/constants';

import { IVersionableModel } from '../../versionable';

interface IModel extends IVersionableModel {
	message: string;
	type: ERROR_TYPE;
	level: ERROR_LEVEL;
	timestamp: Date;
	statusCode: number;
	project: string;
	requestId: string;
	userId: string;
	errs: string;
}

export default IModel;
