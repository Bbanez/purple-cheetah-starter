import * as path from 'path';
import { App } from './app.module';

const app = new App({
  logFileLocation: path.join(__dirname, '..', 'app.log'),
  staticContentDirectory: path.join(__dirname, '..', 'public'),
});
app.listen();
