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
    { image: "monaco", type: "city", translations: ["monaco", "mónaco"] },
    {
      image: "milan",
      type: "city",
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
  [
    { image: "canada", type: "country", translations: ["canada", "canadá"] },
    {
      image: "louvre",
      type: "monument",
      translations: ["louvre", "museo del louvre", "louvre museé"],
    },
    { image: "kiev", type: "city", translations: ["kiev"] },
    {
      image: "thailand",
      type: "country",
      translations: ["tailandia", "thailand"],
    },
    {
      image: "niagara",
      type: "monument",
      translations: [
        "niagara falls",
        "niagara en bicicleta",
        "niagara",
        "las cataratas del niagara",
        "cataratas del niagara",
      ],
    },
    { image: "kyoto", type: "city", translations: ["kioto", "kyoto"] },
    {
      image: "palmar-troya",
      type: "city",
      translations: [
        "palmar de troya",
        "palmar",
        "el palmar de troya",
        "palmar troya",
        "el palmar",
      ],
    },
    { image: "poland", type: "country", translations: ["polonia", "poland"] },
    {
      image: "chichen-itza",
      type: "monument",
      translations: ["chichen itza", "chichen itzá"],
    },
    { image: "italia", type: "country", translations: ["italia", "italy"] },
    {
      image: "santiago-bernabeu",
      type: "monument",
      translations: [
        "santiago bernabeu",
        "santiago bernabéu",
        "bernabeu",
        "bernabéu",
      ],
    },
    { image: "london-eye", type: "monument", translations: ["london eye"] },
  ],
  [
    { image: "bolivia", type: "country", translations: ["bolivia"] },
    {
      image: "machu-picchu",
      type: "monument",
      translations: ["machu pichu", "machu picchu"],
    },
    { image: "spain", type: "country", translations: ["españa", "spain"] },
    { image: "chicago", type: "city", translations: ["chicago"] },
    {
      image: "sacre-coeur",
      type: "monument",
      translations: ["sacre coeur", "sacré coeur"],
    },
    { image: "pyongyang", type: "city", translations: ["pyongyang"] },
    { image: "notre-dame", type: "monument", translations: ["notre dame"] },
    {
      image: "easter-island",
      type: "monument",
      translations: [
        "easter island",
        "moais",
        "isla de pascua",
        "moais de la isla de pascua",
        "moais isla de pascua",
      ],
    },
    { image: "medellin", type: "city", translations: ["medellin", "medellín"] },
    { image: "china", type: "country", translations: ["china"] },
    {
      image: "allianz-arena",
      type: "monument",
      translations: ["allianz arena"],
    },
    { image: "gibraltar", type: "city", translations: ["gibraltar"] },
  ],
  [
    {
      image: "belem-tower",
      type: "monument",
      translations: ["torre de belen", "torre de belem"],
    },
    { image: "cadiz", type: "city", translations: ["cádiz", "cadiz"] },
    { image: "dubai", type: "city", translations: ["dubai", "dubái"] },
    { image: "nepal", type: "country", translations: ["nepal"] },
    {
      image: "mount-rushmore",
      type: "monument",
      translations: ["monte rushmore", "mount rushmore"],
    },
    {
      image: "sphinx",
      type: "monument",
      translations: [
        "esfinge de giza",
        "esfinge",
        "la esfinge",
        "the sphinx",
        "sphinx",
        "sphinx of giza",
        "great sphinx of giza",
      ],
    },
    {
      image: "usa",
      type: "country",
      translations: [
        "usa",
        "eeuu",
        "estados unidos",
        "united states",
        "united states of america",
      ],
    },
    {
      image: "shanghai",
      type: "city",
      translations: ["shanghai", "shangái", "shangai"],
    },
    { image: "dubrovnik", type: "city", translations: ["dubrovnik"] },
    {
      image: "saint-peters-square",
      type: "monument",
      translations: [
        "plaza de san pedro",
        "saint peters square",
        "san pedro",
        "plaza de san pedro",
      ],
    },
    {
      image: "netherlands",
      type: "country",
      translations: ["holanda", "netherlands", "paises bajos", "países bajos"],
    },
    {
      image: "valparaiso",
      type: "city",
      translations: ["valparaiso", "valparaíso"],
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
