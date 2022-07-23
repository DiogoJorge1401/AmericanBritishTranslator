export function isTitleBri(text: string) {
  const aa = {
    mr: "mr.",
    mrs: "mrs.",
    ms: "ms.",
    mx: "mx.",
    dr: "dr.",
    prof: "prof.",
    Mr: "Mr.",
    Mrs: "Mrs.",
    Ms: "Ms.",
    Mx: "Mx.",
    Dr: "Dr.",
    Prof: "Prof.",
  };

  return aa[text] !== undefined;
}

export const changeTitlesBri = (bri: string) => {
  const aa = {
    mr: "mr.",
    mrs: "mrs.",
    ms: "ms.",
    mx: "mx.",
    dr: "dr.",
    prof: "prof.",
    Mr: "Mr.",
    Mrs: "Mrs.",
    Ms: "Ms.",
    Mx: "Mx.",
    Dr: "Dr.",
    Prof: "Prof.",
  };

  const title = aa[bri] ?? aa[bri.charAt(0).toUpperCase() + bri.slice(1)];
  return title;
};

export default {
  "mr.": "mr",
  "mrs.": "mrs",
  "ms.": "ms",
  "mx.": "mx",
  "dr.": "dr",
  "prof.": "prof",
  "Mr.": "Mr",
  "Mrs.": "Mrs",
  "Ms.": "Ms",
  "Mx.": "Mx",
  "Dr.": "Dr",
  "Prof.": "Prof",
};
