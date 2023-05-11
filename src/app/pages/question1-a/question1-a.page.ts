import { Question, QuestionAnswer } from './../models/question';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-question1-a',
  templateUrl: './question1-a.page.html',
  styleUrls: ['./question1-a.page.scss'],
})
export class Question1APage implements OnInit {

  constructor() { }

  questions: Question[] = [
    {
      title: "Qual é a definição de hardware em um sistema computacional?",
      answers: [
        { description: 'O conjunto de programas que compõem o sistema operacional.', isRight: false },
        { description: 'A parte intangível do computador, que não pode ser vista ou tocada.', isRight: false },
        { description: 'O conjunto de componentes físicos e materiais que compõem um sistema computacional.', isRight: true },
        { description: 'A parte do computador responsável pela transmissão de dados pela internet.', isRight: false }
      ]
    },
    {
      title: "Quais são os tipos de hardware existentes em um sistema computacional",
      answers: [
        { description: 'Hardware de saída, hardware de processamento e hardware de rede.', isRight: false },
        { description: 'Hardware de entrada, hardware de saída e hardware de armazenamento.', isRight: true },
        { description: ' Hardware de entrada, hardware de armazenamento e hardware de rede.', isRight: false },
        { description: 'Hardware de entrada, hardware de saída e hardware de processamento.', isRight: false }
      ]
    }
  ];
  
  curQuestion!: Question;
  questionIndex: number = 0;

  ngOnInit() {
    this.curQuestion = this.questions[this.questionIndex]
  }

  doAnswer(answer: QuestionAnswer){
    if(answer.isRight){
      this.questionIndex++;
      this.curQuestion = this.questions[this.questionIndex];
    }
  }

}
