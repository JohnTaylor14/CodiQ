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
      "title": "O que é software?",
      "answers": [
        { "description": "É a parte física do computador responsável pelo funcionamento do hardware.", "isRight": false },
        { "description": "É um conjunto de programas e instruções lógicas que controlam o funcionamento do hardware do computador e executam tarefas específicas.", "isRight": true },
        { "description": "É um dispositivo eletrônico que armazena e processa informações.", "isRight": false },
        { "description": "É um programa específico utilizado para edição de fotos.", "isRight": false }
      ]
    },
    {
      "title": "Qual é a diferença entre software de sistema e software de aplicativos?",
      "answers": [
        { "description": "Software de sistema é um conjunto de programas que realiza tarefas específicas, enquanto software de aplicativos gerencia os recursos do computador.", "isRight": false },
        { "description": "Software de sistema é responsável pela execução de tarefas e interação do usuário, enquanto software de aplicativos realiza tarefas específicas.", "isRight": false },
        { "description": "Software de sistema gerencia os recursos do computador, enquanto software de aplicativos é um conjunto de programas que realiza tarefas específicas.", "isRight": true },
        { "description": "Não há diferença entre software de sistema e software de aplicativos.", "isRight": false }
      ]
    },
    {
      "title": "Quais são os principais componentes do software de sistema?",
      "answers": [
        { "description": "Processador, memória RAM e disco rígido.", "isRight": false },
        { "description": "Sistema operacional, drivers de dispositivo, utilitários de sistema e programas de segurança.", "isRight": true },
        { "description": "Navegador de internet, processador de texto e editor de fotos.", "isRight": false },
        { "description": "Placa-mãe, placa de vídeo e placa de som.", "isRight": false }
      ]
    },
    {
      "title": "Quais são os principais objetivos das atualizações de software?",
      "answers": [
        { "description": "Adicionar novos recursos, melhorar a segurança e fornecer suporte técnico.", "isRight": true },
        { "description": "Reduzir o desempenho do sistema, introduzir bugs e incompatibilidades.", "isRight": false },
        { "description": "Aumentar o tamanho dos arquivos de instalação, adicionar anúncios e solicitar pagamentos.", "isRight": false },
        { "description": "Nenhum objetivo específico, apenas uma prática comum na indústria de software.", "isRight": false }
      ]
    },
    {
      "title": "Quais são as etapas envolvidas na criação de software?",
      "answers": [
        { "description": "Codificação, compilação e teste.", "isRight": false },
        { "description": "Análise de requisitos, projeto, codificação, testes e manutenção.", "isRight": true },
        { "description": "Design, prototipagem e implantação.", "isRight": false },
        { "description": "Planejamento, execução e controle.", "isRight": false }
      ]
    },
    {
      "title": "Por que o software é essencial para o funcionamento do computador?",
      "answers": [
        { "description": "O software permite o armazenamento e processamento de dados no computador.", "isRight": false },
        { "description": "O software controla o funcionamento do hardware e executa tarefas específicas.", "isRight": true },
        { "description": "O software é responsável por conectar o computador à internet.", "isRight": false },
        { "description": "O software garante a compatibilidade do computador com diferentes dispositivos externos.", "isRight": false }
      ]
    },{
      "title": "O que é linguagem de programação?",
      "answers": [
        { "description": "É um conjunto de instruções físicas que controlam o funcionamento do hardware.", "isRight": false },
        { "description": "É um tipo de software usado para criar e editar documentos de texto.", "isRight": false },
        { "description": "É um conjunto de regras e símbolos utilizados para escrever programas de computador.", "isRight": true },
        { "description": "É uma técnica de segurança usada para proteger o software contra ameaças virtuais.", "isRight": false }
      ]
    },
    {
      "title": "Quais são as principais etapas do desenvolvimento de software?",
      "answers": [
        { "description": "Análise de requisitos, codificação e testes.", "isRight": false },
        { "description": "Planejamento, design, codificação, testes e manutenção.", "isRight": true },
        { "description": "Instalação, configuração e atualização.", "isRight": false },
        { "description": "Revisão de código, depuração e documentação.", "isRight": false }
      ]
    },
    {
      "title": "O que são drivers de dispositivo?",
      "answers": [
        { "description": "São programas que realizam tarefas específicas, como processamento de texto e edição de imagens.", "isRight": false },
        { "description": "São componentes físicos de um computador, como teclado e mouse.", "isRight": false },
        { "description": "São programas responsáveis por permitir a comunicação entre o sistema operacional e os dispositivos de hardware.", "isRight": true },
        { "description": "São dispositivos de saída que exibem informações visuais em um computador.", "isRight": false }
      ]
    },
    {
      "title": "O que são utilitários de sistema?",
      "answers": [
        { "description": "São programas usados para criar e editar planilhas de dados.", "isRight": false },
        { "description": "São componentes físicos de um computador, como monitor e impressora.", "isRight": false },
        { "description": "São programas que auxiliam no gerenciamento e na manutenção do sistema operacional e do computador.", "isRight": true },
        { "description": "São dispositivos de entrada que permitem digitar comandos em um computador.", "isRight": false }
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
