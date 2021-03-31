import { App } from './config/app';

const app = new App();

export const server = app.getServer();