import { Schema } from 'express-validator';
import { validate as validateUUID } from 'uuid';
import { Types } from 'mongoose';
import { statusCodes } from 'system-response-lib';

import { ERROR_TYPE, ERROR_LEVEL } from '@/utils/constants';
import { STARTS_WITH_TMS } from '@/utils/regex';

const addLog: Schema = {
	message: {
		errorMessage: 'Message field is invalid',
		notEmpty: {
			errorMessage: 'Message field is required',
		},
		isString: {
			errorMessage: 'Message field should be string',
		},
		isLength: {
			options: {
				min: 3,
			},
			errorMessage: 'Message field should be at least 3 characters',
		},
	},
	type: {
		errorMessage: 'Type field is invalid',
		notEmpty: {
			errorMessage: 'Type field is required',
		},
		isIn: {
			options: [Object.values(ERROR_TYPE)],
			errorMessage: `Type field could be ${Object.values(ERROR_TYPE).join(', ')}`,
		},
	},
	level: {
		errorMessage: 'Level field is invalid',
		notEmpty: {
			errorMessage: 'Level field is required',
		},
		isIn: {
			options: [Object.values(ERROR_LEVEL)],
			errorMessage: `Level field could be ${Object.values(ERROR_LEVEL).join(', ')}`,
		},
	},
	timestamp: {
		errorMessage: 'Timestamp field is invalid',
		notEmpty: {
			errorMessage: 'Timestamp field is required',
		},
		isISO8601: {
			errorMessage: 'Timestamp field should be date type',
		},
	},
	statusCode: {
		errorMessage: 'Status code field is invalid',
		isNumeric: {
			errorMessage: 'Status code field should be numeric',
		},
		isIn: {
			options: [Object.values(statusCodes)],
			errorMessage: `Status code field could be ${Object.values(statusCodes).join(', ')}`,
		},
	},
	project: {
		errorMessage: 'Project field is invalid',
		notEmpty: {
			errorMessage: 'Project field is required',
		},
		matches: {
			options: [STARTS_WITH_TMS],
			errorMessage: 'Project field is invalid',
		},
	},
	requestId: {
		errorMessage: 'Request ID field is invalid',
		notEmpty: {
			errorMessage: 'Request ID field is required',
		},
		isString: {
			errorMessage: 'Request ID field should be string type',
		},
		custom: {
			options: (v) => validateUUID(v),
			errorMessage: 'Request ID field is invalid',
		},
	},
	userId: {
		errorMessage: 'User ID field is invalid',
		notEmpty: {
			errorMessage: 'User ID field is required',
		},
		isString: {
			errorMessage: 'Request ID field should be string type',
		},
		custom: {
			options: (v) => Types.ObjectId.isValid(v),
			errorMessage: 'User ID field is invalid',
		},
	},
	errs: {
		errorMessage: 'Errors field is invalid',
		notEmpty: {
			errorMessage: 'Errors field is required',
		},
		isString: {
			errorMessage: 'Request ID field should be string type',
		},
	},
};

const fetchLogs: Schema = {
	type: {
		optional: true,
		errorMessage: 'Type field is invalid',
		isIn: {
			options: [Object.values(ERROR_TYPE)],
			errorMessage: `Type field could be ${Object.values(ERROR_TYPE).join(', ')}`,
		},
	},
	level: {
		optional: true,
		errorMessage: 'Level field is required',
		isIn: {
			options: [Object.values(ERROR_LEVEL)],
			errorMessage: `Level field could be ${Object.values(ERROR_LEVEL).join(', ')}`,
		},
	},
	timestamp: {
		optional: true,
		errorMessage: 'Timestamp field is required',
		isISO8601: {
			errorMessage: 'Timestamp field should be date type',
		},
	},
	project: {
		optional: true,
		errorMessage: 'Project field is invalid',
		matches: {
			options: [STARTS_WITH_TMS],
			errorMessage: 'Project field is invalid',
		},
	},
	requestId: {
		optional: true,
		errorMessage: 'Request ID field is invalid',
		isString: {
			errorMessage: 'Request ID field should be string type',
		},
		custom: {
			options: (v) => validateUUID(v),
			errorMessage: 'Request ID field is invalid',
		},
	},
	userId: {
		optional: true,
		errorMessage: 'User ID field is invalid',
		isString: {
			errorMessage: 'Request ID field should be string type',
		},
		custom: {
			options: (v) => Types.ObjectId.isValid(v),
			errorMessage: 'User ID field is invalid',
		},
	},
};

export default {
	addLog,
	fetchLogs,
};
