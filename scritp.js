const characters = [
    {
        id: 0,
        name: "Mario",
        type: "Principal Character",
        img: "./characters/mario/Personagem 19.png",
        text: "Mario is portrayed as an Italian-American plumber who, along with his younger brother Luigi, has to defeat the creatures that have come from the sewers beneath New York."
    },
    {
        id: 1,
        name: "Luigi",
        type: "Mario's bother",
        img: "./characters/luilli/970a7844249679596eb87cc2cd0adf52.png",
        text: "Luigi is Mario's younger brother and is his older brother's iconic sidekick throughout the Mario franchise. He is cowardly and high-strung, with a tendency to always stand behind his brother."
    },
    {
        id: 2,
        name: "Princess Peach",
        type: "kidnapped princess",
        img: "./characters/princesa/144f5c4052bafb0a2526d9f275e9e37d.png",
        text: "is the princess of the Mushroom Kingdom, who first appeared in Super Mario Bros. for the NES. Peach is the damsel in distress in most of the Mario games."
    },
    {
        id: 3,
        name: "Boo",
        type: "A ghost",
        img: "./characters/fantasma/King_Boo_MMWii-e1352994329321.png",
        text: "The Boo have a unique round appearance, short and clumsy hands because they have no fingers and have an evil smile, also being ghosts, in several games they can go through walls."
    },
    {
        id: 4,
        name: "Yoshi",
        type: "Dinosaur",
        img: "./characters/joshi/Personagem14.png",
        text: "Yoshi is a dinosaur. Mario can ride Yoshis and take advantage of their abilities. Each Yoshi has the ability to take a second leap and use his tongue to catch and eat enemies, though some cannot be eaten."
    },
    {
        id: 5,
        name: "Bowser",
        type: "Mario's archenemy",
        img: "./characters/monster/FreeMarioBrosbyPrintNFun(7).png",
        text: "He is Mario's archenemy. He is about the king, he is a huge and the most powerful of the Koopas. His shell is also much larger than regular Koopas and is studded with sharp spikes."
    },
    {
        id: 6,
        name: "Toad",
        type: "A citizen",
        img: "./characters/hongitoBueno/Personagem11.png",
        text: "Toad is depicted as a citizen of the Mushroom Kingdom and is one of Princess Peach's most faithful attendants; constantly working on her behalf."
    },
    {
        id: 7,
        name: "Goomba",
        type: "A common enemy on the game",
        img: "./characters/hongitoMalo/37268f1b4205959ecad7abd9b8f71832.png",
        text: "Goombas are brown or yellow. They are based on real mushrooms called shiitake. They have bushy eyebrows, two feet, and a pair of fangs coming out of their lower jaw."
    },
]

// items to change Characters

const img = document.getElementById("character-img");
const nombre = document.getElementById("character");
const type = document.getElementById("type");
const info = document.getElementById("info");

// items when the Character its seleccted 

const card = document.querySelector(".characters-card");
const textContainer = document.querySelector(".text-container");
const imgContainer = document.querySelector(".img-container");
const hidden = document.querySelector(".hidden");
const tittle = document.querySelector(".tittle");

//btns

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
const selectBtn = document.querySelector(".select-btn");
const returnBtn = document.querySelector(".return-btn");


// set starting item

let currentItem = 0;

// loud initial item

window.addEventListener("DOMContentLoaded", function () {
    showCharacter();
});

// show person based on item

const showCharacter = () => {
    const item = characters[currentItem];
    img.src = item.img;
    nombre.innerText = item.name;
    type.innerText = item.type;
    info.innerText = item.text;
}

//show next person

nextBtn.addEventListener("click", function(){
    currentItem++;
    // si el currentItem es mayor al ULTIMO item de characteres 
    if (currentItem > characters.length -1) {
        currentItem = 0;
    }
    showCharacter();
})

//show prev person

prevBtn.addEventListener("click", function(){
    currentItem--;
    // si el currentItem es menor al ULTIMO item de characteres 
    if (currentItem < 0) {
        currentItem = characters.length - 1;
    }
    showCharacter();
})

// show ramdom person

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * characters.length);
    showCharacter();
})

// show character selected 

selectBtn.addEventListener("click", function(){
    currentItem;
    tittle.childNodes[1].innerHTML = "This Is Your Character!!";    

    if (window.innerWidth < 800 ) {
        console.log("hola");
        tittle.childNodes[1].style.marginTop = "30%";
        card.style.padding = "1% 1%";
        hidden.style.display = "flex";
        card.style.flexDirection = "column"; 
        textContainer.style.display = "none"; 
        imgContainer.style.width = "fit-content"; 
    }
    else {
        tittle.childNodes[1].style.marginTop = "1%";
         hidden.style.display = "flex";
        card.style.padding = "5% 30%";
        card.style.flexDirection = "column"; 
        textContainer.style.display = "none"; 
        imgContainer.style.width = "fit-content";  
    }
   
});

// return to last page

returnBtn.addEventListener("click", function(){
    currentItem;

    tittle.childNodes[1].innerHTML = "choose your character"; 

    if (window.innerWidth < 800 ) {
        tittle.childNodes[1].style.marginTop = "0%";
        hidden.style.display = "none";
        card.style.padding = "3% 1%";
        card.style.flexDirection = "columm"; 
        textContainer.style.display = "flex"; 
        imgContainer.style.width = "100%";  
    } else {
        tittle.childNodes[1].style.marginTop = "1%";
        hidden.style.display = "none";
        card.style.padding = "3% 1%";
        card.style.flexDirection = "row"; 
        textContainer.style.display = "flex"; 
        imgContainer.style.width = "50%";  
    }
    
    console.log(currentItem);
});