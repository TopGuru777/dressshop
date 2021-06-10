export const capitalizeFirstLetter = (word: string): string => {
  return word.charAt(0).toUpperCase();
};

export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('en-US');
};
