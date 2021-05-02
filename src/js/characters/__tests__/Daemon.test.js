import { Daemon } from '../Daemon';

const expected = {
  name: 'Lucifer',
  type: 'Daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

test('correct creating daemon', () => {
  const received = new Daemon('Lucifer', 'Daemon');

  expect(received).toEqual(expected);
});

test('correct creating daemon without error', () => {
  expect(() => new Daemon('Lucifer', 'Daemon')).not.toThrowError();
});
