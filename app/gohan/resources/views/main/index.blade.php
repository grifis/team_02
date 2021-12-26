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
<<<<<<< HEAD
        <button class="fruit" onclick="getValue()">果物</button>
        <button class="vegetables" onclick="getValue()">野菜</button>
        <button class="fish" onclick="getValue()">魚</button>
        <button class="foods" onclick="getValue()">食べ物</button>
=======
        <button class="fruit" onclick="getvalue()">果物</button>
        <button class="vegetables" onclick="getvalue()">野菜</button>
        <button class="fish" onclick="getvalue()">魚</button>
        <button class="foods" onclick="getvalue()">食べ物</button>
>>>>>>> aa0152f9ba5389c5a3f603ad88017a318542d23e
      </div>

      <div class="main">
        <p class="fukidashi">体重を入力してね!!!!</p>
<<<<<<< HEAD
        <form name="weight" id="weight" onclick="getValue()" accept-charset="UTF-8"	action="/js/gohan.js">
          <input type="number"><p>kg</p><input type="submit" value="決定">
=======
        <form method="POST" name="weight" id="weight" accept-charset="UTF-8"	action="/js/gohan.js">
          <input type="number"><p>g</p><input onclick="getvalue()" type="submit" value="決定">
>>>>>>> aa0152f9ba5389c5a3f603ad88017a318542d23e
        </form>

        <p id="conversion"></p>

        <div class="result" id="result">
          <p>あなたの体重は、<br>OOOがXXX個分です。</p>

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
<script src="js/gohan.js"></script>
</html>