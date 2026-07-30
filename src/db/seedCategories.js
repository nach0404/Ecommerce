const db = require("./database");


const categories = [
    "Alimentos",
    "Bebidas",
    "Electronica",
    "Indumentaria",
    "Juegos",
    "Automotor",
    "Hogar",
    "Otros"
];


const insert = db.prepare(
    `
    INSERT OR IGNORE INTO categories(name)
    VALUES(?)
    `
);


categories.forEach(category => {
    insert.run(category);
});


console.log("Categorías cargadas correctamente");