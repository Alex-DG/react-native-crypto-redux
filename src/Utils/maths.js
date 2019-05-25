export const roundValue = (value, decimal = 2) => {
  if (typeof value === 'number') {
    return value.toFixed(decimal);
  }
  return value;
};
