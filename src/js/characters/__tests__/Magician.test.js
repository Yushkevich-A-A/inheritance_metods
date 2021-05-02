import { Magician } from '../Magician';

const expected = {
  name: 'Merlin',
  type: 'Magician',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

test('correct creating Magician', () => {
  const received = new Magician('Merlin', 'Magician');

  expect(received).toEqual(expected);
});

test('correct creating Magician without error', () => {
  expect(() => new Magician('Merlin', 'Magician')).not.toThrowError();
});
