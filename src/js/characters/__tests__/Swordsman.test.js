import { Swordsman } from '../Swordsman';

const expected = {
  name: 'Lancelot',
  type: 'Swordsman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

test('correct creating Swordsman', () => {
  const received = new Swordsman('Lancelot', 'Swordsman');

  expect(received).toEqual(expected);
});

test('correct creating Swordsman without error', () => {
  expect(() => new Swordsman('Lancelot', 'Swordsman')).not.toThrowError();
});
