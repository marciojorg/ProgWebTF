export interface ITeacher {
  id?: string;
  teacherNome?: string;
  teacherApelido?: string;
  descricaot?: string;
  email?: string;
  habilitacoesAcademicas?: string;
  imagem?: string;
}

export class Teacher implements ITeacher {
  constructor(
    public id?: string,
    public teacherNome?: string,
    public teacherApelido?: string,
    public descricaot?: string,
    public email?: string,
    public habilitacoesAcademicas?: string,
    public imagem?: string
  ) {}
}




