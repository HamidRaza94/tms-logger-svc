import { Request, Response, NextFunction } from 'express';
import SystemResponse from 'system-response-lib';

const notFoundRoute = (_: Request, __: Response, next: NextFunction) => {
	const error = SystemResponse.notFoundError('Not Found Route');

	next(error);
};

export default notFoundRoute;
