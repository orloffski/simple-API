import express, { Request, Response, NextFunction } from 'express';
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

app.use((req, res, next) => {
	let data = new Date();
	console.log(`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()} ${req.method} ${req.get('user-agent')}`);
	next();
});

app.get('/', (req, res) => {
	res.send('Hello!');
});

app.use('/users', userRouter);

app.all('*', (req, res) => {
	throw new Error('page not found!')
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.log(`Error: ${err.message}`);
	res.status(404).send(err.message);
});

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
})