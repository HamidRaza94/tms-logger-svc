import { connect, disconnect, ConnectOptions } from 'mongoose';

class Database {
	public static async open(mongoURI: string) {
		return new Promise((resolve) => {
			const options: ConnectOptions = {};

			connect(mongoURI, options)
				.then(() => {
					console.log('Successfully Connected to MongoDB');
					return resolve('Successfully Connected to MongoDB');
				})
				.catch((err: Error) => {
					console.log('Error:', err.message);
				});
		});
	}

	public static close() {
		disconnect();
	}
}

export default Database;
