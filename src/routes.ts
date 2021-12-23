import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticationClient/AuthenticataClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

routes.post("/clients", createClientController.handle);
routes.post("/login", authenticateClientController.handle);

export { routes };