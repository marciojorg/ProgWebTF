import {Teacher} from '../teacher/teacher.model';
import {Subject} from '../subject/subject.model';

export interface ICourse {
  id?: string;
  cursoNome?: string;
  descricao?: string;
  grau?: string;
  duracao?: number;
  etcs?: number;
}

export class Course implements ICourse {
  constructor(
    public id?: string,
    public cursoNome?: string,
    public descricao?: string,
    public grau?: string,
    public duracao?: number,
    public etcs?: number,
  ) {}
}
