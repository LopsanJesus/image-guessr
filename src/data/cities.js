export const getNumberOfLevels = () => {
  return Object.keys(levels).length;
};

export const getImageTranslations = (image) => {
  return translations[imagesMapping[image]];
};

export const getLevelImages = (level) => {
  return levels[level].map((id) => {
    const type = types[id];
    const translation = translations[id];
    const image = Object.keys(imagesMapping).find(
      (key) => imagesMapping[key] === id
    );

    return { image, type, translations: translation };
  });
};

const imagesMapping = {
  image1: "adra",
  image2: "allianz-arena",
  image3: "amsterdam",
  image4: "angkor",
  image5: "athens",
  image6: "barcelona",
  image7: "beijing",
  image8: "belem-tower",
  image9: "berlin",
  image10: "bilbao",
  image11: "bolivia",
  image12: "brussels",
  image13: "cadiz",
  image14: "cairo",
  image15: "cape-town",
  image16: "chernobyl",
  image17: "chicago",
  image18: "china",
  image19: "copenhagen",
  image20: "dallas",
  image21: "dubai",
  image22: "dubrovnik",
  image23: "dublin",
  image24: "easter-island",
  image25: "florence",
  image26: "france",
  image27: "gibraltar",
  image28: "granada",
  image29: "hong-kong",
  image30: "istanbul",
  image31: "italia",
  image32: "jerusalem",
  image33: "kenya",
  image34: "kiev",
  image35: "kyoto",
  image36: "las-vegas",
  image37: "lisbon",
  image38: "madrid",
  image39: "marrakesh",
  image40: "medellin",
  image41: "mecca",
  image42: "mexico-city",
  image43: "milan",
  image44: "monaco",
  image45: "mount-rushmore",
  image46: "nepal",
  image47: "netherlands",
  image48: "nuuk",
  image49: "panama-canal",
  image50: "paris",
  image51: "petra",
  image52: "poland",
  image53: "pyongyang",
  image54: "rio-de-janeiro",
  image55: "rome",
  image56: "san-francisco",
  image57: "sacre-coeur",
  image58: "saint-peters-square",
  image59: "saint-petersburg",
  image60: "aqueduct-of-segovia",
  image61: "santorini",
  image62: "seville",
  image63: "singapore",
  image64: "spain",
  image65: "sydney",
  image66: "thailand",
  image67: "tokyo",
  image68: "toronto",
  image69: "valparaiso",
  image70: "vatican-city",
  image71: "venice",
  image72: "washington",
  image73: "zaragoza",
  image74: "havana",
  image75: "cordoba",
  image76: "iraq",
  image77: "london",
  image78: "los-angeles",
  image79: "mongolia",
  image80: "moscow",
  image81: "new-york",
  image82: "palmar-troya",
  image83: "pisa",
  image84: "shanghai",
};

const levels = {
  1: [
    "cordoba",
    "seville",
    "amsterdam",
    "los-angeles",
    "san-francisco",
    "athens",
    "rio-de-janeiro",
    "jerusalem",
    "barcelona",
    "santorini",
    "new-york",
    "pisa",
  ],
  2: [
    "rome",
    "florence",
    "moscow",
    "tokyo",
    "london",
    "mexico-city",
    "sydney",
    "paris",
    "bilbao",
    "berlin",
    "venice",
    "mecca",
  ],
  3: [
    "cairo",
    "monaco",
    "milan",
    "petra",
    "toronto",
    "madrid",
    "dublin",
    "beijing",
    "washington",
    "brussels",
    "havana",
    "las-vegas",
  ],
  4: [
    "vatican-city",
    "angkor",
    "agra",
    "nuuk",
    "granada",
    "saint-petersburg",
    "zaragoza",
    "copenhagen",
    "hong-kong",
    "istanbul",
    "lisbon",
    "marrakesh",
  ],
  5: [
    "italia",
    "dubrovnik",
    "cadiz",
    "thailand",
    "mount-rushmore",
    "kyoto",
    "palmar-troya",
    "poland",
    "france",
    "panama-canal",
    "cape-town",
    "iraq",
  ],
  6: [
    "bolivia",
    "aqueduct-of-segovia",
    "spain",
    "nepal",
    "sacre-coeur",
    "pyongyang",
    "singapore",
    "easter-island",
    "medellin",
    "china",
    "allianz-arena",
    "gibraltar",
  ],
  7: [
    "belem-tower",
    "kiev",
    "mongolia",
    "dubai",
    "chicago",
    "dallas",
    "chernobyl",
    "kenya",
    "shanghai",
    "saint-peters-square",
    "netherlands",
    "valparaiso",
  ],
};

