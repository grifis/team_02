const HOST = "127.0.0.1";
const PORT = "8000";

function calc(human_gram, food_gram){
  value = human_gram / food_gram;
  if (human_gram >= food_gram){
    kosu = Math.floor(value);
  } else {
    kosu = (value)
  }
  return kosu
}

function change(){
  const food_name = document.getElementById('food_name').textContent;
  const food_weight = document.getElementById('food_weight').textContent;
  const human_weight = Number(document.getElementById("weight").value) * 1000;
  const weight = calc(human_weight, food_weight);
  document.getElementById('a').innerHTML = food_name;
  document.getElementById('b').innerHTML = weight; //計算結果
}

function random(food){
    const food_name = document.getElementById('food_name');
    const food_weight = document.getElementById('food_weight');
    let num = Math.floor( Math.random() * 10);
    const random_food_name = Object.keys(food)[num];
    const random_food_weight = food[random_food_name];
    food_name.innerHTML = random_food_name;
    food_weight.innerHTML = random_food_weight;
}


function copy_paste() {
  const copyTarget = document.getElementById("copy").textContent;
  const listener = function(e) {

    e.clipboardData.setData("text/plain", copyTarget);
    e.preventDefault();
    document.removeEventListener("copy", listener);
  }

  document.addEventListener("copy", listener);

  document.execCommand("copy");
}


document.getElementById("twitter-share-button").onclick = function() {
  let text = document.getElementById("copy").innerText;


  let hashtags = "キティー流!!体重シュミレーター";
  let url = encodeURIComponent(location.href)

  window.open("https://twitter.com/share?text=" + text + "&hashtags=" + hashtags + "&url=" + url);
}

const floots = {"りんご": 340, "みかん": 100, "オレンジ": 250, "レモン": 150, "柿": 150, "イチゴ": 8, "バナナ": 150, "キウイ": 120, "メロン": 2000, "マンゴー": 360};

const vegetable = {"キャベツ": 1000, "ほうれん草": 200, "小松菜": 300, "水菜": 120, "白菜": 2000, "ネギ": 200, "レタス": 400, "ブロッコリー": 300, "もやし": 0.8, "大葉": 1};

const fish = {"鮭": 8700, "鯖": 1600, "さんま": 140, "マグロ": 350000, "アジ": 30, "ブリ": 10000, "カツオ": 19000, "ホッケ": 500, "イワシ": 96, "タラ": 40000};

const foods = {"豆腐": 300, "油揚げ": 30, "納豆": 40, "食パン": 400, "寿司一貫": 20, "餃子": 23, "ハンバーグ": 150, "エビフライ": 30, "たけのこの里": 2, "牛丼": 340};


