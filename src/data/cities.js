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
  ["toronto", "el-cairo", "moscow", "saint-petersburg"],
];

export const getNumberOfLevels = () => {
  return cities.length;
};

export const getLevelCities = (level) => {
  return cities[level];
};

export const getCities = () => {
  return cities;
};
