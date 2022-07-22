import { Application } from "express-serve-static-core";
import Translator from "../components/translator";

export default function (app: Application) {
  const translator = new Translator();

  app.post("/api/translate", (req, res) => {
    const { text, locale } = req.body;
    const translation = translator.translate(text,locale)
    res.json({ text, translation });
  });
}
