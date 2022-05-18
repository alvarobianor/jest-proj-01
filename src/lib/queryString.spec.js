const { queryString, queryToObject } = require('./queryString');

describe('Object to queryString', () => {
  it('create a valid query string when an Object is passed', () => {
    const obj = {
      name: 'Alvim rei delas',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Alvim rei delas&profession=developer');
  });

  it('should create a valid query string even if a pass an array as a value os a key', () => {
    const obj = {
      name: 'Alvim',
      profession: 'developer',
      stacks: ['JS', 'TS'],
    };

    expect(queryString(obj)).toBe(
      'name=Alvim&profession=developer&stacks=JS,TS',
    );
  });

  it('should throw an error when an object is passed as a value', () => {
    const obj = {
      name: 'Alvim',
      profession: 'developer',
      stacks: {
        first: 'JS',
        second: 'TS',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to Object', () => {
  it('should convert a query string to object', () => {
    const queryString = 'name=Álvaro&ocupation=developer&lastName=Medeiros';

    expect(queryToObject(queryString)).toEqual({
      name: 'Álvaro',
      ocupation: 'developer',
      lastName: 'Medeiros',
    });
  });

  it('should convert aquery string to object even if I pass a query string with one key-param value', () => {
    const queryString = 'name=Álvaro';

    expect(queryToObject(queryString)).toEqual({
      name: 'Álvaro',
    });
  });
});
