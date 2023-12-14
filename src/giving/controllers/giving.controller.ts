import { Controller, Get } from "@nestjs/common";

@Controller("giving")
export class GivingController {
  @Get()
  findAll(): string {
    return "all giving records still going strong";
  }
}
