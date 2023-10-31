import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './src/database/app.db',
  },
  migrations: {
    extension: 'ts',
    directory: './src/database/migrations',
  },
  useNullAsDefault: true,
}

export const knex = setupKnex(config)
