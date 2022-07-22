import Translator from "../components/translator";

export default function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {});
}
