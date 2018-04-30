/**
 * Created by dariabondarchuk on 4/22/18.
 */
module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            database: 'foodblog_dev'
        },
        migrations: {
            directory: __dirname + '/migrations'
        },
        seeds: {
            directory: __dirname + '/seeds/development'
        }
    }
};