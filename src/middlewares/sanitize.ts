import { Request, Response, NextFunction } from 'express';
import { pick } from 'lodash';

type TLocation = 'body' | 'cookies' | 'params' | 'query';

const sanitize = (pickItems: string[], location: TLocation) => (req: Request, __: Response, next: NextFunction) => {
	req[location] = pick(req[location], pickItems);

	next();
};

export default sanitize;
