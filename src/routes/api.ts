import { Application } from "express-serve-static-core";
import Translator from "../components/translator";

export default function (app: Application) {
  const translator = new Translator();

  app.post("/api/translate", (req, res) => {
    try {
      const { text, locale } = req.body;
      const translation = translator.translate(text, locale);
      return res.json({ text, translation });
    } catch (error: any) {
      return res.json({ error: error.message });
    }
  });
}
