// src/giving-record.controller.ts
import { Controller, Get, Param } from "@nestjs/common";
import { GivingRecordService } from "../services/givingRecord.service";

@Controller("giving-records")
export class GivingRecordController {
  constructor(private readonly givingRecordService: GivingRecordService) {}

  @Get()
  findAll() {
    return this.givingRecordService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.givingRecordService.findOne(+id);
  }

  // Add more methods as needed
}
