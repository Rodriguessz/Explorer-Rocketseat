exports.up = knex => knex.schema.createTable("users", table => {
  table.increments("id");
  table.text("name").notNullable();
  table.text("email").notNullable();
  table.text("password").notNullable();

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());

  //Enumeration - Tipo de coluna que nos permite trabalhar com opções fixas para valores. Podemos definir um array com as opções e ela só poderá receber um desses valores.
  //enu("nameColumn", [options], { useNative: true, enumName: enumName })
  table.enu("role", ["admin", "customer"], {
    useNative: true,
    enumName:  "roles",
  }).notNullable().defaultTo("customer");

});

exports.down = knex => knex.schema.dropTable("users");