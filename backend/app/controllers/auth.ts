import express from "express";
import { User } from "../models/index";

const signup = async (req: express.Request, res: express.Response) => {
  try {
    const { name, email, phone, password } = req.body;
    const file = req.files;
    console.log(name, email, phone, password);

    if (!name || !email || !password) {
      return res.status(404).send("missing values");
    }

    let profile = "";
    if (file) {
      const location = ""; //upload
      profile = location;
    }

    const result = await User.create({
      name,
      email,
      phone,
      password,
      profile,
    });

    res.status(200).json({ data: result });
  } catch (err) {
    console.log(`${err} occured in signup `);
    res.status(500).send(`failed to register ${err}`);
  }
};
const login = (req: express.Request, res: express.Response) => {};
const forget = (req: express.Request, res: express.Response) => {};
const reset = (req: express.Request, res: express.Response) => {};
const update = (req: express.Request, res: express.Response) => {};

export default {
  login,
  signup,
  forget,
  reset,
  update,
};
