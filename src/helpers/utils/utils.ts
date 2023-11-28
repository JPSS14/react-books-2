export const dateConverter = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("pt-BR", { timeZone: "UTC" });
};

export const currencyConverter = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const addCommaArray = (value?: string[]) => {
  if (value) {
    return value.join(", ");
  }
  return "Desconhecido(a)";
};
