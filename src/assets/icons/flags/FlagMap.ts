const flagMap = import.meta.glob(
  "/src/assets/icons/flags/images/*.svg",
  { eager: true, import: "default" }
);

export const getFlagSrc = (country: string) => {
  const path = `/src/assets/icons/flags/images/${country}.svg`;
  return (flagMap as Record<string, string>)[path];
};

export const countries = Object.keys(flagMap)
  .map((path) => path.split("/").pop()?.replace(".svg", ""))
  .filter(Boolean)
  .sort();

export default flagMap;
