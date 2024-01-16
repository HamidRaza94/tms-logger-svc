import codeMessages from './codeMessages';
import statusCodes from './statusCodes';

interface IErrorResponse {
	message: string;
	status: number;
	errs: any;
}

interface IResponse {
	message: string;
	status: number;
}

interface ISuccussResponse {
	message: string;
	status: number;
	data: any;
}

class SystemResponse {
	static getInstance(): SystemResponse {
		return new SystemResponse();
	}

	static continueInfo(message: string): IResponse {
		return SystemResponse.getInstance().getResponse(message, statusCodes.CONTINUE);
	}

	static switchingProtocolsInfo(message: string): IResponse {
		return SystemResponse.getInstance().getResponse(message, statusCodes.SWITCHING_PROTOCOLS);
	}

	static success(message: string, data: any): ISuccussResponse {
		return {
			message: message || codeMessages[statusCodes.SUCCESS],
			status: statusCodes.SUCCESS,
			data: data || {},
		};
	}

	static contentCreated(message: string, data: any): ISuccussResponse {
		return {
			message: message || codeMessages[statusCodes.CONTENT_CREATED],
			status: statusCodes.CONTENT_CREATED,
			data: data || {},
		};
	}

	static contentDeleted(message: string, data: any): ISuccussResponse {
		return {
			message: message || codeMessages[statusCodes.CONTENT_DELETED],
			status: statusCodes.CONTENT_DELETED,
			data: data || {},
		};
	}

	static multipleChoicesRedirect(message: string): IResponse {
		return SystemResponse.getInstance().getResponse(message, statusCodes.MULTIPLE_CHOICES);
	}

	static movedPermanentlyRedirect(message: string): IResponse {
		return SystemResponse.getInstance().getResponse(message, statusCodes.MOVED_PERMANENTLY);
	}

	static foundRedirect(message: string): IResponse {
		return SystemResponse.getInstance().getResponse(message, statusCodes.FOUND);
	}

	static seeOtherRedirect(message: string): IResponse {
		return SystemResponse.getInstance().getResponse(message, statusCodes.SEE_OTHER);
	}

	static notModifiedRedirect(message: string): IResponse {
		return SystemResponse.getInstance().getResponse(message, statusCodes.NOT_MODIFIED);
	}

	static useProxyRedirect(message: string): IResponse {
		return SystemResponse.getInstance().getResponse(message, statusCodes.USE_PROXY);
	}

	static temporaryRedirect(message: string): IResponse {
		return SystemResponse.getInstance().getResponse(message, statusCodes.TEMPORARY_REDIRECT);
	}

	static badRequestError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.BAD_REQUEST, errs);
	}

	static unauthorizedError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.UNAUTHORIZED, errs);
	}

	static paymentRequiredError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.PAYMENT_REQUIRED, errs);
	}

	static forbiddenError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.FORBIDDEN, errs);
	}

	static notFoundError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.NOT_FOUND, errs);
	}

	static methodNotAllowedError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.METHOD_NOT_ALLOWED, errs);
	}

	static notAcceptableError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.NOT_ACCEPTABLE, errs);
	}

	static proxyAuthRequiredError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.PROXY_AUTHENTICATION_REQUIRED, errs);
	}

	static requestTimeoutError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.REQUEST_TIMEOUT, errs);
	}

	static conflictError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.CONFLICT, errs);
	}

	static goneError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.GONE, errs);
	}

	static lengthRequiredError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.LENGTH_REQUIRED, errs);
	}

	static preconditionFailedError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.PRECONDITION_FAILED, errs);
	}

	static requestEntityTooLargeError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.REQUEST_ENTITY_TOO_LARGE, errs);
	}

	static requestUriTooLongError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.REQUEST_URI_TOO_LONG, errs);
	}

	static unsupportedMediaTypeError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.UNSUPPORTED_MEDIA_TYPE, errs);
	}

	static rangeNotSatisfiableError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.REQUESTED_RANGE_NOT_SATISFIABLE, errs);
	}

	static expectationFailedError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.EXPECTATION_FAILED, errs);
	}

	static unProcessableEntityError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.UN_PROCESSABLE_ENTITY, errs);
	}

	static internalServerError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.INTERNAL_SERVER_ERROR, errs);
	}

	static notImplementedError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.NOT_IMPLEMENTED, errs);
	}

	static badGatewayError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.BAD_GATEWAY, errs);
	}

	static serviceUnavailableError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.SERVICE_UNAVAILABLE, errs);
	}

	static gatewayTimeoutError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.GATEWAY_TIME_OUT, errs);
	}

	static httpVersionNotSupportedError(message: string, errs?: any): IErrorResponse {
		return SystemResponse.getInstance().getErrorResponse(message, statusCodes.HTTP_VERSION_NOT_SUPPORTED, errs);
	}

	getErrorResponse(message: string, code: number, errs?: any): IErrorResponse {
		return {
			message: message || codeMessages[code],
			status: code,
			errs: errs || codeMessages[code],
		};
	}

	getResponse(message: string, code: number): IResponse {
		return {
			message: message || codeMessages[code],
			status: code,
		};
	}
}

export default SystemResponse;
