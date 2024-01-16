import { SchemaDefinition, SchemaOptions, Types } from 'mongoose';
import { validate as validateUUID } from 'uuid';
import { statusCodes } from 'system-response-lib';

import { ERROR_TYPE, ERROR_LEVEL } from '@/utils/constants';
import { STARTS_WITH_TMS } from '@/utils/regex';

import { VersionableSchema } from '../../versionable';

class Schema extends VersionableSchema {
	constructor() {
		const baseSchema: SchemaDefinition = {
			message: {
				type: String,
				required: [true, 'Message field is required'],
				minlength: [3, 'Message field should be at least 3 characters'],
			},
			type: {
				type: String,
				enum: ERROR_TYPE,
				required: true,
			},
			level: {
				type: String,
				enum: ERROR_LEVEL,
				required: true,
			},
			timestamp: {
				type: Date,
				required: true,
			},
			statusCode: {
				type: Number,
				validate: {
					validator: (v: number) => {
						Object.values(statusCodes).some((statusCode) => statusCode === v);
					},
					message: () => `Status code field could be ${Object.values(statusCodes).join(', ')}`,
				},
				required: true,
			},
			project: {
				type: String,
				required: true,
				match: [STARTS_WITH_TMS, 'Project field is invalid'],
			},
			requestId: {
				type: String,
				required: true,
				validate: {
					validator: (v: string) => validateUUID(v),
					message: () => 'Request ID field is invalid',
				},
			},
			userId: {
				type: String,
				required: true,
				validate: {
					validator: (v: string) => Types.ObjectId.isValid(v),
					message: 'User ID field is invalid',
				},
			},
			errs: {
				type: String,
				required: true,
			},
		};

		const baseOptions: SchemaOptions = {};

		super(baseSchema, baseOptions);
	}
}

export default Schema;
