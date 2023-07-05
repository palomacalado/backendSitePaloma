import Content from "../models/content";

class ContentController {
  
  async index(req, res) {
    try {
      const projects = await Content.find();
      return res.json(projects);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const project = await Content.findById(id);

      if (!project) return res.status(404).json();

      return res.json(project);
    } catch (error) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async create(req, res) {
    try {
      const { title, image, preview, description } = req.body;

      const project = await Content.findOne({ title });
      if (project)
        return res
          .status(422)
          .json({ mensage: `Project ${title} already exists.` });

      const newProject = await Content.create({
        title,
        image,
        preview,
        description,
      });
      return res.status(201).json(newProject);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, image, preview, description } = req.body;
      const project = await Content.findById(id);

      if (!project) return res.status(404).json();
      await project.updateOne({ title, image, preview, description });
      return res.status(200).json(project);
    } catch (error) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const project = await Content.findById(id);

      if (!project) return res.status(404).json();

      await project.deleteOne();
      return res.status(200).json();
    } catch (error) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}
export default new ContentController();
