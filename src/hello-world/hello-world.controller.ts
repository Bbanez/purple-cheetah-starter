import { Controller, Get } from 'purple-cheetah';
import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';

@Controller('/')
export class HelloWorldController {
  @Get()
  async get() {
    return await util.promisify(fs.readFile)(
      path.join(__dirname, '/../../public/hello-world.html'),
      'utf8',
    );
  }

  @Get('/json')
  async getJSON() {
    return {
      message: 'This is Purple Cheetah starter application.',
    };
  }
}
