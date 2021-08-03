const getWordFile = async (wordType: string) =>
  await (
    await fetch(
      (process.env.NODE_ENV === "production" ? "https://words-aas.vercel.app/db/" : "http://localhost:3000/db/") +
        wordType,
    )
  ).text();

const getRandomWord = (contents: string) => {
  contents = contents.replace(/[\r]/g, "");
  const words = contents.split("\n");
  words.pop();
  const i = Math.floor(Math.random() * words.length);
  return words[i];
};

async function phraseGenerator(words: string[]) {
  let phrase = "";
  const allWordTypes = ["adjective", "adverb", "animal", "bodyPart", "gerund", "noun", "pluralNoun", "verb"];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word === "" || (word === "a" && i === 0)) continue;

    if (word.slice(0, 1) === "$") {
      if (!allWordTypes.includes(word.slice(1))) throw Error("word type not found");
      else {
        const filePath = word.slice(1) + "s.txt";
        phrase += getRandomWord(await getWordFile(filePath)) + " ";
      }
    } else phrase += word + " ";
  }
  return phrase.slice(0, -1);
}

const vowelTester = (phrase: string) => new RegExp(/[aeiou]/gi).test(phrase[0]);

export async function phraseResolver(query: string) {
  const words = query.split(" ");
  let phrase = await phraseGenerator(words);
  if (words[0] == "a") phrase = (vowelTester(phrase) ? "an" : "a") + " " + phrase;
  return phrase;
}
