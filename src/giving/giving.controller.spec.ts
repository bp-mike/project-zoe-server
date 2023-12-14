import { Test, TestingModule } from "@nestjs/testing";
import { GivingController } from "./controllers/giving.controller";

describe("GivingController", () => {
  let controller: GivingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GivingController],
    }).compile();

    controller = module.get<GivingController>(GivingController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
