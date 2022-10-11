interface CharacterStructure {
  name: string;
  family: string;
  age: number;
  status: boolean;
  tvShow: string;

  communicate: () => string;
  die: () => void;
}

export default CharacterStructure;
