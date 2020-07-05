export interface ISubject {
  id?: string;
  subjectNome?: string;
  descricao?: string;
  ects?: string;
  ano?: string;
  codigo?: string;
}

export class Subject implements ISubject {
  constructor(
    public id?: string,
    public subjectNome?: string,
    public descricao?: string,
    public ects?: string,
    public ano?: string,
    public codigo?: string,
  ) {}
}


