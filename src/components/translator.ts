import americanOnly from "./american-only";
import americanToBritishSpelling from "./american-to-british-spelling";
import americanToBritishTitles from "./american-to-british-titles";
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
      this.translationList.forEach((term) => {
        titles.forEach((el) => {
          if (result.includes(el[0]))
            result = result.replace(
              el[0],
              `<span class="highlight">${el[1]}</span>`
            );
        });

        result = result.replace(
          new RegExp(`${term[0]}\\b`, "gi"),
          `<span class="highlight">${term[1]}</span>`
        );
      });
    else
      this.translationList.forEach((term) => {
        titles.forEach((el) => {
          if (result.includes(el[1]))
            result = result.replace(
              el[1],
              `<span class="highlight">${el[0]}</span>`
            );
        });
        
        result = result.replace(
          new RegExp(`${term[1]}\\b`, "gi"),
          `<span class="highlight">${term[0]}</span>`
        );
      });

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

  private validate(text: string, locale: string) {
    if (text === undefined || locale === undefined)
      throw new Error("Required field(s) missing");
    if (!text) throw new Error("No text to translate");
    if (locale !== "american-to-british" && locale !== "british-to-american")
      throw new Error("Invalid value for locale field");
  }
}
