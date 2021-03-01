const getRandomWord = (contents: string) => {
  contents = contents.replace(/[\r]/g, "");
  const words = contents.split("\n");
  words.pop();
  const i = Math.floor(Math.random() * words.length);
  return words[i];
};

const getWordFile = async (filePath) => {
  const contents = await fetch(
    (process.env.NODE_ENV === "production" ? "https://words-aas.next.sh/db/" : "http://localhost:3000/") + filePath,
  );
  return getRandomWord(contents.toString()) + " ";
};

const phraseGenerator = async (words) => {
  let phrase = "";
  const allWordTypes = ["adjective", "adverb", "animal", "bodypart", "gerund", "noun", "pluralNoun", "verb"];
  for (const word of words) {
    if (word === "") continue;

    if (word !== "a" && allWordTypes.includes(word)) {
      const filePath = word + "s.txt";
      phrase += await getWordFile(filePath);
    } else if (word !== "a") phrase += word + " ";
  }
  return phrase;
};

const vowelTester = (phrase) => new RegExp(/[aeiou]/gi).test(phrase[0]);

export const phraseResolver = async (words: string[]) => {
  let phrase = await phraseGenerator(words);
  if (words[0] == "a") phrase = (vowelTester(phrase) ? "an" : "a") + " " + phrase;
  phrase = phrase.slice(0, -1);
  return { phrase };
};