const types = {
  cordoba: "city",
  seville: "city",
  amsterdam: "city",
  "los-angeles": "city",
  "san-francisco": "city",
  athens: "city",
  "rio-de-janeiro": "city",
  jerusalem: "city",
  barcelona: "city",
  santorini: "city",
  "new-york": "city",
  pisa: "city",
  rome: "city",
  florence: "city",
  moscow: "city",
  tokyo: "city",
  london: "city",
  "mexico-city": "city",
  sydney: "city",
  paris: "city",
  bilbao: "city",
  berlin: "city",
  venice: "city",
  mecca: "city",
  cairo: "city",
  monaco: "city",
  milan: "city",
  petra: "city",
  toronto: "city",
  madrid: "city",
  dublin: "city",
  beijing: "city",
  washington: "city",
  brussels: "city",
  havana: "city",
  "las-vegas": "city",
  "vatican-city": "city",
  angkor: "city",
  agra: "city",
  nuuk: "city",
  granada: "city",
  "saint-petersburg": "city",
  zaragoza: "city",
  copenhagen: "city",
  "hong-kong": "city",
  istanbul: "city",
  lisbon: "city",
  marrakesh: "city",
  italia: "country",
  dubrovnik: "city",
  cadiz: "city",
  thailand: "country",
  "mount-rushmore": "monument",
  kyoto: "city",
  "palmar-troya": "city",
  poland: "country",
  france: "country",
  "panama-canal": "monument",
  "cape-town": "city",
  iraq: "country",
  bolivia: "country",
  "aqueduct-of-segovia": "monument",
  spain: "country",
  nepal: "country",
  "sacre-coeur": "monument",
  pyongyang: "city",
  singapore: "city",
  "easter-island": "monument",
  medellin: "city",
  china: "country",
  "allianz-arena": "monument",
  gibraltar: "city",
  "belem-tower": "monument",
  kiev: "city",
  mongolia: "country",
  dubai: "city",
  chicago: "city",
  dallas: "city",
  chernobyl: "city",
  kenya: "country",
  shanghai: "city",
  "saint-peters-square": "monument",
  netherlands: "country",
  valparaiso: "city",
};

