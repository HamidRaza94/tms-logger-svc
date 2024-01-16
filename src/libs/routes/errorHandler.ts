import { Request, Response } from 'express';

import IError from './IError';

const unCaughtErrMsg = 'Internal Server Error';
const unCaughtStatus = 500;

const errorHandler = (err: IError, _: Request, res: Response) => {
	const { message = unCaughtErrMsg, status = unCaughtStatus, errs } = err;

	const error = {
		message,
		status,
		errs,
		requestId: '',
		userId: '',
		timestamp: new Date(),
	};

	res.status(error.status).send(error);
};

export default errorHandler;
