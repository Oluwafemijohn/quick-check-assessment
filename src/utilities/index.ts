export const nullOrUndefineCheck = (value: any) => {
  if (value === null || value === undefined) {
    return '';
  }
  return value;
};

export const isEmptyString = (val: any) => {
  return val === null || val === undefined || val.length === 0;
};

export const makeSentenceCase = (val: string) => {
  let res = val;
  if (!isEmptyString(val)) {
    val = val.toLowerCase();
    res = val.length > 0 ? val.charAt(0).toUpperCase() + val.slice(1) : val;
  }
  return res;
};

export const camelCaseToSentenceCase = (val: string) => {
  let res = '';
  try {
    if (!isEmptyString(val)) {
      res = val.replace(/([a-zA-Z])(?=[A-Z])/g, '$1 ');
    }
  } catch (error) {
    console.log('ERROR OCCURRED WHILE PARSING:::', error);
  }

  return capitaliseFirstLetter(res);
};

export const capitaliseFirstLetter = (val: string) => {
  let res = val;
  if (!isEmptyString(val)) {
    res = val.length > 0 ? val.charAt(0).toUpperCase() + val.slice(1) : val;
  }
  return res;
};

export const titleCase = (str: string) => {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
};
