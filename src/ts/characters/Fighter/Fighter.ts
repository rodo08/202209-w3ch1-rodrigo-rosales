import Character from "../Character.js";
import FighterStructure from "./types";

class Fighter extends Character implements FighterStructure {
  constructor(
    name: string,
    family: string,
    age: number,
    public skill: number,
    public weapon: string
  ) {
    super(name, family, age);
    this.skillFilter(skill);
  }
  communicate(): string {
    return `${super.communicate()}I smack first, then ask.`;
  }
}

 skillFilter(skill:number) {

  if(skill < 0) {
    this.skillfullness = 0;
  } else if (skill > 10){
    this.skillfullness = 10;
  } else {
    this.skillfullness = skill;
  }
}

export default Fighter;

 
