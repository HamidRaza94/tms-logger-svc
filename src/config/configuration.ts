import { config } from 'dotenv';

import { APP_ENVIRONMENT } from '@/utils/constants';

import IConfig from './IConfig';

config();

// prettier-ignore
const MONGO_DB_URI = 'mongodb+srv://<MONGO_DB_USERNAME>:<MONGO_DB_PASSWORD>@<MONGO_DB_HOST>/<MONGO_DB_NAME>?<MONGO_DB_OPTIONS>'
	.replace('<MONGO_DB_USERNAME>', process.env.MONGO_DB_USERNAME)
	.replace('<MONGO_DB_PASSWORD>', process.env.MONGO_DB_PASSWORD)
	.replace('<MONGO_DB_HOST>', process.env.MONGO_DB_HOST)
	.replace('<MONGO_DB_NAME>', process.env.MONGO_DB_NAME)
	.replace('<MONGO_DB_OPTIONS>', 'retryWrites=true&w=majority');

const configuration: IConfig = Object.freeze({
	PORT: Number(process.env.PORT || 8000),
	NODE_ENV: process.env.NODE_ENV || APP_ENVIRONMENT.development,
	PROJECT_NAME: process.env.npm_package_name,
	PROJECT_VERSION: process.env.npm_package_version,
	MONGO_DB_URI,
});

export default configuration;
