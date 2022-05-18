const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Please, check your params');
  }
  return `${key}=${value}`;
};

export function queryString(obj) {
  return Object.entries(obj).map(keyValueToString).join('&');
}

export function queryToObject(string) {
  return Object.fromEntries(
    String(string)
      .split('&')
      .map((item) => {
        const [key, value] = item.split('=');

        if (value.includes(',')) {
          return [key, value.split(',')];
        }
        return [key, value];
      }),
  );
}
