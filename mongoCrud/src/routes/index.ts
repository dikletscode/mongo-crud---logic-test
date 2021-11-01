import { Application } from "express";
import UserController from "../controllers/user";

export class MainRoutes {
  private userController: UserController = new UserController();

  public route(app: Application) {
    app.get("/api/users", this.userController.getUsers);
    app.post("/api/user", this.userController.createUser);
    app.put("/api/user/:id", this.userController.updateUser);
    app.delete("/api/user/:id", this.userController.deleteUser);
  }
}
