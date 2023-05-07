/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import AppStrings from "../constants/strings";
import environment from 'environment/environment';
// import colors from 'colors/safe';
let colors = require('colors/safe');

const port = environment.NODE_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(colors.bgCyan.black(`${AppStrings.APP_PORT}` + port));
}
bootstrap();
