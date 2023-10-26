document.addEventListener("DOMContentLoaded", function() {
    // Define an array of quotes and authors
    const quotes = [
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
            author: "Martin Luther King Jr."
        },
        {
            text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill"
        },
        {
            text: "Life is really simple, but we insist on making it complicated.",
            author: "Confucius"
        },
        {
            text: "The only thing necessary for the triumph of evil is for good men to do nothing.",
            author: "Edmund Burke"
        }
    ];

    // Function to get a random quote
    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    // Function to display a random quote
    function displayRandomQuote() {
        const { text, author } = getRandomQuote();
        document.getElementById("text").textContent = text;
        document.getElementById("author").textContent = `- ${author}`;
    }

    // Add a click event listener to the "New Quote" button
    document.getElementById("new-quote").addEventListener("click", displayRandomQuote);

    // Display a random quote on page load
    displayRandomQuote();
});
