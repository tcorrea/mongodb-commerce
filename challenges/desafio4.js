// Retorne os lanches que tiveram vendas maiores que 50 e menores que 100,
// mostrando apenas o nome e a quantidade de lanches vendidos em ordem crescente
db.produtos.find({
  $and: [{ vendidos: { $gte: 50, $lte: 100 } }],
}, { _id: 0, nome: 1, vendidos: 1 })
  .sort({ vendidos: 1 });
