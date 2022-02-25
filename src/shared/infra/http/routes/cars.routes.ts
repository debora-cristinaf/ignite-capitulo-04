import { CreateCarController } from "@modules/cars/useCases/createCar/createCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvaliableCars/ListAvailiableCarsController";
import { UploadCarImagesController } from "@modules/cars/useCases/uploadCarImage/UploadCarImageController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import uploadConfig from "@config/upload";
import multer from "multer";

const carsRoutes = Router();

let createCarController = new CreateCarController();

const listAvailableCarsController = new ListAvailableCarsController();
const createSpecificationCarsController =
  new CreateCarSpecificationController();

const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig);

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

carsRoutes.get("/available", listAvailableCarsController.handle);
carsRoutes.get("/specifications/:id", createSpecificationCarsController.handle);
carsRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  ensureAdmin,
  upload.array("images"),
  uploadCarImagesController.handle,
);

export { carsRoutes };
