
export interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
}

export interface People {
  readonly results: Person[];
  readonly count: number;
  readonly person?: Person | undefined;
  readonly loading?: boolean;
  readonly error?: any;
}
