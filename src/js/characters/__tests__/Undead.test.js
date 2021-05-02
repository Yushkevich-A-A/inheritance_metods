import { Undead } from '../Undead';

const expected = {
  name: 'Dracula',
  type: 'Undead',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

test('correct creating Undead', () => {
  const received = new Undead('Dracula', 'Undead');

  expect(received).toEqual(expected);
});

test('correct creating Undead without error', () => {
  expect(() => new Undead('Dracula', 'Undead')).not.toThrowError();
});
