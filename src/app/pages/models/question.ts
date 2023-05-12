export interface Question{
  title: string;
  level?:number;
  answers: QuestionAnswer[];
}

export interface QuestionAnswer{
  description: string;
  isRight: boolean;
}


export interface QuestionB{
  title: string;
  level?:number;
  answers: QuestionAnswerB[];
}

export interface QuestionAnswerB{
  description: string;
  isRight: boolean;
}
