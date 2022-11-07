import * as Keychain from 'react-native-keychain';

export const nullOrUndefineCheck = (value: any) => {
  if (value === null || value === undefined) {
    return '';
  }
  return value;
};

export const isEmptyString = (val: any) => {
  return val === null || val === undefined || val.length === 0;
};

export const makeSentenceCase = (val: string | undefined) => {
  let res = val;
  if (!isEmptyString(val)) {
    val = val!.toLowerCase();
    res = val.length > 0 ? val.charAt(0).toUpperCase() + val.slice(1) : val;
  } else {
    res = '';
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

export const isNullOrUndefined = (value: any) => {
  return value === null || value === undefined;
};

export const formatNumberWhileTyping = (value: string) => {
  if (isNullOrUndefined(value) || value === '') {
    return '';
  }
  return parseInt(value.replace(/,/g, '')).toLocaleString();
};

export function currencyFormat(num: number) {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export const formatCurrencyWithDecimal = (
  amount: number | string | undefined,
) => {
  // @ts-ignore
  let num = typeof amount === 'string' ? parseFloat(amount) : amount;

  if (num === 0 || isNullOrUndefined(num)) {
    return '₦ 0';
  }

  const currFormat = currencyFormat(num!);

  return isNullOrUndefined(currFormat) || isEmptyString(currFormat)
    ? ''
    : '₦ '.concat(currencyFormat(num!));
};

export const formatCurrencyWithDecimalWithoutSign = (
  amount: number | string | undefined,
) => {
  // @ts-ignore
  let num = typeof amount === 'string' ? parseFloat(amount) : amount;

  if (num === 0 || isNullOrUndefined(num)) {
    return '0';
  }

  const currFormat = currencyFormat(num!);

  return isNullOrUndefined(currFormat) || isEmptyString(currFormat)
    ? ''
    : currencyFormat(num!);
};

export const formatDateOfBirth = (date: string) => {
  return date.split('-').reverse().join('/');
};


export const saveSecureCredentials = async (key: string, email: string, password: string) => {
    await Keychain.setGenericPassword(email, password, { service: key });
    // await AsyncStorage.setItem(key, email)
    //     .then(() => { })
    //     .catch(error => {
    //         console.log('catch error', error);
    //     });
};
