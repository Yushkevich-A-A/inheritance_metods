import { Character } from './tamplate_character/Character';

export class Undead extends Character {
  constructor(...args) {
    super(...args);

    this.attack = 25;
    this.defence = 25;
  }
}
