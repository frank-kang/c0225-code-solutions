# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  To add postgresql support to express.
- How do you tell `pg` which database to connect to?
  Create a variable and instantiate a new pg object, use the Pool method and pass it a connectionstring property set to the location of the db.
- How do you send SQL to PostgreSQL from your Express server?
  create a variable, pass it a query string to variable.query method.
- How do you access the rows that get returned from the SQL query?
  results.rows[0]
- What must you always remember to put around your asynchronous route handlers? Why?
  try catch
- What is a SQL Injection Attack and how do you avoid it in `pg`?

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
