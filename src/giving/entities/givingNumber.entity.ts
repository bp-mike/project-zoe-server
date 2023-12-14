// src/giving-number.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "src/users/entities/user.entity";
import { GivingCategory } from "./givingCategory.entity";
import { GivingRecord } from "./givingRecord.entity";

@Entity()
export class GivingNumber {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  number: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(
    () => GivingCategory,
    (givingCategory) => givingCategory.givingNumbers,
  )
  givingCategory: GivingCategory;

  @OneToMany(() => GivingRecord, (givingRecord) => givingRecord.givingNumber)
  givingRecords: GivingRecord[];
}
