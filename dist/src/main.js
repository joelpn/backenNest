"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const strings_1 = require("../constants/strings");
const environment_1 = require("../environment/environment");
let colors = require('colors/safe');
const port = environment_1.default.NODE_PORT;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(port);
    console.log(colors.bgCyan.black(`${strings_1.default.APP_PORT}` + port));
}
bootstrap();
//# sourceMappingURL=main.js.map