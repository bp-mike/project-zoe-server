// src/giving-number.service.ts
import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GivingNumber } from "../entities/givingNumber.entity";
import { User } from "src/users/entities/user.entity";
import { GivingCategory } from "../entities/givingCategory.entity";

@Injectable()
export class GivingNumberService {
  constructor(
    @InjectRepository(GivingNumber)
    private readonly givingNumberRepository: Repository<GivingNumber>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(GivingCategory)
    private readonly givingCategoryRepository: Repository<GivingCategory>,
  ) {}

  findAll(): Promise<GivingNumber[]> {
    return this.givingNumberRepository.find();
  }

  findOne(id: number): Promise<GivingNumber> {
    return this.givingNumberRepository.findOne({ where: { id } });
  }

  async create(
    userId: number,
    givingCategoryId: number,
    number: string,
  ): Promise<GivingNumber> {
    // Check if the user and giving category exist
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const givingCategory = await this.givingCategoryRepository.findOne({
      where: { id: givingCategoryId },
    });

    if (!user || !givingCategory) {
      throw new BadRequestException("User or giving category not found.");
    }

    // Create a new giving number
    const givingNumber = new GivingNumber();
    givingNumber.user = user;
    givingNumber.givingCategory = givingCategory;
    givingNumber.number = number;

    // Save the giving number
    return this.givingNumberRepository.save(givingNumber);
  }

  // Add more methods as needed
}
