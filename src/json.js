export const surveyJson = {
  pages: [{
    elements: [{
      type: "html",
      html: "<h2>Teste de Personalidade."
    }]
  }, {
    elements: [{
      name: "Esportiva",
      title: "Selecione:",
      type: "checkbox",
      choices: [
        "Casual",
        "Alegre",
        "Animada",
        "Entusiasmada",
        "Amigável",
        "Divertida",
        "Natural",
        "Rápida",
        "Otimista",
        "Despretensiosa"
      ],
      "isRequired": false,
      "colCount": 2
      // "showNoneItem": true,
      // "showOtherItem": true,
      // "showSelectAllItem": true,
      // "separateSpecialChoices": true
    }]
  }, {
    elements: [{
      name: "Tradicional",
      title: "Selecione:",
      type: "checkbox",
      choices: [
        "Sistemática",
        "Conservadora",
        "Confiável",
        "Eficiente",
        "Leal",
        "Organizada",
        "Fidedigna",
        "Responsável",
        "Sensível",
        "Digna de Confiança"
      ],
      "isRequired": false,
      "colCount": 2
      // "showNoneItem": true,
      // "showOtherItem": true,
      // "showSelectAllItem": true,
      // "separateSpecialChoices": true
    }]
  }, {
    elements: [{
      name: "Elegante",
      title: "Selecione:",
      type: "checkbox",
      choices: [
        "Educada",
        "Digna",
        "Perspicaz",
        "Graciosa",
        "Meticulosa",
        "Preparada",
        "Refinada",
        "Reservada",
        "Serena",
        "Imponente"
      ],
      "isRequired": false,
      "colCount": 2
      // "showNoneItem": true,
      // "showOtherItem": true,
      // "showSelectAllItem": true,
      // "separateSpecialChoices": true
    }]
  },
  {
    elements: [{
      name: "Feminina/Romântica",
      title: "Selecione:",
      type: "checkbox",
      choices: [
        "Carinhosa",
        "Compassiva",
        "Atenciosa",
        "Gentil",
        "Romântica",
        "Sensível",
        "Suave",
        "Apoiadora",
        "Compreensiva",
        "Terna"
      ],
      "isRequired": false,
      "colCount": 2
      // "showNoneItem": true,
      // "showOtherItem": true,
      // "showSelectAllItem": true,
      // "separateSpecialChoices": true
    }]
  },
  {
    elements: [{
      name: "Sensual/Magnética",
      title: "Selecione:",
      type: "checkbox",
      choices: [
        "Ousada",
        "Atraente",
        "Excitante",
        "Galanteadora",
        "Glamorosa",
        "Provocante",
        "Sedutora",
        "Sensual",
        "Sexy",
        "Magnética"
      ],
      "isRequired": false,
      "colCount": 2
      // "showNoneItem": true,
      // "showOtherItem": true,
      // "showSelectAllItem": true,
      // "separateSpecialChoices": true
    }]
  }, {
    elements: [{
      name: "Criativa",
      title: "Selecione:",
      type: "checkbox",
      choices: [
        "Aventureira",
        "Artística",
        "De espírito livre",
        "Imaginativa",
        "Independente",
        "Inovadora",
        "Original",
        "Espontânea",
        "Incomum",
        "Ímpar"
      ],
      "isRequired": false,
      "colCount": 2
      // "showNoneItem": true,
      // "showOtherItem": true,
      // "showSelectAllItem": true,
      // "separateSpecialChoices": true
    }]
  }, {
    elements: [{
      name: "Dramática",
      title: "Selecione:",
      type: "checkbox",
      choices: [
        "Agressiva",
        "Desligada",
        "Confidente",
        "Exigente",
        "Moderna",
        "Intensa",
        "Distante",
        "Autoconfiante",
        "Sofisticada",
        "Cosmopolitana"
      ],
      "isRequired": false,
      "colCount": 2
      // "showNoneItem": true,
      // "showOtherItem": true,
      // "showSelectAllItem": true,
      // "separateSpecialChoices": true
    }]
  }],
  showQuestionNumbers: "on",
  pageNextText: "Seguinte",
  pagePrevText: "Anterior",
  completeText: "Enviar",
  showPrevButton: true,
  firstPageIsStarted: true,
  startSurveyText: "Iniciar",
  completedHtml: "Obrigada!",
  // showPreviewBeforeComplete: "showAnsweredQuestions"
};
