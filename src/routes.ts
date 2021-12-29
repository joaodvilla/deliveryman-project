import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/authenticationClient/AuthenticataClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticationDeliveryman/AuthenticataDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();

const createDeliveryController = new CreateDeliveryController();
const updateDeliveryController = new UpdateDeliverymanController();
const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const findAllAvailableController = new FindAllAvailableController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

routes.post("/clients", createClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);

routes.post("/login-client", authenticateClientController.handle);
routes.post("/login-deliveryman", authenticateDeliverymanController.handle);

routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle);
routes.put("/delivery/:id", ensureAuthenticateDeliveryman, updateDeliveryController.handle);
routes.get("/delivery", ensureAuthenticateDeliveryman, findAllAvailableController.handle);

export { routes };