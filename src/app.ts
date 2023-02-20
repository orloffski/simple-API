import express, { Express } from 'express';
import { Server } from 'http';
import { ExceptionFilter } from './error/exception.filter';
import { ILogger } from './logger/logger.interface';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/users.controller';

export class App {
	app: Express;
	port: number;
	server: Server;
	logger: ILogger;
	userController: UserController;
	exceptionFilter: ExceptionFilter;

	constructor(logger: ILogger, userController: UserController, exceptionFilter: ExceptionFilter){
		this.app = express();
		this.port = 8000;
		this.logger = logger;
		this.userController = userController;
		this.exceptionFilter = exceptionFilter;
	}

	useRoute(){
		this.app.use('/users', this.userController.router);
	}

	useExceptionFilter(){
		this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
	}

	public async init(){
		this.useRoute();
		this.useExceptionFilter();
		this.app.listen(this.port);
		this.logger.log(`Server started on http://localhost:${this.port}`);
	}
}