import { response, Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

//Settings routes
routes.post("/settings", settingsController.create);

//Users routes
routes.post("/users", usersController.create);

//Messages routes
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);


export { routes };