import { Bowerman } from '../../Bowerman';
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

const bowmanTwoLewel = {
  name: 'Robin Hood',
  type: 'Bowman',
  health: 100,
  level: 2,
  attack: 30,
  defence: 30,
};

test('level up for bowman', () => {
  const levelUpForBowman = new Bowerman('Robin Hood', 'Bowman');
  levelUpForBowman.levelUp();

  expect(levelUpForBowman).toEqual(bowmanTwoLewel);
});

test('level up for bowman with health 0', () => {
  const levelUpForBowman = new Bowerman('Robin Hood', 'Bowman');
  levelUpForBowman.health = 0;

  expect(() => levelUpForBowman.levelUp()).toThrowError(new Error('нельзя повысить level умершего'));
});

test('level up for bowman with health subzero', () => {
  const levelUpForBowman = new Bowerman('Robin Hood', 'Bowman');
  levelUpForBowman.health = -1;

  expect(() => levelUpForBowman.levelUp()).toThrowError(new Error('нельзя повысить level умершего'));
});

test('bowman attacked', () => {
  const bowmanDamage = {
    name: 'Robin Hood',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  bowmanDamage.health -= 10 * (1 - bowmanDamage.defence / 100);

  const bowman = new Bowerman('Robin Hood', 'Bowman');
  bowman.damage(10);

  expect(bowman).toEqual(bowmanDamage);
});

test('bowman attacked when health 0', () => {
  const bowmanDamage = {
    name: 'Robin Hood',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };

  bowmanDamage.health -= 10 * (1 - bowmanDamage.defence / 100);

  const bowman = new Bowerman('Robin Hood', 'Bowman');
  bowman.health = 0;
  bowman.damage(10);

  expect(bowman).toEqual(bowmanDamage);
});

test('bowman attacked with health subzero', () => {
  const bowmanDamage = {
    name: 'Robin Hood',
    type: 'Bowman',
    health: -10,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const bowman = new Bowerman('Robin Hood', 'Bowman');
  bowman.health = -10;
  bowman.damage(10);

  expect(bowman).toEqual(bowmanDamage);
});
