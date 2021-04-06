const cities = [
  [
    { city: "cordoba", translations: ["cordoba", "córdoba"] },
    { city: "seville", translations: ["seville", "sevilla"] },
    { city: "amsterdam", translations: ["amsterdam", "ámsterdam"] },
    { city: "los-angeles", translations: ["los angeles", "los ángeles", "la"] },
    { city: "san-francisco", translations: ["san francisco"] },
    { city: "athens", translations: ["athens", "atenas"] },
    {
      city: "rio-de-janeiro",
      translations: ["rio de janeiro", "río de janeiro", "rio"],
    },
    {
      city: "jerusalem",
      translations: ["jerusalem", "jerusalén", "jerusalen"],
    },
    { city: "barcelona", translations: ["barcelona"] },
    { city: "santorini", translations: ["santorini"] },
    { city: "new-york", translations: ["new york", "nueva york"] },
    { city: "pisa", translations: ["pisa"] },
  ],
  [
    { city: "rome", translations: ["rome", "roma"] },
    { city: "florence", translations: ["florence", "florencia", "firenze"] },
    { city: "moscow", translations: ["moscow", "moscú", "moscu"] },
    { city: "tokyo", translations: ["tokyo", "tokio"] },
    { city: "london", translations: ["london", "londres"] },
    {
      city: "mexico-city",
      translations: ["ciudad de méxico", "ciudad de mexico", "mexico city"],
    },
    { city: "sydney", translations: ["sydney", "sidney", "sídney"] },
    { city: "paris", translations: ["paris", "parís"] },
    { city: "bilbao", translations: ["bilbao", "bilbo"] },
    { city: "berlin", translations: ["berlin", "berlín"] },
    { city: "venice", translations: ["venice", "venecia", "venezia"] },
    { city: "mecca", translations: ["mecca", "meca", "la meca"] },
  ],
  [
    { city: "cairo", translations: ["el cairo", "cairo"] },
    { city: "monaco", translations: ["monaco", "mónaco"] },
    { city: "milan", translations: ["milan", "milán", "milano"] },
    { city: "petra", translations: ["petra", "ciudad de petra"] },
    { city: "toronto", translations: ["toronto"] },
    { city: "madrid", translations: ["madrid"] },
    { city: "dublin", translations: ["dublin", "dublín"] },
    { city: "beijing", translations: ["beijing", "pekín", "pekin"] },
    { city: "washington", translations: ["washington", "washington dc"] },
    { city: "brussels", translations: ["brussels", "bruselas"] },
    { city: "havana", translations: ["havana", "habana", "la habana"] },
    { city: "las-vegas", translations: ["las vegas", "vegas"] },
  ],
  [
    {
      city: "vatican-city",
      translations: [
        "vatican",
        "vatican city",
        "ciudad del vaticano",
        "vaticano",
      ],
    },
    { city: "angkor", translations: ["angkor", "angkor wat"] },
    { city: "agra", translations: ["agra"] },
    { city: "nuuk", translations: ["nuuk"] },
    { city: "granada", translations: ["granada"] },
    {
      city: "saint-petersburg",
      translations: ["saint petersburg", "san petersburgo"],
    },
    { city: "zaragoza", translations: ["zaragoza"] },
    {
      city: "copenhagen",
      translations: ["copenhagen", "copenhague", "copenhage"],
    },
    { city: "hong-kong", translations: ["hong kong", "hong kong"] },
    { city: "istanbul", translations: ["istanbul", "estambul"] },
    { city: "lisbon", translations: ["lisbon", "lisboa"] },
    { city: "marrakesh", translations: ["marrakesh", "marrakech"] },
  ],
];

export const getCityTranslations = (level, city) => {
  return cities[level - 1].find((c) => c.city === city).translations;
};

export const getNumberOfLevels = () => {
  return cities.length;
};

export const getLevelCities = (level) => {
  return cities[level - 1].map((city) => {
    return city.city;
  });
};
