const root=document.querySelector("#root");
const StartGames=document.querySelector("#startGames");
let fruitName = [
    {
        id: 1,
        label: "Orange",
        hint: "A round, orange citrus fruit rich in Vitamin C."
    },
    {
        id: 2,
        label: "Banana",
        hint: "A long, yellow fruit that is high in potassium."
    },
    {
        id: 3,
        label: "Kiwi",
        hint: "A small, brown fruit with green flesh and tiny seeds."
    },
    {
        id: 4,
        label: "Apple",
        hint: "A crunchy fruit that comes in red, green, or yellow varieties."
    },
    {
        id: 5,
        label: "Mango",
        hint: "A juicy, tropical fruit with a sweet flavor."
    },
    {
        id: 6,
        label: "Pineapple",
        hint: "A large, spiky fruit with sweet, yellow flesh inside."
    },
    {
        id: 7,
        label: "Grapes",
        hint: "Small, round, and can be eaten fresh or made into wine."
    },
    {
        id: 8,
        label: "Watermelon",
        hint: "A large, green fruit with red flesh and black seeds."
    },
    {
        id: 9,
        label: "Strawberry",
        hint: "A red, heart-shaped berry with tiny seeds on the outside."
    },
    {
        id: 10,
        label: "Blueberry",
        hint: "A small, round, blue fruit often used in desserts."
    },
    {
        id: 11,
        label: "Peach",
        hint: "A soft, fuzzy fruit with a sweet, juicy flavor."
    },
    {
        id: 12,
        label: "Plum",
        hint: "A small, purple or red fruit with a stone inside."
    },
    {
        id: 13,
        label: "Cherry",
        hint: "A small, round, red fruit with a pit."
    },
    {
        id: 14,
        label: "Pomegranate",
        hint: "A red fruit filled with juicy seeds."
    },
    {
        id: 15,
        label: "Papaya",
        hint: "A tropical fruit with orange flesh and black seeds."
    },
    {
        id: 16,
        label: "Avocado",
        hint: "A creamy fruit with a large seed, often used in salads."
    },
    {
        id: 17,
        label: "Fig",
        hint: "A soft, sweet fruit with tiny seeds inside."
    },
    {
        id: 18,
        label: "Lemon",
        hint: "A sour, yellow citrus fruit used for flavoring."
    },
    {
        id: 19,
        label: "Lime",
        hint: "A small, green citrus fruit with a sour taste."
    },
    {
        id: 20,
        label: "Guava",
        hint: "A tropical fruit with pink or white flesh and seeds."
    },
    {
        id: 21,
        label: "Lychee",
        hint: "A small, sweet fruit with a rough, pink shell."
    },
    {
        id: 22,
        label: "Cantaloupe",
        hint: "A melon with orange flesh and a netted rind."
    },
    {
        id: 23,
        label: "Honeydew",
        hint: "A sweet, green-fleshed melon."
    },
    {
        id: 24,
        label: "Raspberry",
        hint: "A small, red or black fruit made of tiny drupelets."
    },
    {
        id: 25,
        label: "Blackberry",
        hint: "A dark, juicy berry with a sweet-tart flavor."
    },
    {
        id: 26,
        label: "Cranberry",
        hint: "A small, tart red berry often used in sauces."
    },
    {
        id: 27,
        label: "Coconut",
        hint: "A large, hard-shelled fruit filled with coconut water and white meat."
    },
    {
        id: 28,
        label: "Passion Fruit",
        hint: "A tropical fruit with a wrinkled skin and tangy seeds."
    },
    {
        id: 29,
        label: "Dragon Fruit",
        hint: "A vibrant fruit with pink skin and white flesh dotted with seeds."
    },
    {
        id: 30,
        label: "Starfruit",
        hint: "A yellow fruit with a star-shaped cross-section."
    },
    {
        id: 31,
        label: "Apricot",
        hint: "A small, orange fruit with a smooth skin and a pit."
    },
    {
        id: 32,
        label: "Grapefruit",
        hint: "A large, tangy citrus fruit with pink or red flesh."
    },
    {
        id: 33,
        label: "Persimmon",
        hint: "An orange, sweet fruit that becomes soft when ripe."
    },
    {
        id: 34,
        label: "Nectarine",
        hint: "A smooth-skinned fruit similar to a peach."
    },
    {
        id: 35,
        label: "Mulberry",
        hint: "A long, dark berry with a sweet flavor."
    }
];
function randomArray(value,way='array') {
    if (way==='string'){
        let orgName=value.join('').toLowerCase();
        let newName=value.sort(() => Math.random() - 0.5).join('').toLowerCase()
        if (newName===orgName){
            return randomArray(value,'string');
        }
        return newName
    }
    return value.sort(() => Math.random() - 0.5)
}





