// Ordene em todos os documentos os valores do array valoresNutricionais
// pelo campo percentual de forma decrescente
// db.produtos.updateMany({}, {
//     $set: {"valoresNutricionais.$[element].percentual"}
//     // $push: { "valoresNutricionais.percentual": { $each: [], $sort: -1 } },
// });
// db.produtos.find({}, { _id: 0, nome: 1, valoresNutricionais: 1 });