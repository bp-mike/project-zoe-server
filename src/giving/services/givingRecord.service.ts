// src/giving-record.service.ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GivingRecord } from "../entities/givingRecord.entity";

@Injectable()
export class GivingRecordService {
  constructor(
    @InjectRepository(GivingRecord)
    private readonly givingRecordRepository: Repository<GivingRecord>,
  ) {}

  findAll(): Promise<GivingRecord[]> {
    return this.givingRecordRepository.find();
  }

  findOne(id: number): Promise<GivingRecord> {
    return this.givingRecordRepository.findOne({ where: { id } });
  }

  // Add more methods as needed
}
