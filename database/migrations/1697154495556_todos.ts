import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "todos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("description").notNullable();
      table.integer("status").defaultTo(0);
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
    this.defer(async (db) => {
      await db.table(this.tableName).multiInsert([
        {
          title: "test 1",
          description: "test 1",
        },
        {
          title: "test 2",
          description: "test 2",
        },
      ]);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
