import log from 'fancy-log';

export class LoggerService {
	private readonly logger: any;

	constructor(){
		this.logger = log;
	}

	log(...args: unknown[]){
		this.logger.info(...args);
	}

	error(...args: unknown[]){
		this.logger.error(...args);
	}

	warn(...args: unknown[]){
		this.logger.warn(...args);
	}
}