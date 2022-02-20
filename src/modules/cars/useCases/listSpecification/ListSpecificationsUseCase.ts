import { inject, injectable } from "tsyringe";

import { Specification } from "@modules/cars/entities/Specification";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationsRespository: ISpecificationsRepository,
  ) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationsRespository.list();
    return specifications;
  }
}

export { ListSpecificationsUseCase };
