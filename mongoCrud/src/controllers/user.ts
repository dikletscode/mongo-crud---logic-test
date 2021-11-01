import { Response, Request } from "express";
import { User, UserTypes } from "../models/user";

export default class UserController {
  public async createUser(req: Request, res: Response) {
    try {
      const { nama, alamat, hobi, nomor_telp }: UserTypes = req.body;
      const dataUser = {
        nama,
        alamat,
        hobi,
        nomor_telp,
      };
      const user = new User(dataUser);
      await user.save();
      res.status(201).send({ message: "user created Successfully" });
    } catch (error) {
      res.status(500).send({ message: "An error occured" });
    }
  }
  public async getUsers(_req: Request, res: Response) {
    try {
      let data = await User.find();
      console.log(data);
      res.status(200).send({ users: data });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "An error occured" });
    }
  }
  public async updateUser(req: Request, res: Response) {
    try {
      let id = req.params.id;
      const { nama, alamat, hobi, nomor_telp }: UserTypes = req.body;
      let user = (await User.findById({ _id: id })) as UserTypes;
      const dataUser = {
        nama: nama || user.nama,
        alamat: alamat || user.alamat,
        hobi: hobi || user.hobi,
        nomor_telp: nomor_telp || user.nomor_telp,
      };

      await User.updateOne({ id: id }, dataUser);
      res.status(200).send({ message: "user update Successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "An error occured" });
    }
  }
  public async deleteUser(req: Request, res: Response) {
    try {
      let id = req.params.id;
      await User.deleteOne({ _id: id });

      res.status(200).send({ message: "user removed" });
    } catch (error) {
      res.status(500).send({ message: "An error occured" });
    }
  }
}
