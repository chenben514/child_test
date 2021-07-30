var quiz = {
  // (A) PROPERTIES
  // (A1) QUESTIONS & ANSWERS
  // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER

  // (A2) HTML ELEMENTS
  hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapper
  hAns: null, // HTML answers wrapper

  // (A3) GAME FLAGS
  now: 0, // current question
  score: 0, // current score
  correctPos: 0,
  correctAnswer: null,
  quesList: [],
  quesArr: [],
  ansList: [],
  firstTime: 0,


  // (B) INIT QUIZ HTML
  init: function(){
    //alert(quesArr[quesList[quiz.now]]);
    // (B4) GO!
    quiz.restart();
    quiz.firstTime++;
  },

  select_change: function(){
    quiz.restart();
  },

  restart: function(){

    // (B0) Initial
    quiz.now=0;
    quiz.score=0;
    quiz.correctAnswer=null;
    quiz.quesList=[];
    quiz.quesArr=[];
    quiz.ansList=[];
    quiz.ansString=["ans1","ans2","ans3","ans4"];

    if (quiz.firstTime === 0) {
      // (B1) WRAPPER
      quiz.hWrap = document.getElementById("quizWrap");

      // (B2) QUESTIONS SECTION
      quiz.hQn = document.createElement("div");
      quiz.hQn.id = "quizQn";
      quiz.hWrap.appendChild(quiz.hQn);

      // (B3) ANSWERS SECTION
      quiz.hAns = document.createElement("div");
      quiz.hAns.id = "quizAns";
      quiz.hWrap.appendChild(quiz.hAns);
    }

    //ben_test
    var selCategory = document.getElementById("category").value;
    var selLevel = document.getElementById("level").value;
    var selFile = selCategory+"_"+selLevel+".csv";

    var read = new XMLHttpRequest();
    read.open('GET', selFile, false);
    read.setRequestHeader('Cache-Control', 'no-cache');
    read.send();
    var displayName = read.responseText;
    quiz.quesArr = displayName.replace(/\r\n/g,'\n').split('\n');
    const quesCnt = quiz.quesArr.length-1;

    while(quiz.quesList.length < quesCnt){
      var r = Math.floor(Math.random() * quesCnt);
      if(quiz.quesList.indexOf(r) === -1) quiz.quesList.push(r);
    }
    quiz.draw();
  },

  // (C) DRAW QUESTION
  draw: function(){
     //alert(quesArr[quesList[quiz.now]]);
    // (C1) QUESTION
    var singQuesArr = quiz.quesArr[quiz.quesList[quiz.now]].split(',');
    quiz.hQn.innerHTML = "["+ (quiz.score+1) + "/" +   quiz.quesList.length.toString() + "] " + singQuesArr[0];
    quiz.correctAnswer = singQuesArr[1];

    //quiz.hQn.innerHTML = questArr[quiz.quesList[quiz.now]];
    //quiz.hQn.innerHTML = quesArr[quesList[quiz.now]];
    // (C2) OPTIONS

    quiz.ansList=[];
    quiz.correctPos=0;
    while(quiz.ansList.length < 4){
          var r = Math.floor(Math.random() * 4)+1;
          if(quiz.ansList.indexOf(r) === -1) {
              quiz.ansList.push(r);
              if (r===1) {
                quiz.correctPos = quiz.ansList.length -1 ;
              }
          }
        }
    // alert(quiz.ansList+"..."+quiz.correctPos);
    quiz.hAns.innerHTML = "";
    var i;
    for (i=0; i<=3; i++) {
      // let radio = document.createElement("input");
      // radio.type = "radio";
      // radio.name = "quiz";
      // radio.id = "quizo" + i;
      // quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = singQuesArr[quiz.ansList[i]];
      quiz.ansString[i]=singQuesArr[quiz.ansList[i]];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", quiz.select);
      quiz.hAns.appendChild(label);
      // document.appendChild("<p>");
    }
  },

  // (D) OPTION SELECTED
  select: function(){
    // (D1) DETACH ALL ONCLICK
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // (D2) CHECK IF CORRECT
//    alert("you press " + this.dataset.idx + " and correct is " + quiz.correctPos);
    let correct = this.dataset.idx == quiz.correctPos;
    if (correct) {
      quiz.score++;
      // (D3) NEXT QUESTION OR END GAME
      quiz.now++;
      if (quiz.score===quiz.quesList.length){
        alert("你全部答對了!!!");
        quiz.restart();
      }
      setTimeout(function(){
        if (quiz.now < quiz.quesList.length) { quiz.draw(); }
        else {
          quiz.hQn.innerHTML = `你 ${quiz.data.length} 題全部答對了！！`;
          quiz.hAns.innerHTML = "";
        }
      }, 100);
    } else {
      var choiceAns = quiz.ansString[this.dataset.idx];
       alert("你答錯了。\r\n"+this.dataset.idx+quiz.correctPos+ "[問題]："+quiz.hQn.innerHTML+"\r\n[正確答案]: "+quiz.correctAnswer+"\r\n[你回答了]: "+choiceAns);
      //  alert("你答錯了。\r\n[問題]："+quiz.hQn.innerHTML+"\r\n[正確答案]: "+quiz.correctAnswer+"\r\n[你回答了]: "+choiceAns);
      quiz.restart();
    }
  }
};
window.addEventListener("load", quiz.init);
