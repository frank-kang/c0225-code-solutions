import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number(gradeId)) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }
    const sql = `
      select * from "grades"
      where "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `gradeId ${gradeId} not found`);
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `select * from "grades";`;
    const result = await db.query(sql);
    const grades = result.rows;
    if (!grades) throw new ClientError(400, 'requested data does not exist');
    res.status(200).json(grades);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (name === undefined) {
      throw new ClientError(400, 'name was not provided');
    }
    if (course === undefined) {
      throw new ClientError(400, 'course was not provided');
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, 'score must be between 0 and 100');
    }
    if (typeof score !== 'number') {
      throw new ClientError(
        400,
        'score must be a positive integer between 0 and 100'
      );
    }
    const sql = `
                insert into "grades" ("name", "course", "score")
                values ($1, $2, $3)
                returning *;
                `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    const { gradeId } = req.params;
    if (name === undefined) {
      throw new ClientError(400, 'name was not provided');
    }
    if (course === undefined) {
      throw new ClientError(400, 'course was not provided');
    }
    if (score === undefined) {
      throw new ClientError(400, 'score was not provided');
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, 'score must be between 0 and 100');
    }
    if (typeof score !== 'number') {
      throw new ClientError(
        400,
        'score must be a positive integer between 0 and 100'
      );
    }
    if (!Number(gradeId)) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }
    const sql = `update "grades"
                set "name" = $1, "course"=$2, "score"=$3
                where "gradeId"=$4
                returning *;`;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const newGrade = result.rows[0];
    if (!newGrade) {
      throw new ClientError(404, `gradeId: ${gradeId} not found`);
    }
    res.status(200).json(newGrade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number(gradeId)) {
      throw new ClientError(400, 'gradeId needs to be a positive integer');
    }
    const sql = `delete from "grades"
                where "gradeId" = $1
                returning *;`;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const deletedGrade = result.rows[0];
    if (!deletedGrade) {
      throw new ClientError(404, `gradeId ${gradeId} not found`);
    }
    res.status(204).json(deletedGrade);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
