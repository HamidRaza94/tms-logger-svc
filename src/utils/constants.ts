enum APP_ENVIRONMENT {
	development = 'development',
	production = 'production',
}

enum ERROR_TYPE {
	EXCEPTION = 'EXCEPTION',
	ERROR = 'ERROR',
	REQUEST = 'REQUEST',
}

enum ERROR_LEVEL {
	CRITICAL = 'CRITICAL',
	MAJOR = 'MAJOR',
	MINOR = 'MINOR',
	WARNING = 'WARNING',
}

export { APP_ENVIRONMENT, ERROR_TYPE, ERROR_LEVEL };
