import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GivingController } from "./controllers/giving.controller";
import { GivingService } from "./giving.service";
import { GivingCategoryController } from "./controllers/givingCategory.controller";
import { GivingCategoryService } from "./services/givingCategory.service";
import { GivingNumberController } from "./controllers/givingNumber.controller";
import { GivingNumberService } from "./services/givingNumber.service";
import { GivingRecordController } from "./controllers/givingRecord.controller";
import { GivingRecordService } from "./services/givingRecord.service";
import { GivingCategory } from "./entities/givingCategory.entity";
import { GivingNumber } from "./entities/givingNumber.entity";
import { GivingRecord } from "./entities/givingRecord.entity";
import { User } from "src/users/entities/user.entity";

@Module({
  // imports: [],
  imports: [
    TypeOrmModule.forFeature([
      GivingCategory,
      GivingNumber,
      GivingRecord,
      User,
    ]),
  ],
  controllers: [
    GivingController,
    GivingCategoryController,
    GivingNumberController,
    GivingRecordController,
  ],
  providers: [
    GivingService,
    GivingCategoryService,
    GivingNumberService,
    GivingRecordService,
  ],
})
export class GivingModule {}
