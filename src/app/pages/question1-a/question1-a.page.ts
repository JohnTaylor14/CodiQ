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
      title: "Quais são os tipos de hardware existentes em um sistema computacional?",
      answers: [
        { description: 'Hardware de saída, hardware de processamento e hardware de rede.', isRight: false },
        { description: 'Hardware de entrada, hardware de saída e hardware de armazenamento.', isRight: true },
        { description: ' Hardware de entrada, hardware de armazenamento e hardware de rede.', isRight: false },
        { description: 'Hardware de entrada, hardware de saída e hardware de processamento.', isRight: false }
      ]
    },
    {
      title: "Qual é a função do hardware em um computador?",
      answers: [
        { description: 'Controlar o funcionamento do sistema operacional.', isRight: false },
        { description: 'Executar programas e processar dados.', isRight: true },
        { description: 'Armazenar informações e dados.', isRight: false },
        { description: 'Estabelecer conexão com a internet.', isRight: false }
      ]
    },
    {
      title: "Qual é a importância da escolha de componentes de qualidade no hardware de um computador?",
      answers: [
        { description: 'Influenciar na velocidade de conexão com a internet.', isRight: false },
        { description: 'Garantir a segurança dos dados armazenados no computador.', isRight: false },
        { description: 'Melhorar a qualidade de som reproduzida pelo sistema de áudio.', isRight: false },
        { description: 'Assegurar a eficiência e durabilidade do sistema computacional.', isRight: true }
      ]
    },
    {
      title: "Qual é a função do hardware de saída em um sistema computacional?",
      answers: [
        { description: 'Processar e armazenar dados.', isRight: false },
        { description: 'Estabelecer conexão com a internet', isRight: false },
        { description: 'Exibir informações na tela, reproduzir áudio e imprimir documentos.', isRight: true },
        { description: 'Capturar dados do ambiente externo, como imagens e sons.', isRight: false }
      ]
    },
    {
      title: "Qual componente de hardware é responsável pelo gerenciamento e processamento de gráficos complexos em um computador?",
      answers: [
        { description: 'Placa de vídeo.', isRight: false },
        { description: 'Placa de som.', isRight: false },
        { description: 'Placa de rede.', isRight: true },
        { description: 'Placa-mãe.', isRight: false }
      ]
    },
    {
      title: "Qual componente de hardware é responsável por fornecer energia elétrica estável e adequada para o funcionamento de todos os outros componentes de um computador?",
      answers: [
        { description: 'Processador.', isRight: false },
        { description: 'Fonte de alimentação.', isRight: true },
        { description: 'Placa de rede.', isRight: false },
        { description: 'Disco rígido.', isRight: false }
      ]
    },
    {
      title: "Qual é o componente de hardware utilizado para exibir informações visuais em um computador?",
      answers: [
        { description: 'Mouse.', isRight: false },
        { description: 'Teclado.', isRight: false },
        { description: 'Monitor.', isRight: true },
        { description: 'Impressora.', isRight: false }
      ]
    },
    {
      title: "Qual é o componente de hardware utilizado para inserir informações e comandos em um computador?",
      answers: [
        { description: 'Mouse.', isRight: false },
        { description: 'Impressora.', isRight: false },
        { description: 'Monitor.', isRight: false },
        { description: 'Teclado.', isRight: true }
      ]
    },
    {
      title: "Qual é a função principal da memória RAM em um computador?",
      answers: [
        { description: 'Armazenar permanentemente os dados do usuário.', isRight: false },
        { description: 'Realizar cálculos matemáticos complexos.', isRight: false },
        { description: 'Fornecer energia elétrica aos demais componentes.', isRight: false },
        { description: 'Armazenar temporariamente os dados em uso pelo sistema operacional e aplicativos.', isRight: true }
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
