// Remova o campo curtidas do item Big Mac
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $unset: { curtidas: "Big Mac" } },
);
db.produtos.find({ nome: { $ne: "" } }, { _id: 0, nome: 1, curtidas: 1 });
