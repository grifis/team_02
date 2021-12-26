function copy(e1)
{
  navigator.clipboard.writeText(e1.innerTetxt)
  .then(() => {
    console.log('成功');
  })
  .catch(err => {
    console.error('ユーザーが拒否、もしくは何らかの理由で失敗');
  });
};

var e1 = document.getElementById('copy_target');

e1.addEventListener('click', function(){
  copy(this);
});


// function paste(e1) {
//   navigator.clipboard.readText()
//   .then((text) => {
//     e1.value = text;
//     console.log('ペーストされたテキスト:', text);
//   })
//   .catch(err => {
//     console.error('ユーザーが拒否、もしくは何らかの理由で失敗', err);
//   });
// };

// var btn = document.getElementById()