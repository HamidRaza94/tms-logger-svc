import { relative, join } from 'path';

const getFilePath = (dirname: string, filename: string): string => {
	return join('src', relative(dirname, filename));
};

export { getFilePath };
