const cities = [
  [
    "paris",
    "seville",
    "florence",
    "los-angeles",
    "tokyo",
    "nuuk",
    "rio-de-janeiro",
    "jerusalem",
    "barcelona",
    "rome",
    "new-york",
    "beijing",
  ],
  [
    "toronto",
    "cairo",
    "moscow",
    "saint-petersburg",
    "london",
    "granada",
    "sydney",
    "havana",
    "bilbao",
    "berlin",
    "venice",
    "mecca",
  ],
];

export const getCityTranslationsArray = (city) => {
  switch (city) {
    case "barcelona":
      return ["barcelona"];
    case "seville":
      return ["seville", "sevilla"];
    case "paris":
      return ["paris", "parís"];
    case "florence":
      return ["florence", "florencia", "firenze"];
    case "los-angeles":
      return ["los angeles", "los ángeles", "la"];
    case "tokyo":
      return ["tokyo", "tokio"];
    case "nuuk":
      return ["nuuk", "groenlandia", "greenland"];
    case "rio-de-janeiro":
      return ["rio de janeiro", "río de janeiro", "rio"];
    case "jerusalem":
      return ["jerusalem", "jerusalén", "jerusalen"];
    case "rome":
      return ["rome", "roma"];
    case "new-york":
      return ["new york", "nueva york"];
    case "beijing":
      return ["beijing", "pekín", "pekin"];
    case "moscow":
      return ["moscow", "moscú", "moscu"];
    case "saint-petersburg":
      return ["saint petersburg", "san petersburgo"];
    case "london":
      return ["london", "londres"];
    case "toronto":
      return ["toronto"];
    case "cairo":
      return ["el cairo", "cairo"];
    case "granada":
      return ["granada"];
    case "sydney":
      return ["sydney", "sidney"];
    case "havana":
      return ["havana", "habana", "la habana"];
    case "bilbao":
      return ["bilbao", "bilbo"];
    case "berlin":
      return ["berlin", "berlín"];
    case "venice":
      return ["venice", "venecia", "venezia"];
    case "mecca":
      return ["mecca", "meca", "la mecca"];
    default:
      return [];
  }
};

export const getNumberOfLevels = () => {
  return cities.length;
};

export const getLevelCities = (level) => {
  return cities[level - 1];
};

export const getCities = () => {
  return cities;
};
