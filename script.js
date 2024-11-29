// Lista de livros para exibição
const books = [
    { title: "Dom Casmurro", author: "Machado de Assis", image: "https://www.livrariamarconi.com.br/media/catalog/product/d/o/dom_casmurro_9_ef.jpg" },
    { title: "O Primo Basílio", author: "José de Alencar", image: "https://cirandacultural.fbitsstatic.net/img/p/o-primo-basilio-70920/257436.jpg?w=520&h=520&v=no-change&qs=ignore" },
    { title: "O Cortiço", author: "Aluisio Azevedo", image: "https://m.media-amazon.com/images/I/71vC7+LhB6S._AC_UF1000,1000_QL80_.jpg" },
    { title: "Memórias Póstumas de Brás Cubas", author: "Machado de Assis", image: "https://m.media-amazon.com/images/I/71OL9RU2tJL._AC_UF1000,1000_QL80_.jpg" },
    { title: "A Moreninha", author: "Joaquim Manuel de Macedo", image: "https://m.media-amazon.com/images/I/61rqadtSs3S._AC_UF1000,1000_QL80_.jpg" },
    { title: "Iracema", author: "José de Alencar", image: "https://www.lpm.com.br/livros/imagens/iracema_9788525421814_9788525406835_hd.jpg" }
];

// Função para exibir os livros na tela
function displayBooks(filteredBooks) {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";  // Limpa os resultados anteriores

    filteredBooks.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}" />
            <h3>${book.title}</h3>
            <p>Autor: ${book.author}</p>
        `;

        bookList.appendChild(bookCard);
    });
}

// Função de busca
function searchBooks() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchInput));

    displayBooks(filteredBooks);
}

// Exibe todos os livros ao carregar a página
window.onload = () => {
    displayBooks(books);
};
