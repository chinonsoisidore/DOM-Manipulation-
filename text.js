let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"The best way to find yourself is 
        to lose yourself in the service of others."`,    
        person: `Mahatma Gandhi`
    },
    {
        quote: `"If you want to live a happy life, tie it
         to a goal, not to people or things."`,    
        person: `Albert Eistein`
    },
    {
        quote: `"At his best, man is the noblest of all
        all animals; seperated from law and justice he 
        is the worst."`,    
        person: `Aristoltle`
    },
    {
        quote: `"Your time is limited, so dont waste it
        living someone else's life."`,    
        person: `Steve Jobs`
    },
    {
        quote: `"Tell me and I forget. Teach me and I 
        remember. Involve me and I learn."`,    
        person: `Benjamin Franklin`
    },
    {
        quote: `"You never know how close you are to 
        completing your goal. Keep going. Keep trying."`,    
        person: `Avina Celeste`
    },
    {
        quote: `"Seize the day...by the throat!"`,    
        person: `Courage Wolf`
    },
    {
        quote: `"Clinging onto the past won't 
        make you move into your future fast."`,    
        person: `Constance Friday`
    },
    {
        quote: `"The greatest skill is the ability to persevere."`,    
        person: `Avina Celeste`
    },
    {
        quote: `"Instead of worrying about what you cannot control, 
        shift your energy to what you can create."`,    
        person: `Roy Benette`
    },
    {
        quote: `"The universe is made up of stories, not atoms."`,    
        person: `Muriel Rukeyser`
    }
    
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

