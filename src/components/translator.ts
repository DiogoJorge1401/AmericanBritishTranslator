import americanOnly from "./american-only";
import americanToBritishSpelling from "./american-to-british-spelling";
import americanToBritishTitles, {
  changeTitlesBri,
  isTitleBri,
} from "./american-to-british-titles";
import britishOnly from "./british-only";

type Locale = "american-to-british" | "british-to-american";
const titles = Object.entries(americanToBritishTitles);

export default class Translator {
  translationList: string[][] = [];
  constructor() {
    this.translationList = [
      ...Object.entries(americanOnly),
      ...Object.entries(americanToBritishSpelling),
      ...Object.entries(americanToBritishTitles),
      ...Object.keys(britishOnly).map((key) => [britishOnly[key], key]),
    ];
  }

  translate(text: string, locale: Locale) {
    this.validate(text, locale);
    let result = text;
    const timeRegex = /(([0-9]|0[0-9]|1[0-9]|2[0-3])(:|\.)([0-5][0-9]))/g;
    const times = result.match(timeRegex);

    if (locale === "american-to-british")
      result = this.amerticanToBritish(result);
    else result = this.britishToAmerican(result);

    if (times)
      times.forEach((time) => {
        if (locale === "american-to-british")
          result = result.replace(
            time,
            `<span class="highlight">${time.replace(":", ".")}</span>`
          );
        else
          result = result.replace(
            time,
            `<span class="highlight">${time.replace(".", ":")}</span>`
          );
      });

    if (result === text) result = "Everything looks good to me!";

    return result;
  }

  private britishToAmerican(text: string) {
    this.translationList.forEach((term) => {
      if (isTitleBri(term[1])) {
        const title = changeTitlesBri(term[1]);
        text = text.replace(
          new RegExp(`\\b${term[1]}\\b`),
          `<span class="highlight">${title}</span>`
        );
        return;
      }

      text = text.replace(
        new RegExp(`\\b${term[1]}\\b`, "i"),
        `<span class="highlight">${term[0]}</span>`
      );
    });
    return text;
  }

  private amerticanToBritish(text: string) {
    this.translationList.forEach((term) => {
      titles.forEach((el) => {
        if (text.includes(el[0]))
          text = text.replace(el[0], `<span class="highlight">${el[1]}</span>`);
      });

      text = text.replace(
        new RegExp(`\\b${term[0]}\\b`, "i"),
        `<span class="highlight">${term[1]}</span>`
      );
    });
    return text;
  }

  private validate(text: string, locale: string) {
    if (text === undefined || locale === undefined)
      throw new Error("Required field(s) missing");
    if (!text) throw new Error("No text to translate");
    if (locale !== "american-to-british" && locale !== "british-to-american")
      throw new Error("Invalid value for locale field");
  }
}