StartGames.onclick=newGame
fruitName=randomArray(fruitName)

    function newGame() {

    let i=0

    let score={
        success:0,
        wrong:0
    }



    StartGames.remove()
    let gamesTable = document.createElement("div");
    gamesTable.setAttribute("class", "gamesTable");
    root.appendChild(gamesTable);


    let myCard = document.createElement("div");
    myCard.setAttribute("class", "card bg-light text-dark text-center");
    myCard.innerHTML = `<h4 class="card-title">Word Scramble</h4>`
    let new_scrambled_letters=document.createElement("div")
    new_scrambled_letters.setAttribute('class', 'scrambled-letters')
    new_scrambled_letters.innerHTML=randomArray(fruitName[i].label.split(""),'string')

    myCard.appendChild(new_scrambled_letters)

    let new_hint=document.createElement("div")
    new_hint.innerHTML=fruitName[i].hint
    myCard.appendChild(new_hint)

    let new_form_group_dv=document.createElement("div")
    new_form_group_dv.setAttribute('class', 'form-group')
    let newInput=document.createElement("input")
    newInput.setAttribute('type', 'text')
    newInput.setAttribute('placeholder', 'Enter a valid word')
    newInput.setAttribute('class', 'form-control')
    new_form_group_dv.appendChild(newInput)
    myCard.appendChild(new_form_group_dv)

    let new_btn_group_dv=document.createElement("div")
    new_btn_group_dv.setAttribute('class', 'd-flex justify-content-between')
    // ____refresh button start_______
    let new_refresh_btn = document.createElement("button")
    new_refresh_btn.setAttribute('class', 'btn btn-secondary btn-custom')
    new_refresh_btn.innerHTML=`refresh Word`
    new_btn_group_dv.appendChild(new_refresh_btn)
    // ____refresh button end_______
    // ____refresh button start_______
    let new_check_btn = document.createElement("button")
    new_check_btn.setAttribute('class', 'btn btn-secondary btn-custom')
    new_check_btn.innerHTML=`refresh Word`
    new_btn_group_dv.appendChild(new_check_btn)
    // ____refresh button end_______
    myCard.appendChild(new_btn_group_dv)
    gamesTable.appendChild(myCard)

    new_refresh_btn.onclick=function (){
        console.log()
    }

 new_check_btn.onclick=function (){
       if (fruitName[i].label.toLowerCase()===newInput.value.toLowerCase()){
score.success++
       }else {
           score.wrong++
       }
     newInput.value=''
       i++
     if (i===5){
         console.log("game over")
         GameOver(score)
         return

     }
     newWord()

    }
    function newWord(){
        new_scrambled_letters.innerHTML=randomArray(fruitName[i].label.split(""),'string')
        new_hint.innerHTML=fruitName[i].hint

    }

}


function GameOver(score){
    let gamesTable=document.querySelector(".gamesTable");
    let finishGame=document.createElement('div');
    finishGame.setAttribute('class', 'finishGame');
    gamesTable.innerHTML=``
    gamesTable.appendChild(finishGame)



    if (score.success>score.wrong){

        finishGame.innerHTML=`
   <ul>
   <li>Сorrect Answer is ${score.success}</li>
   <li>Wrong Answer is ${score.wrong}</li>
   <span>You Win</span>
</ul>
    `

    }else if (score.wrong>score.success){

        finishGame.innerHTML=`
   <ul>
   <li>Сorrect Answer is ${score.success}</li>
   <li>Wrong Answer is ${score.wrong}</li>
   <span>You Lost</span>
</ul>
    `

    }else {
        finishGame.innerHTML=`
   <ul>
   <li>Сorrect Answer is ${score.success}</li>
   <li>Wrong Answer is ${score.wrong}</li>
   <span>Nobody's</span>
</ul>
    `
    }

    let newStart=document.createElement("button")
    newStart.innerHTML=`Start Game`
    gamesTable.appendChild(newStart)

    newStart.onclick=function (){
        gamesTable.remove()
        newGame()
    }
}

