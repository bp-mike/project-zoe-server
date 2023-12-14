import { Test, TestingModule } from "@nestjs/testing";
import { GivingService } from "./giving.service";

describe("GivingService", () => {
  let service: GivingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GivingService],
    }).compile();

    service = module.get<GivingService>(GivingService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
