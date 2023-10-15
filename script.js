const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
const book = getBook(2); // &&&&&&& change book ID here to 1 or 2 to test &&&&&
book;

// const title = book.title;
// title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

// const newGenres = [...genres, "epic fantasy"];
// newGenres;

const newGenres = ["epic fantasy", ...genres];
newGenres;

const updatedBook = {
  ...book,
  // adding a new property:
  moviePublicationDate: "2001-12-19",
  // overwriting an existing property. Whatever comes last will be in effect, so the ...book
  // has to be first, before this next line, to make the next line change the number of pages:
  pages: 1210,
};
updatedBook;

// template literals. Any JavaScript expression can be inside the curly braces
const summary = `${title}, a ${pages}-pages long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}.`;
summary;

// ternaries, instead of if / else expressions. If the condition (before the ?) is true,
//    result is the first expression (between ? and : ) else, second expression (after the :)
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;

console.log(`The book has ${pagesRange} pages`);

const summary2 = `${title}, a ${pages}-long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary2;

// This split prints only the year in the publication date, which is 1954-07-29
// ${publicationDate.split("-")[0]}

// [0] means take the first element from the string. Putting [1] instead results
//      in it printing 07 instead of 1954.

// arrow functions

// a basic function declaration:
// function getYear(str) {
//   return str.split("-")[0];
// }

// console.log(getYear(publicationDate));

// The same function as above, written as an arrow function instead:
(str) => str.split("-")[0];

// This is a function expression. The () around str allow for multiple parameters.
const getYear = (str) => str.split("-")[0];

// short circuiting and logical operators
console.log(true && "Some string"); // Some string
console.log(false && "Some string"); // false. The operator does not even look at the second part

// falsy values: 0, '', null, undefined
console.log("lisa" && "Some string"); // value is "Some string"
console.log(0 && "Some string"); // value is 0

console.log(true || "Some string"); // value is true
console.log(false || "Some string"); // value is "Some string"

// nullish coalescing
console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong; // results in "no data" if there are 0 reviews, which is incorrect

// Use this instead:
const count = book.reviews.librarything.reviewsCount ?? "no data";
count; // now, this is correctly 0 if there are 0 reviews

function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything.reviewsCount;
}

getTotalReviewCount(book);
