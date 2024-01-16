import { Request, Response, NextFunction } from 'express';

const async = (handler: Function) => async (req: Request, res: Response, next: NextFunction) => {
	try {
		await handler(req, res, next);
	} catch (ex) {
		if (ex.errs) {
			const errorStack = new Error(ex.errs).stack;

			next({
				message: ex.message,
				status: ex.status,
				errs: errorStack,
			});

			return;
		}

		next({
			message: ex.message,
			status: ex.status,
			errs: ex.stack,
		});
	}
};

export default async;
