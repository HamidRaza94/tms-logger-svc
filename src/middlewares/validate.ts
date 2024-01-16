import { Request, Response, NextFunction } from 'express';
import { checkSchema, validationResult, Schema, Location } from 'express-validator';
import SystemResponse from 'system-response-lib';

const validate = (schema: Schema, location: Location[]) => async (req: Request, _: Response, next: NextFunction) => {
	await checkSchema(schema, location).run(req);
	const result = validationResult(req);

	if (!result.isEmpty()) {
		const errors = {};

		result.array().forEach((error) => {
			if (error.type === 'field' && errors[error.path]) {
				errors[error.path].push(error.msg);
			} else if (error.type === 'field') {
				errors[error.path] = [error.msg];
			}
		});

		const error = SystemResponse.badRequestError('Validation error', errors);

		next(error);
		return;
	}

	next();
};

export default validate;
