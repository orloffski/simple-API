import express, { Express } from 'express';
import { Server } from 'http';
import { userRouter } from './users/users';

export class App {
	app: Express;
	port: number;
	server: Server;

	constructor(){
		this.app = express();
		this.port = 8000;
	}

	public async init(){
		this.useRoute();
		this.app.listen(this.port);
		console.log(`Server started on http://localhost:${this.port}`);
	}

	useRoute(){
		this.app.use('/users', userRouter);
	}
}