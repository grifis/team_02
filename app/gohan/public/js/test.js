const HOST = "127.0.0.1";
const PORT = "8000";


function change(){
  var weight = Number(document.getElementById("weight").value);
  
  document.getElementById('a').innerHTML = "りんご";
  document.getElementById('b').innerHTML = weight; //計算結果
  
}