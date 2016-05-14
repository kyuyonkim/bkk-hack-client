var socket = io('http://safe-wave-6447.herokuapp.com:80');
$('form').submit(function(){
	socket.emit(
		'request',
		{
			name: $('#user-name').val(),
			year: '2016',
			month: '05',
			day: "14",
			starSign: $("#star-sign option:selected").text()
		}
	);
	return false;
});
socket.on('result', function(data){
	$('#messages').append($('<li>').text(
		data.name + "さんの今週の運勢は「" +
		data.result.content + "」ラッキーアイテムは" + data.result.item + "です。"));
});