export const nullOrUndefineCheck = (value: any) => {
  if (value === null || value === undefined) {
    return '';
  }
  return value;
};
