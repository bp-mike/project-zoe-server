// src/giving-record.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { GivingCategory } from "./givingCategory.entity";
import { GivingNumber } from "./givingNumber.entity";

@Entity()
export class GivingRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(
    () => GivingCategory,
    (givingCategory) => givingCategory.givingRecords,
  )
  category: GivingCategory;

  @ManyToOne(() => GivingNumber, (givingNumber) => givingNumber.givingRecords)
  givingNumber: GivingNumber;
}
