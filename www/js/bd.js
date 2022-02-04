var db = openDatabase('nome_do_banco', '1.0', 'Monique', 2 * 1024 * 1024);

	
db.transaction(function (tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS usuario (nome text, hor text , min text)'); // criando uma tabela no Banco de Dantos
});

function insert(nome, hor , min){
	db.transaction(function(tx){
		tx.executeSql(("INSERT INTO usuario (nome, hor , min) VALUES (? , ? , ?)"),[nome, hor , min]); // Inserindo um registro no banco de dados.
	});
}
