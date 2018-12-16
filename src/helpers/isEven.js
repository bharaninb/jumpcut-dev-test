export const isEven = () => (number) => {
  if (number % 2 === 0) {
    return {
      status: true,
      number,
    };
  }
  return {
    status: false,
    number,
  };
};
