
    let button = document.querySelector('button')
    const output = document.querySelector('.output')


    const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Do not watch the clock. Do what it does. Keep going. - Sam Levenson",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs"
];


button.addEventListener('click',function(){
    let random = Math.floor(Math.random()*10)
    console.log(random)

    output.textContent = quotes[random]
})