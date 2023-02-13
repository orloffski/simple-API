import express, { Express } from 'express';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';
import { userRouter } from './users/users';

export class App {
	app: Express;
	port: number;
	server: Server;
	logger: LoggerService;

	constructor(logger: LoggerService){
		this.app = express();
		this.port = 8000;
		this.logger = logger;
	}

	public async init(){
		this.useRoute();
		this.app.listen(this.port);
		this.logger.log(`Server started on http://localhost:${this.port}`);
	}

	useRoute(){
		this.app.use('/users', userRouter);
	}
}