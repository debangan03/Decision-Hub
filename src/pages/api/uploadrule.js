import conndb from "../../../middlewire/mongoose";
import Rule from "../../../models/rules";
const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
        console.log(req.body);
      const {
        conditionlhs,
        conditionop,
        conditionrhs,
        effectlhs,
        effectop,
        effectrhs,
        related1,
        related2,
      } = req.body;

      const r = new Rule({
        conditionlhs: conditionlhs,
        conditionop: conditionop,
        conditionrhs: conditionrhs,
        effectlhs: effectlhs,
        effectop: effectop,
        effectrhs: effectrhs,
        related1: related1,
        related2: related2,
      });

      const r1 = await r.save();

      res.status(201).json({ success: "true", data: r1 });
    } catch (error) {
      res.status(400).send({ success: "false", error: error });
    }
  } else {
    res.status(201).send({ error: "error method" });
  }
};
export default conndb(handler);
