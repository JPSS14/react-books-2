export const dateConverter = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
};

export const currencyConverter = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency', currency: 'BRL'
  }).format(value);
};