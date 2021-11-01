import express, { Application } from "express";
import mongoose from "mongoose";
import { MainRoutes } from "../routes";

class App {
  public app: Application;
  public mongoUrl = process.env.mongoUrl;

  private parsing() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  private mainRoutes = new MainRoutes();

  private async dbSetup() {
    try {
      await mongoose.connect(this.mongoUrl);
    } catch (error) {
      console.log("connection error", error);
    }
  }

  constructor() {
    this.app = express();
    this.parsing();
    this.dbSetup();
    this.mainRoutes.route(this.app);
  }
}

export default new App().app;
