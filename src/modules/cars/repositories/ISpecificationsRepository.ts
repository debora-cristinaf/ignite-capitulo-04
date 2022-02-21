import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

interface ISpecificationsRepositoryDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
  create({ name, description }): Promise<ISpecificationsRepositoryDTO>;
}

export { ISpecificationsRepository, ISpecificationsRepositoryDTO };
