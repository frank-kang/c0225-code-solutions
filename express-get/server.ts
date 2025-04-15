import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

app.get('/api/countries', async (req, res, next) => {
  try {
    const sql = `
    select "countryId", "countries"."name", count("cityId") as cities
    from "countries"
    join "cities" using ("countryId")
    group by "countryId";
    `;
    const result = await db.query(sql);
    const cities = result.rows;
    res.json(cities);
  } catch (err) {
    next(err);
  }
});

app.get('/api/cities/:cityId', async (req, res, next) => {
  try {
    const { cityId } = req.params;
    if (!Number(cityId)) {
      throw new ClientError(400, 'cityId needs to be a positive Integer!');
    }

    const sql = `
      select "cityId", "countries"."name" as "country", "cities"."name"
      from "countries"
      join "cities" using("countryId")
      where "cityId" = $1;
    `;
    const params = [cityId];
    const result = await db.query(sql, params);
    const city = result.rows[0];
    if (!city) {
      throw new ClientError(404, `cityId: ${cityId} does not exit`);
    }
    res.json(city);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
