import { CreateCarController } from "@modules/cars/useCases/createCar/createCarController";
import { Router } from "express";

const carsRoutes = Router();

let createCarController = new CreateCarController();

carsRoutes.post("/", createCarController.handle);

export { carsRoutes };
