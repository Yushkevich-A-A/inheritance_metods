import { Character } from './tamplate_character/Character';

export class Zombie extends Character {
  constructor(...args) {
    super(...args);

    this.attack = 40;
    this.defence = 10;
  }
}
