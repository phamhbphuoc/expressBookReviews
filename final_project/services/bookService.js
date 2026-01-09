const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

const bookService = {
    getAllBooks: async () => {
        try {
            const response = await api.get('/');
            return response.data;
        } catch {
            console.error("Error fetching book:", error.message);
            throw error;
        }
    },
    getBookByISBN: async (isbn) => {
        try {
            const response = await api.get(`/isbn/${isbn}`);
            return response.data;
        } catch {
            console.error("Error fetching book:", error.message);
            throw error;
        }
    },
    getBooksByAuthor: async (author) => {
        try {
            const response = await api.get(`/author/${author}`);
            return response.data;
        } catch {
            console.error("Error fetching book:", error.message);
            throw error;
        }
    },
    getBooksByTitle: async (title) => {
        try {
            const response = await api.get(`/title/${title}`);
            return response.data;
        } catch {
            console.error("Error fetching book:", error.message);
            throw error;
        }
    },
} 

module.exports = bookService;