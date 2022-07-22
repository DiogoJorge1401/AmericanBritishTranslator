import americanOnly from "./american-only";
import americanToBritishSpelling from "./american-to-british-spelling";
import americanToBritishTitles from "./american-to-british-titles";
import britishOnly from "./british-only";

type Locale = "american-to-british" | "british-to-american";

export default class Translator {
  translate(text: string, locale: Locale) {
    this.validate(text, locale);
    let textCopy = text.split(" ");
    for (const word of textCopy) {

    }
    return "";
  }

  private validate(text: string, locale: string) {
    if (text === undefined || locale === undefined)
      throw new Error("Required field(s) missing");
    if (!text) throw new Error("No text to translate");
    if (locale !== "american-to-british" && locale !== "british-to-american")
      throw new Error("Invalid value for locale field");
  }

}
