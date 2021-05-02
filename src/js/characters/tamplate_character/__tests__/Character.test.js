import { Bowerman } from '../../Bowerman';
import { Character } from '../Character';

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
})

test('level up for bowman with health 0', () => {
  const levelUpForBowman = new Bowerman('Robin Hood', 'Bowman');
  levelUpForBowman.health = 0;

  expect(() => levelUpForBowman.levelUp()).toThrowError(new Error('нельзя повысить level умершего'));
})

test('level up for bowman with health subzero', () => {
  const levelUpForBowman = new Bowerman('Robin Hood', 'Bowman');
  levelUpForBowman.health = -1;

  expect(() => levelUpForBowman.levelUp()).toThrowError(new Error('нельзя повысить level умершего'));
})

test('bowman attacked', () => {
  const bowmanDamage = {
    name: 'Robin Hood',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  bowmanDamage.health -= 10 * (1 - bowmanDamage.defence / 100)

  const bowman = new Bowerman('Robin Hood', 'Bowman');
  bowman.damage(10);

  expect(bowman).toEqual(bowmanDamage);
})

test('bowman attacked when health 0', () => {
  const bowmanDamage = {
    name: 'Robin Hood',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };

  bowmanDamage.health -= 10 * (1 - bowmanDamage.defence / 100)

  const bowman = new Bowerman('Robin Hood', 'Bowman');
  bowman.health = 0;
  bowman.damage(10);

  expect(bowman).toEqual(bowmanDamage);
})

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
})