// 接続情報
const HOST = "127.0.0.1";
const PORT = "8000";

// windowの読み込みが完了したら実行される
window.onload = () => {
	// エンドポイントのURL
	const api_endpoint = `http://${HOST}:${PORT}/main`;
	// HTML要素をIDから取得
	const message_weight_el = document.getElementById("weight"); //体重
	const submit_expression_el = document.getElementById("evpression-button"); //例え
	const submit_button_el = document.getElementById("submit-button"); //決定ボタン
	

	//ドロップダウンの設定を関数でまとめる
	function mediaQueriesWin() {
		const width = $(window).width();
		if (width <= 768) { //横幅が768px以下の場合 $(".has-child>a").off('click');	//has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
			$(".has-child>a").on('click', function () { //has-childクラスがついたaタグをクリックしたら
				const parentElem = $(this).parent(); // aタグから見た親要素のliを取得し
				$(parentElem).toggleClass('active'); //矢印方向を変えるためのクラス名を付与して
				$(parentElem).children('ul').stop().slideToggle(500); //liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
				return false; //リンクの無効化
			});
		} else { //横幅が768px以上の場合
			$(".has-child>a").off('click'); //has-childクラスがついたaタグのonイベントをoff(無効)にし
			$(".has-child>a").removeClass('active'); //activeクラスを削除
			$('.has-child').children('ul').css("display", ""); //スライドトグルで動作したdisplayも無効化にする
		}
	}
	// ページがリサイズされたら動かしたい場合の記述
	$(window).resize(function () {
		mediaQueriesWin(); /* ドロップダウンの関数を呼ぶ*/
	})
	// ページが読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function () {
		mediaQueriesWin(); /* ドロップダウンの関数を呼ぶ*/
	});
  
	//id取得後の計算
	/*
	function calc(id, gram){
	    if (id >= gram){
	        if (フルーツ === id){
	           const ans = (gram / フルーツ) ;
	        }
	    }else{
	        if (魚 === id){
	            const ans = Math.floor(魚 / gram );
	        }
	    }
	        
	    return ans
	}
	*/
	const get_messages = () => axios.get(api_endpoint) //メッセージの取得
		.then((response) => {
			// 取得したメッセージを画面に描写する
			const messages = response.data;
			update_message_view(messages);
			console.log(messages);
		}).catch((error) => console.log(error)); // エラー時はエラー内容をコンソールに出力する
	// メッセージを送信する関数
	const post_message = () => {
		// ユーザ名をテキストエリアから取得する
		const user_name = user_name_el.value;
		// メッセージをテキストエリアから取得する
		const message = message_textarea_el.value;
		// 性別をテキストエリアから取得する
		const gender = document.querySelector("input[name=gender]:checked").value;
		// リクエストボディはJSON形式で次のようなオブジェクトを渡す
		/* 一例
		    {
		        "user_name": "user1",
		        "message": "message1"
		    }
		    */
		//console.log(gender, 123);
		axios.post(api_endpoint, { //postでメッセージの登録
				expresssion: expression,
				user_gram: user_guram,
			}).then((response) => get_messages()) //送信したメッセージも含め画面に描写する
			.catch((error) => console.log(error)); // エラー時はエラー内容をコンソールに出力する
	};
	// メッセージを送信するボタンをクリックしたらメッセージを送信する
	submit_button_el.addEventListener("click", () => post_message());
}