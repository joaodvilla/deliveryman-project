import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticationClient/AuthenticataClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticationDeliveryman/AuthenticataDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

routes.post("/clients", createClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/login-client", authenticateClientController.handle);
routes.post("/login-deliveryman", authenticateDeliverymanController.handle);

export { routes };