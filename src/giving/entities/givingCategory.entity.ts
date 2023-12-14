// src/giving-category.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { GivingNumber } from "./givingNumber.entity";
import { GivingRecord } from "./givingRecord.entity";

@Entity()
export class GivingCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 500 })
  description: string;

  @Column({ length: 10, nullable: true })
  prefix: string;

  @OneToMany(() => GivingNumber, (givingNumber) => givingNumber.givingCategory)
  givingNumbers: GivingNumber[];

  @OneToMany(() => GivingRecord, (givingRecord) => givingRecord.category)
  givingRecords: GivingRecord[];
}
