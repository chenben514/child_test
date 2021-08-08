

@media all and (min-device-width: 1000px) {
    #quizHeader {
      max-width: 800px;
      margin: 0 auto;
    }

    .styled-check {
        font-size:30px;
        height:36px;
        float: left;
        width: 110px;
        /* margin-right: 10px; */
    }

    /* Apply first set of CSS rules */
    .styled-select {
        font-size:20px;
        height: 36px;
        float: left;
        width: 110px;
        margin-right: 10px;
    }

    .styled-select select {
        font-size: 20px;
        border-radius: 0;
        border: none;
        /* background: transparent; */
        background-color: #4c93ba;
        width: 380px;
        overflow: hidden;
        padding-top: 15px;
        height: 70px;
        text-indent: 10px;
        color: #4c93ba;
        -webkit-appearance: none;
    }

    /* (B) QUESTION */
    #quizQn {
      padding: 20px;
      background: #4c93ba;
      color: #fff;
      font-size: 24px;
      border-radius: 10px;
    }

    #quizAns label {
      background: #fafafa;
      border: 1px solid #eee;
      border-radius: 10px;
      padding: 60px;
      font-size: 20px;
      cursor: pointer;
      text-align: center;
    }

    .quizDirectAns {
      background: #FFFFE0;
      border: 1px solid #eee;
      border-radius: 10px;
      padding: 20px;
      font-size: 36px;a
      cursor: pointer;
      text-align: left;
      height: 40px;
      width: 760px;
    }

}
@media not all and (min-device-width: 1000px) {
  #quizHeader {
    max-width: 800px;
    margin: 0 auto;
  }
    /* Apply first set of CSS rules */
    .styled-select {
        font-size:60px;
        height: 110px;
        float: left;
        width: 420px;
        /* margin-right: 10px; */
    }

    .styled-select select {
        font-size: 60px;
        border-radius: 0;
        border: none;
        /* background: transparent; */
        background-color: #4c93ba;
        width: 420px;
        overflow: hidden;
        padding-top: 5px;
        height: 70px;
        text-indent: 10px;
        color: #4c93ba;
        -webkit-appearance: none;
    }

    /* Apply first set of CSS rules */

    /* (B) QUESTION */
    #quizQn {
      padding: 20px;
      background: #4c93ba;
      color: #fff;
      font-size: 100px;
      border-radius: 10px;
    }

    #quizAns label {
      background: #fafafa;
      border: 1px solid #eee;
      border-radius: 10px;
      padding: 60px;
      font-size: 100px;
      cursor: pointer;
      text-align: center;
    }

}

/* (A) WRAPPER */
#quizWrap {
  max-width: 800px;
  margin: 0 auto;
}
https://github.com/chenben514/child_test/blob/master/quiz.js


/* (C) ANSWERS */
#quizAns {
  margin: 10px 0;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
}
#quizAns input[type=radio] { display: none; }
#quizAns label.correct {
  background: #d8ffc4;
  border: 1px solid #60a03f;
}
#quizAns label.wrong {
  background: #ffe8e8;
  border: 1px solid #c78181;
}


/* (D) BODY... DOES NOT QUITE MATTER */
html, body {
  background: #74b6db;
  font-family: arial, sans-serif;
}
