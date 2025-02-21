interface Book {
  isbn: string;
  title: string;
  author: string;
}

const books: Book[] = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];

console.log('the book array:', books);
console.log('type of books', typeof books);

const json = JSON.stringify(books);
console.log('stringified json: ', json);
console.log('type of json: ', typeof json);

const student = '{"number": 45, "name": "John McEnroe"}';

console.log('string student typeof: ', typeof student);
const parsedJson = JSON.parse(student);
console.log(parsedJson);
console.log('type of parsedJson:', typeof parsedJson);
