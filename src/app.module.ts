import {
  PurpleCheetah,
  Application,
  BodyParserMiddleware,
  CorsMiddleware,
  RequestLoggerMiddleware,
} from 'purple-cheetah';
import { HelloWorldController } from './hello-world/hello-world.controller';

@Application({
  port: parseInt(process.env.SERVICE_PORT, 10),
  controllers: [
    new HelloWorldController(),
  ],
  middleware: [
    new BodyParserMiddleware(),
    new CorsMiddleware(),
    new RequestLoggerMiddleware(),
  ],
  exceptionHandlers: [],
})
export class App extends PurpleCheetah {}
