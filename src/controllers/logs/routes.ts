import { Router } from 'express';

import { sanitizeMiddleware, validateMiddleware, asyncMiddleware } from '@/middlewares';

import controller from './Controller';
import validation from './validation';

const router = Router();

router
	.route('/')
	.post(
		sanitizeMiddleware(Object.keys(validation.addLog), 'body'),
		validateMiddleware(validation.addLog, ['body']),
		asyncMiddleware(controller.addLog)
	);

router
	.route('/')
	.get(
		sanitizeMiddleware(Object.keys(validation.fetchLogs), 'query'),
		validateMiddleware(validation.fetchLogs, ['query']),
		asyncMiddleware(controller.fetchLogs)
	);

export default router;
