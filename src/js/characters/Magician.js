import { Character } from './tamplate_character/Character';

export class Magician extends Character {
  constructor(...args) {
    super(...args);

    this.attack = 10;
    this.defence = 40;
  }
}
