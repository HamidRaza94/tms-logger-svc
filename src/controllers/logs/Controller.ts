import { Request, Response } from 'express';
import SystemResponse, { statusCodes } from 'system-response-lib';

import { logsRepository, ILogsModel } from '@/repositories';

type TAddLogReqBody = Request<{}, {}, ILogsModel>;
type ReqQuery = Pick<ILogsModel, 'type' | 'level' | 'timestamp' | 'project' | 'requestId' | 'userId'>;
type TFetchLogsReqQuery = Request<{}, {}, {}, ReqQuery>;

class Controller {
	public async addLog(req: TAddLogReqBody, res: Response): Promise<void> {
		const result = await logsRepository.create(req.body);

		res.status(statusCodes.CONTENT_CREATED).send(SystemResponse.contentCreated('Log is successfully added', result));
	}

	public async fetchLogs(req: TFetchLogsReqQuery, res: Response): Promise<void> {
		const result = await logsRepository.read(req.query);

		res.status(statusCodes.SUCCESS).send(SystemResponse.success('Logs fetched successfully', result));
	}
}

export default new Controller();
