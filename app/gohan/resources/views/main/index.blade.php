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
      <h1>シミュレーション名</h1>
    </div>

  </header>

  <body>
    <div class="body-container">
      <div class="side">


        <button class="fruit btn" onClick="return random(floots);">果物</button>

        <button class="vegetables btn" onClick="return random(vegetable);">野菜</button>
        <button class="fish btn" onClick="return random(fish);">魚</button>
        <button class="foods btn" onClick="return random(foods);">食べ物</button>
      </div>

      <div class="main">
        <p class="fukidashi">体重を入力してね!!!!</p>
        <div class="input-box">
          <input type="number" id="weight" size=40 style="font-size:40px;"><p>kg</p>
          <button class='decide btn' onClick="return change()">決定</button>  
        </div>

        <p>
          <span id="food_name">りんご</span>(<span id="food_weight">300</span>g)で表すと、、、
        </p>

        <div class="result" id="result">
          <p id="copy">あなたの体重は、<br><span id="a">りんご</span>が<span id="b">OO</span>個分です。</p>
          <button id="copy_button" onClick="return copy_paste()">copy</button>

        </div>

      </div>

    </div>
    
  </body>

  <footer>
  	<p>© All rights reserved by 朝は、ご飯派。</p>
  </footer>
  <!-- <button onClick="return test_func();">ここを押してね</button> -->
</body>

<script src="js/test.js"></script>
</html>