const translations = {
  cordoba: ["cordoba", "córdoba"],
  seville: ["seville", "sevilla"],
  amsterdam: ["amsterdam", "ámsterdam"],
  "los-angeles": ["los angeles", "los ángeles", "la"],
  "san-francisco": ["san francisco"],
  athens: ["athens", "atenas"],
  "rio-de-janeiro": ["rio de janeiro", "río de janeiro", "rio"],
  jerusalem: ["jerusalem", "jerusalén", "jerusalen"],
  barcelona: ["barcelona", "bcn"],
  santorini: ["santorini"],
  "new-york": ["new york", "nueva york", "ny"],
  pisa: ["pisa"],
  rome: ["rome", "roma"],
  florence: ["florence", "florencia", "firenze"],
  moscow: ["moscow", "moscú", "moscu"],
  tokyo: ["tokyo", "tokio"],
  london: ["london", "londres"],
  "mexico-city": [
    "ciudad de méxico",
    "ciudad de mexico",
    "mexico city",
    "mexico df",
    "méxico df",
    "mexico d.f.",
    "méxico d.f.",
  ],
  sydney: ["sydney", "sidney", "sídney"],
  paris: ["paris", "parís"],
  bilbao: ["bilbao", "bilbo"],
  berlin: ["berlin", "berlín"],
  venice: ["venice", "venecia", "venezia"],
  mecca: ["mecca", "meca", "la meca"],
  cairo: ["el cairo", "cairo"],
  monaco: ["monaco", "mónaco"],
  milan: ["milan", "milán", "milano"],
  petra: ["petra", "ciudad de petra"],
  toronto: ["toronto"],
  madrid: ["madrid"],
  dublin: ["dublin", "dublín"],
  beijing: ["beijing", "pekín", "pekin"],
  washington: ["washington", "washington dc"],
  brussels: ["brussels", "bruselas"],
  havana: ["havana", "habana", "la habana"],
  "las-vegas": ["las vegas", "vegas"],
  "vatican-city": [
    "vatican",
    "vatican city",
    "ciudad del vaticano",
    "vaticano",
  ],
  angkor: ["angkor", "angkor wat"],
  agra: ["agra"],
  nuuk: ["nuuk"],
  granada: ["granada"],
  "saint-petersburg": ["saint petersburg", "san petersburgo"],
  zaragoza: ["zaragoza"],
  copenhagen: ["copenhagen", "copenhague", "copenhage"],
  "hong-kong": ["hong kong", "hongkong", "hong-kong"],
  istanbul: ["istanbul", "estambul"],
  lisbon: ["lisbon", "lisboa"],
  marrakesh: ["marrakesh", "marrakech"],
  italia: ["italia", "italy"],
  dubrovnik: ["dubrovnik"],
  cadiz: ["cádiz", "cadiz", "gádir", "gadir"],
  thailand: ["tailandia", "thailand"],
  "mount-rushmore": [
    "monte rushmore",
    "mount rushmore",
    "rushmore",
    "george washington",
  ],
  kyoto: ["kioto", "kyoto"],
  "palmar-troya": [
    "palmar de troya",
    "palmar",
    "el palmar de troya",
    "palmar troya",
    "el palmar",
  ],
  poland: ["polonia", "poland"],
  france: ["france", "francia", "la france"],
  "panama-canal": [
    "canal de panamá",
    "canal de panama",
    "canal panama",
    "canal panamá",
  ],
  "cape-town": ["cape town", "ciudad del cabo", "ciudad cabo"],
  iraq: ["irak", "iraq"],
  bolivia: ["bolivia"],
  "aqueduct-of-segovia": [
    "aqueduct of segovia",
    "acueducto de segovia",
    "acueducto segovia",
    "aqueduct segovia",
  ],
  spain: ["españa", "spain"],
  nepal: ["nepal"],
  "sacre-coeur": [
    "le sacre coeur",
    "sacre coeur",
    "le sacré coeur",
    "sacré coeur",
    "sacré-Cœur",
    "sacre-Cœur",
    "sagrado corazón de parís",
    "sagrado corazon",
    "sagrado corazón",
    "basílica del sagrado corazón",
    "basílica del sagrado corazon",
    "basilica del sagrado corazón",
    "basilica del sagrado corazon",
    "basilica sagrado corazon",
    "basilica sagrado corazón",
    "basílica sagrado corazon",
    "basílica sagrado corazón",
    "Basilique du Sacré-Cœur de Montmartre",
    "Basilique du Sacre-Cœur de Montmartre",
    "Basilique du Sacré-Coeur de Montmartre",
    "Basilique du Sacre-Coeur de Montmartre",
    "Basilique du Sacré-Cœur",
    "Basilique du Sacré-Cœur",
    "Basilique du Sacré-Coeur",
    "Basilique du Sacré-Coeur",
  ],
  pyongyang: ["pyongyang", "pyong yang"],
  singapore: ["singapore", "singapur"],
  "easter-island": [
    "easter island",
    "moais",
    "isla de pascua",
    "moais de la isla de pascua",
    "moais isla de pascua",
    "moais isla pascua",
    "los moais de la isla de pascua",
    "moais de isla de pascua",
    "moais de isla pascua",
  ],
  medellin: ["medellin", "medellín"],
  china: ["china"],
  "allianz-arena": ["allianz arena"],
  gibraltar: ["gibraltar"],
  "belem-tower": [
    "torre de belen",
    "torre de belén",
    "torre de belem",
    "torre de belém",
    "belem tower",
    "tower of belem",
  ],
  kiev: ["kiev"],
  mongolia: ["mongolia"],
  dubai: ["dubai", "dubái"],
  chicago: ["chicago"],
  dallas: ["dallas"],
  chernobyl: ["chernobyl", "chernobil", "chernóbil"],
  kenya: ["kenya", "kenia"],
  shanghai: ["shanghai", "shanghái", "shangái", "shangai"],
  "saint-peters-square": [
    "plaza de san pedro",
    "saint peters square",
    "san pedro",
    "plaza san pedro",
    "saint peters",
  ],
  netherlands: ["holanda", "netherlands", "paises bajos", "países bajos"],
  valparaiso: ["valparaiso", "valparaíso"],
};
