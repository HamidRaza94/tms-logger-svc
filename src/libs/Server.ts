import * as express from 'express';
import helmet from 'helmet';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

import { IConfig } from '@/config';

import Database from './Database';
import { notFoundRoute, errorHandler } from './routes';
import router from './router';

class Server {
	private app: express.Express;

	constructor(private config: IConfig) {
		this.app = express();
	}

	public bootstrap(): this {
		this.initHelmet();
		this.initCors();
		this.initCookie();
		this.initBodyParser();
		this.setupRoutes();

		return this;
	}

	public async run() {
		const { PORT, MONGO_DB_URI } = this.config;

		const isDbConnected = await Database.open(MONGO_DB_URI);

		if (isDbConnected) {
			this.app.listen(PORT, () => {
				console.log('|--------------------------------|');
				console.log(`| Server is running on port ${PORT} |`);
				console.log('|--------------------------------|');
			});
		} else {
			console.log('DB Connection Failure');
		}
	}

	private setupRoutes() {
		this.app.use((req: express.Request, _, next: express.NextFunction) => {
			console.log('incoming req ->', req.path);
			next();
		});
		this.app.use('/health-check', (_, res: express.Response) => {
			res.status(200).send('I am Good');
		});
		this.app.use('/api', router);
		this.app.use(notFoundRoute);
		this.app.use(errorHandler);
	}

	private initHelmet() {
		this.app.use(helmet());
	}

	private initCors() {
		this.app.use(cors());
	}

	private initBodyParser() {
		this.app.use(bodyParser.json());
	}

	private initCookie() {
		this.app.use(cookieParser());
	}
}

export default Server;
