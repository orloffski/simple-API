import { App } from "./app";

async function runApp() {
	const app = new App();
	await app.init();
}

runApp();