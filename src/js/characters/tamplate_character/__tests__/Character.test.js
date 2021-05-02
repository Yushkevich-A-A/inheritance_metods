import { Character } from '../Character';

const expected = {
  name: 'Robin',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 0,
  defence: 0,
};

test('correct creating character', () => {
  const received = new Character('Robin', 'Bowman');

  expect(received).toEqual(expected);
});

test('the name less than 2 characters and throw Error', () => {
  expect(() => new Character('R', 'Bowman')).toThrowError(new Error('имя персонажа должно быть не меньше 2 и не больше 1 символов'));
});

test('the name length equal 2 characters and not throw Error', () => {
  expect(() => new Character('Ro', 'Bowman')).not.toThrowError(new Error('имя персонажа должно быть не меньше 2 и не больше 1 символов'));
});

test('the name more than 10 characters and throw Error', () => {
  expect(() => new Character('Legendary Robin Hood', 'Bowman')).toThrowError(new Error('имя персонажа должно быть не меньше 2 и не больше 1 символов'));
});

test('the name length equal 10 characters and not throw Error', () => {
  expect(() => new Character('Robin Hood', 'Bowman')).not.toThrowError(new Error('имя персонажа должно быть не меньше 2 и не больше 1 символов'));
});

test('correct type passed and not throw Error', () => {
  expect(() => new Character('Robin', 'Bowman')).not.toThrowError(new Error('имя персонажа должно быть не меньше 2 и не больше 1 символов'));
});

test('incorrect type passed and throw Error', () => {
  expect(() => new Character('Robin', 'Bowma')).toThrowError(new Error('неверно указан тип персонажа'));
});
