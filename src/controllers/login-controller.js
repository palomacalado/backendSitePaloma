import Login from "../models/login";
import { createPasswordHash } from "../services/auth";

class LoginController {
  async index(req, res) {
    try {
      const users = await Login.find();
      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await Login.findById(id);

      if (!user) return res.status(404).json();

      return res.json(user);
    } catch (error) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async create(req, res) {
    try {
      const { email, password } = req.body;

      const user = await Login.findOne({ email });
      if (user)
        return res
          .status(422)
          .json({ mensage: `User${email} already exists.` });

      const encryptedPassword = await createPasswordHash(password);

      const newUser = await Login.create({
        email,
        password: encryptedPassword,
      });
      return res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const { email, password } = req.body;
      const user = await Login.findById(id);

      if (!user) return res.status(404).json();
      const encryptedPassword = await createPasswordHash(password);

      await user.updateOne({ email, password: encryptedPassword });
      return res.status(200).json(user);
    } catch (error) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async destroy(req, res) {
    try {
        const { id } = req.params;
        const user = await Login.findById(id);
  
        if (!user) return res.status(404).json();
        
        await user.deleteOne();
        return res.status(200).json();
      } catch (error) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error." });
      }
  }
}
export default new LoginController();
