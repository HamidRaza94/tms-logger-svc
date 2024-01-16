import Server from '@/libs/Server';
import config from '@/config';

(() => {
	const initServer = () => {
		const server: Server = new Server(config);

		server.bootstrap().run();

		console.info('configuration', config);
	};

	initServer();
})();
