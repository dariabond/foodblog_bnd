exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('recipes').del()
        .then(() => {
            return knex('categories').del();
        })
        .then(() => {
            return knex('recipes_categories').del();
        })
        .then(() => {
            return knex('comments').del();
        })
        .then((res) => {
            let categories = res[0];
            return Promise.all([
                knex('categories').insert([
                    {
                        name: "Desserts"
                    },
                    {
                        name: "Breakfast"
                    },
                    {
                        name: "Soups"
                    },
                    {
                        name: "Beverages"
                    }
                ]).returning("*"),
                knex('recipes').insert([
                    {
                        title: "New raw cheesecake",
                        post_date: '2000-10-01',
                        photo_url: "photo_01.jpg",
                        tags: ['raw', 'vegan', 'healthy', 'gogreen', 'dessert'],
                        abstract: 'This is super duper new raw cheesecake for Sashechka and for those who don"t eat sugar. Here is the recipe...',
                        article_order: [
                            "This is super duper new raw cheesecake for Sashechka and for those who don't eat sugar. Here " +
                            "is the recipe you are definitely gonna enjoy.",
                            "img:food_salad.jpg",
                            "List:2 cups of cashew nuts, 2 cups of warm water, 150 gram of cacao butter, Stevia, Honey,100 gram dried plums"
                        ]
                    },
                    {
                        title: "New raw cheesecake",
                        post_date: '2000-10-01',
                        photo_url: "photo_01.jpg",
                        tags: ['raw', 'vegan', 'healthy', 'gogreen', 'dessert'],
                        abstract: 'This is super duper new raw cheesecake for Sashechka and for those who don"t eat sugar. Here is the recipe...',
                        article_order: [
                            "This is super duper new raw cheesecake for Sashechka and for those who don't eat sugar. Here " +
                            "is the recipe you are definitely gonna enjoy.",
                            "img:food_salad.jpg",
                            "List:2 cups of cashew nuts, 2 cups of warm water, 150 gram of cacao butter, Stevia, Honey,100 gram dried plums"
                        ]
                    }
                ]).returning("*")
            ]);
        })
        .then((res) => {
            let categories = res[0];
            let recipes = res[1];
            return Promise.all([
                knex('recipes_categories').insert([
                    {
                        category_id: categories[0].id,
                        recipe_id: recipes[0].id
                    },
                    {
                        category_id: categories[1].id,
                        recipe_id: recipes[1].id
                    },
                    {
                        category_id: categories[2].id,
                        recipe_id: recipes[1].id
                    }
                ])
            ]);
        });
};