<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel='stylesheet' href="css/gohan.css">
</head>
<body>
  <header>
    <div class="header-container">
      <h1>シュミレーション名</h1>
    </div>

  </header>

  <body>
    <div class="body-container">
      <div class="side">
        <button class="fruit">果物</button>
        <button class="vegetables">野菜</button>
        <button class="fish">魚</button>
        <button class="foods">食べ物</button>
      </div>

      <div class="main">
        <p class="fukidashi">体重を入力してね!!!!</p>


        <input type="number" id="weight"><p>kg</p><button onClick="return change()">決定</button>  


        <p>OOOで表すと、、、</p>


        <div class="result" id="result">
          <p>あなたの体重は、<br><p id="a">x</p>が<p id="b">y</p>個分です。</p>


        </div>
      </div>

    </div>
    
  </body>

  <footer>
    <div class="footer-container">

    </div>

  </footer>
  <!-- <button onClick="return test_func();">ここを押してね</button> -->
</body>
<script src="js/gohanz.js"></script>
</html>