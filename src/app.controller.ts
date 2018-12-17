import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'hello world';
  }

	@Get('good-bye')
	getGoodbye(): string {
		return 'goodBye'
	}

	@Get('get-number/:id')
	getNumber(@Param('id') id: string): string {
		return `your number is ${id}`;
	}

	@Post()
	postMain(@Body() data: any): string {
		return {info: 'your data in data key', ...data};
	}
}
