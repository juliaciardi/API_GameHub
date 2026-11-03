import conexao from "../../db.js";


export function listarJogos(callback){
    const sql = "SELECT * FROM jogadores ORDER BY id";
    conexao.query(sql, callback);
};


export function buscarPorJogos(id, callback){
    const sql = "SELECT * FROM jogadores WHERE id = ?";
    conexao.query(sql, [id], callback);
};


export function criarJogos(dados, callback){
    const sql = "INSERT INTO jogadores (nome, email, nickname) VALUES (?, ?, ?)";
    conexao.query(sql, [dados.nome, dados.ano-lancamento, dados.estudio_id], callback);
};


export function atualizarJogos(id, dados,callback){
    const sql = "UPDATE jogadores SET nome = ?, email = ?, nickname = ? WHERE id = ?";
    conexao.query(sql, [dados.nome, dados.ano-lancamento, dados.estudio_id, id], callback);
};


export function deletarJogos(id, callback){
    const sql = "DELETE FROM jogadores WHERE id = ?";
    conexao.query(sql, [id], callback);
};