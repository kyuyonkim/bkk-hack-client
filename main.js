// デフォルト値の設定
var today = new Date();
$('#year').val(today.getFullYear());
$('#month').val(today.getMonth() + 1);
$('#day').val(today.getDate());

var socket = io('http://safe-wave-6447.herokuapp.com:80');
$('form').submit(function(){
    // 空白チェック
	if(document.input_form.name_input.value == "" || document.input_form.year_input.value == "" || document.input_form.month_input.value == "" || document.input_form.day_input.value == ""){
        alert("未入力の項目があります");
    }
	socket.emit(
		'request',
		{
			name: $('#user-name').val(),
			year: $('#year').val(),
			month: $('#month').val(),
			day: $('#day').val(),
			starSign: $("#star-sign option:selected").text()
		}
	);
	return false;
});
socket.on('result', function(data){
	$('#messages').append($('<li>').text(
		data.name + "さんの" +
		data.year + "年" + data.month + "月" + data.day + "日の運勢は「" +
		data.result.content + "」ラッキーアイテムは" + data.result.item + "です。"));
});