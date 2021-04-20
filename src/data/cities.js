const images = [
  [
    { image: "cordoba", type: "city", translations: ["cordoba", "córdoba"] },
    { image: "seville", type: "city", translations: ["seville", "sevilla"] },
    {
      image: "amsterdam",
      type: "city",
      translations: ["amsterdam", "ámsterdam"],
    },
    {
      image: "los-angeles",
      type: "city",
      translations: ["los angeles", "los ángeles", "la"],
    },
    { image: "san-francisco", type: "city", translations: ["san francisco"] },
    { image: "athens", type: "city", translations: ["athens", "atenas"] },
    {
      image: "rio-de-janeiro",
      type: "city",
      translations: ["rio de janeiro", "río de janeiro", "rio"],
    },
    {
      image: "jerusalem",
      type: "city",
      translations: ["jerusalem", "jerusalén", "jerusalen"],
    },
    { image: "barcelona", type: "city", translations: ["barcelona"] },
    { image: "santorini", type: "city", translations: ["santorini"] },
    {
      image: "new-york",
      type: "city",
      translations: ["new york", "nueva york"],
    },
    { image: "pisa", type: "city", translations: ["pisa"] },
  ],
  [
    { image: "rome", type: "city", translations: ["rome", "roma"] },
    {
      image: "florence",
      type: "city",
      translations: ["florence", "florencia", "firenze"],
    },
    {
      image: "moscow",
      type: "city",
      translations: ["moscow", "moscú", "moscu"],
    },
    { image: "tokyo", type: "city", translations: ["tokyo", "tokio"] },
    { image: "london", type: "city", translations: ["london", "londres"] },
    {
      image: "mexico-city",
      type: "city",
      translations: [
        "ciudad de méxico",
        "ciudad de mexico",
        "mexico city",
        "mexico df",
        "méxico df",
        "mexico d.f.",
        "méxico d.f.",
      ],
    },
    {
      image: "sydney",
      type: "city",
      translations: ["sydney", "sidney", "sídney"],
    },
    { image: "paris", type: "city", translations: ["paris", "parís"] },
    { image: "bilbao", type: "city", translations: ["bilbao", "bilbo"] },
    { image: "berlin", type: "city", translations: ["berlin", "berlín"] },
    {
      image: "venice",
      type: "city",
      translations: ["venice", "venecia", "venezia"],
    },
    {
      image: "mecca",
      type: "city",
      translations: ["mecca", "meca", "la meca"],
    },
  ],
  [
    { image: "cairo", type: "city", translations: ["el cairo", "cairo"] },
    { image: "monaco", type: "country", translations: ["monaco", "mónaco"] },
    {
      image: "milan",
      type: "monument",
      translations: ["milan", "milán", "milano"],
    },
    {
      image: "petra",
      type: "city",
      translations: ["petra", "ciudad de petra"],
    },
    { image: "toronto", type: "city", translations: ["toronto"] },
    { image: "madrid", type: "city", translations: ["madrid"] },
    { image: "dublin", type: "city", translations: ["dublin", "dublín"] },
    {
      image: "beijing",
      type: "city",
      translations: ["beijing", "pekín", "pekin"],
    },
    {
      image: "washington",
      type: "city",
      translations: ["washington", "washington dc"],
    },
    { image: "brussels", type: "city", translations: ["brussels", "bruselas"] },
    {
      image: "havana",
      type: "city",
      translations: ["havana", "habana", "la habana"],
    },
    { image: "las-vegas", type: "city", translations: ["las vegas", "vegas"] },
  ],
  [
    {
      image: "vatican-city",
      type: "city",
      translations: [
        "vatican",
        "vatican city",
        "ciudad del vaticano",
        "vaticano",
      ],
    },
    { image: "angkor", type: "city", translations: ["angkor", "angkor wat"] },
    { image: "agra", type: "city", translations: ["agra"] },
    { image: "nuuk", type: "city", translations: ["nuuk"] },
    { image: "granada", type: "city", translations: ["granada"] },
    {
      image: "saint-petersburg",
      type: "city",
      translations: ["saint petersburg", "san petersburgo"],
    },
    { image: "zaragoza", type: "city", translations: ["zaragoza"] },
    {
      image: "copenhagen",
      type: "city",
      translations: ["copenhagen", "copenhague", "copenhage"],
    },
    {
      image: "hong-kong",
      type: "city",
      translations: ["hong kong", "hong kong"],
    },
    { image: "istanbul", type: "city", translations: ["istanbul", "estambul"] },
    { image: "lisbon", type: "city", translations: ["lisbon", "lisboa"] },
    {
      image: "marrakesh",
      type: "city",
      translations: ["marrakesh", "marrakech"],
    },
  ],
];

export const getImageTranslations = (level, image) => {
  return images[level - 1].find((c) => c.image === image).translations;
};

export const getNumberOfLevels = () => {
  return images.length;
};

export const getLevelImages = (level) => {
  return images[level - 1].map((image) => {
    return image;
  });
};
