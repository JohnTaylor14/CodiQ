import { Component, OnInit } from '@angular/core';
import { QuestionAnswerB, QuestionB } from '../models/question';

@Component({
  selector: 'app-question2-a',
  templateUrl: './question2-a.page.html',
  styleUrls: ['./question2-a.page.scss'],
})
export class Question2APage implements OnInit {

  constructor() { }

  questionsB: QuestionB[] = [
    {
      title: "O que é Software?",
      answers: [
        { description: 'Um conjunto de componentes físicos do computador.', isRight: false },
        { description: 'Um conjunto de programas e instruções lógicas que controlam o funcionamento do hardware do computador.', isRight: true },
        { description: 'Um dispositivo de entrada utilizado para interagir com o computador.', isRight: false },
        { description: 'Um dispositivo de saída utilizado para exibir informações na tela.', isRight: false }
      ]
    },
    {
      title: "Qual é a diferença entre software de sistema e software de aplicativos?",
      answers: [
        { description: 'O software de sistema realiza tarefas específicas, enquanto o software de aplicativos gerencia os recursos do computador.', isRight: false },
        { description: 'O software de sistema é um conjunto de programas que gerenciam os recursos do computador, enquanto o software de aplicativos é um conjunto de programas que realiza tarefas específicas.', isRight: true },
        { description: 'O software de sistema e o software de aplicativos são a mesma coisa.', isRight: false },
        { description: 'O software de sistema é criado por programadores, enquanto o software de aplicativos é criado por engenheiros de software.', isRight: false }
      ]
    }
  ];

  curQuestionB!: QuestionB;
  questionIndexB: number = 0;


  ngOnInit() {
    this.curQuestionB = this.questionsB[this.questionIndexB];
  }

  doAnswerB(answer: QuestionAnswerB){
    if(answer.isRight){
      this.questionIndexB++;
      this.curQuestionB = this.questionsB[this.questionIndexB];
    }
  }
}
