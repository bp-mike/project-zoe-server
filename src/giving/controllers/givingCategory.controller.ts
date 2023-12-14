// src/giving-category.controller.ts
import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { GivingCategoryService } from "../services/givingCategory.service";

@Controller("giving-categories")
export class GivingCategoryController {
  constructor(private readonly givingCategoryService: GivingCategoryService) {}

  @Get()
  findAll() {
    return this.givingCategoryService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.givingCategoryService.findOne(+id);
  }

  @Post()
  create(
    @Body("name") name: string,
    @Body("description") description: string,
    @Body("prefix") prefix: string,
  ) {
    return this.givingCategoryService.create(name, description, prefix);
  }

  // TODO Add more methods as needed
}
