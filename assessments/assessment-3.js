// 1 //

function transformBooks(library) {
    const result = [];

    library.map((genreBooks) => {
        let totalRating = 0;
        let maxRating = 0;
        let topBookTitle = "";

        genreBooks.map((book) => {
            totalRating += book.rating;

            if (book.rating > maxRating) {
                maxRating = book.rating;
                topBookTitle = book.title;
            }
        });

        const averageRating = totalRating / genreBooks.length;
        const roundedAverageRating = Math.round(averageRating * 100) / 100;

        result.push({
            genre: genreBooks[0].genre,
            averageRating: roundedAverageRating,
            topBook: topBookTitle
        });
    });

    return result;
}

const library = [
    [
        {
            title: "Harry Potter",
            author: "J.K. Rowling",
            genre: "Fantasy",
            rating: 4.5
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            rating: 4.2
        },
        {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            rating: 4.3
        }
    ],
    [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: "Fiction",
            rating: 4.8
        },
        {
            title: "1984",
            author: "George Orwell",
            genre: "Fiction",
            rating: 4.0
        },
        {
            title: "Brave New World",
            author: "Aldous Huxley",
            genre: "Fiction",
            rating: 4.1
        }
    ],
    [
        {
            title: "A Brief History of Time",
            author: "Stephen Hawking",
            genre: "Science",
            rating: 4.7
        },
        {
            title: "The Selfish Gene",
            author: "Richard Dawkins",
            genre: "Science",
            rating: 4.4
        }
    ]
];

const transformedLibrary = transformBooks(library);
console.log(transformedLibrary);

// 2 //

function filterBooks(books, genreFilter, ratingThreshold, yearRange) {
    const filteredBooks = books.filter((book) => {
        const hasCorrectGenre = book.genre === genreFilter;

        const hasGoodRating = book.rating >= ratingThreshold;
        const isInRange =
            book.publishedYear >= yearRange[0] &&
            book.publishedYear <= yearRange[1];
    });
}

// 3 //

function createInventorySystem() {
    const items = [];

    return {
        addItem(item) {
            items.push(item);
        },

        removeItem(item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
            }
        },

        getItems() {
            return items.slice();
        }
    };
}

const inventorySystem = createInventorySystem();

inventorySystem.addItem("Apple");
inventorySystem.addItem("Banana");
const items = inventorySystem.getItems();

console.log("Items:", items);

inventorySystem.removeItem("Apple");
const updatedItems = inventorySystem.getItems();

console.log("Updated Items:", updatedItems);

// 4 //

function checkWinner(board) {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningCombos.length; i++) {
        const combo = winningCombos[i];
        const [a, b, c] = combo;

        if (board[a] === board[b] && board[a] === board[c] && board[a] !== "") {
            return board[a];
        }
    }

    return null;
}
