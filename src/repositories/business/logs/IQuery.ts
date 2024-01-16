import { ERROR_TYPE, ERROR_LEVEL } from '@/utils/constants';

import { IVersionableQuery } from '../../versionable';

interface IData extends IVersionableQuery {
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

interface IConditions extends IVersionableQuery {
	message?: string;
	type?: ERROR_TYPE;
	level?: ERROR_LEVEL;
	timestamp?: Date;
	statusCode?: number;
	project?: string;
	requestId?: string;
	userId?: string;
	errs?: string;
}

export { IData, IConditions };
