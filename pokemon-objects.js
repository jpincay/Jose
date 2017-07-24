/*function Pokemon (realName, move, type, HP) {
    this.name = realName;
    this.move = move;
    this.type = type;
    this.HP = HP;
};

var Arceus = new Pokemon("Arceus", "Hyper Beam", "Normal", 100);

var Mewtwo = new Pokemon("Mewtwo", "Physic", "Normal", 100);

var Charizard = new Pokemon("Charizard")

console.log(Arceus);*/

var teamStats = [
    {  
            Name: "Arceus",
            Type: "Normal",
            HP: 444,
            Attack: 372,
            Defense: 372,
            Legendary: true
        },
        {
            Name: "Mewtwo",
            Type: "Psychic",
            HP: 416,
            Attack: 350,
            Defense: 306,
            Legendary: true
        },
        {
            Name: "Mew",
            Type: "Psychic",
            HP: 404,
            Attack: 328,
            Defense: 328,
            Legendary: true
        },
        {
            Name: "Rayquaza",
            Type: "Dragon",
            HP: 414,
            Attack: 438,
            Defense: 306,
            Legendary: true
        },
        {
            Name: "Lugia",
            Type: "Psychic",
            HP:416,
            Attack: 306,
            Defense: 394,
            Legendary: true
        },
        {
            Name: "Charizard",
            Type: "Fire",
            HP: 504,
            Attack: 328,
            Defense: 372,
            Legendary: true
        }
];

function pokemonAttacked() {
    for (i=0; i<6; i++) {
        teamStats[i].Attack = teamStats[i].Attack - 10;
        
 
   }
return teamStats;
}

pokemonAttacked();
