// src/giving-category.service.ts
import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GivingCategory } from "../entities/givingCategory.entity";

@Injectable()
export class GivingCategoryService {
  constructor(
    @InjectRepository(GivingCategory)
    private readonly givingCategoryRepository: Repository<GivingCategory>,
  ) {}

  findAll(): Promise<GivingCategory[]> {
    return this.givingCategoryRepository.find();
  }

  findOne(id: number): Promise<GivingCategory> {
    return this.givingCategoryRepository.findOne({ where: { id } });
  }

  async create(
    name: string,
    description: string,
    prefix: string,
  ): Promise<GivingCategory> {
    // Check if the giving category already exists
    const existingCategory = await this.givingCategoryRepository.findOne({
      where: { prefix },
    });

    if (existingCategory) {
      throw new BadRequestException(
        "Giving category with this Prefix already exists.",
      );
    }

    // Create a new giving category
    const givingCategory = new GivingCategory();
    givingCategory.name = name;
    givingCategory.description = description;
    givingCategory.prefix = prefix;

    // Save the giving category
    return this.givingCategoryRepository.save(givingCategory);
  }

  // TODO Add more methods as needed
}
