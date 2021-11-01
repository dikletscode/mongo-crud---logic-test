import mongoose, { Schema } from "mongoose";

interface UserTypes {
  id?: string;
  nama: string;
  hobi: string;
  alamat: string;
  nomor_telp: number;
}
const schema = new Schema<UserTypes>({
  nama: String,
  hobi: String,
  alamat: String,
  nomor_telp: Number,
});

const User = mongoose.model("users", schema);

export { User, UserTypes };
