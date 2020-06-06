const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

// db.serialize(() => {

  // db.run(`
  //     CREATE TABLE IF NOT EXISTS places (
  //         id INTEGER PRIMARY KEY AUTOINCREMENT,
  //        name TEXT,
  //         image TEXT,
  //         address TEXT,
  //         address2 TEXT,
  //         state TEXT,
  //        city TEXT,
  //       items TEXT
  //     );
  //  `)

  // const query = `
  //   INSERT INTO places (
  //     name,
  //     image,
  //     address,
  //       address2,
  //       state,
  //     city,
  //     items
  //     ) VALUES (?,?,?,?,?,?,?)
  // `
  // const values = [
  //     "Colectoria",
  //   "https://images.unsplash.com/photo-1539692267500-f384fb119654?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=411&q=80",
  //     "Guilherme Gemballa, Jardim América",
  //     "Número 260",
  //   "Santa catarina",
  //   "Rio do Sul",
  //   "Resíduos Eletrônicos"
  // ]

  // function afterInsertData(err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //     console.log("Cadastrado com sucesso");
  //     console.log(this);
  // };

  // db.run(query, values, afterInsertData);

  // db.all(`SELECT * FROM places`, function(err, rows) {
  //     if(err) {
  //         return console.log(err);
  //     };

  //     console.log("Aqui estão seus registros: ");
  //     console.log(rows);
  // });


  // db.run(`DELETE FROM places WHERE id = ?`, [6], function(err) {
  //   if(err) {
  //       return console.log(err);
   //  };

    //  console.log("Registro deletado com sucesso!");
  // });

//});