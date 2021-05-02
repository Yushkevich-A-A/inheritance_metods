import { Zombie } from '../Zombie';

const expected = {
  name: 'Shaun',
  type: 'Zombie',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

test('correct creating Zombie', () => {
  const received = new Zombie('Shaun', 'Zombie');

  expect(received).toEqual(expected);
});

test('correct creating Zombie without error', () => {
  expect(() => new Zombie('Shaun', 'Zombie')).not.toThrowError();
});
