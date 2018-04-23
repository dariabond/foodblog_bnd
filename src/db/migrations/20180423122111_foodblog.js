exports.up = function(knex, Promise) {
  Promise.all([
      knex.schema.createTable('recipes', function(table) {
          table.increments('id').primary();
          table.string('title').notNull();
          table.dateTime('post_date').notNull();
          table.string('photo_url').notNull();
          table.specificType('tags', 'text[]');
          table.string('abstract').notNull();
          table.specificType('article_order', 'text[]');
      }),
      
      knex.schema.createTable('categories', function(table) {
          table.increments('id').primary();
          table.string('name').notNull();
          table.string('photo_url').notNull();
      }),
      
      knex.schema.createTable('recipes_categories', function(table) {
          table.integer('recipe_id').primary()
              .references('id')
              .inTable('recipes');
          table.integer('category_id').primary()
              .references('id')
              .inTable('categories');
      }),
      
      knex.schema.createTable('comments', function(table) {
          table.increments('id').primary();
          table.string('text').notNull();
          table.string('authorName');
          table.string('authorEmail').notNull();
      })
  ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('recipes'),
        knex.schema.dropTable('categories'),
        knex.schema.dropTable('recipes_categories'),
        knex.schema.dropTable('comments')
    ])
};