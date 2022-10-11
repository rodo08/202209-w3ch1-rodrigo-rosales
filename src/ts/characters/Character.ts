import CharacterStructure from "./CharacterStructure.js";

class Character implements CharacterStructure {
  name: string;
  family: string;
  age: number;
  status: boolean;
  tvShow: "Game of Thrones";

  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
  }

  die(): void {
    this.status = false;
  }

  communicate(): string {
    return `${this.name} says: `;
  }
}

export default Character;
