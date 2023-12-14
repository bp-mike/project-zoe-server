// src/giving-number.controller.ts
import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { GivingNumberService } from "../services/givingNumber.service";

@Controller("giving-numbers")
export class GivingNumberController {
  constructor(private readonly givingNumberService: GivingNumberService) {}

  @Get()
  findAll() {
    return this.givingNumberService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.givingNumberService.findOne(+id);
  }

  @Post()
  create(
    @Body("userId") userId: number,
    @Body("givingCategoryId") givingCategoryId: number,
    @Body("number") number: string,
  ) {
    return this.givingNumberService.create(userId, givingCategoryId, number);
  }

  // Add more methods as needed
}
