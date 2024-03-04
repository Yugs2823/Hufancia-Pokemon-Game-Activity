// Pokemon Game
let myPokemon = {
    name: 'Mewtwo',
    level: 3,
    health: 100,
    attack: 50,
    tackle: function() {
        console.log('The pokemon tackle the target pokemon');
        console.log("targetPokemon");
    }
};

let trainer = {
    name: 'Ash',
    age: 25,
    pokemonList: [],

    addPokemon: function(pokemon) {
        this.pokemonList.push(pokemon);
        console.log(`${pokemon.name} added to ${this.name}'s team!`);
    }
};

function Pokemon(name, level, health, attack) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.attack = attack;
}

Pokemon.prototype.attackOpponent = function(opponent) {
    console.log(`${this.name} attacks ${opponent.name}!`);
    opponent.health -= this.attack; 
    console.log(`${opponent.name}'s health reduced to ${opponent.health}`);
};

let mewtwo = new Pokemon('Mewtwo', 3, 100, 60);
let bulbasaur = new Pokemon('Bulbasaur', 5, 100, 40);
let lucario = new Pokemon('Lucario', 4, 100, 55);

mewtwo.attackOpponent(bulbasaur);
bulbasaur.attackOpponent(lucario);

console.log(`Trainer: ${trainer.name}, Age: ${trainer.age}`);

console.log(`Trainer Name (Dot Notation): ${trainer.name}`);
console.log(`Trainer Age (Bracket Notation): ${trainer['age']}`);

trainer.addPokemon(mewtwo);
trainer.addPokemon(bulbasaur);
trainer.addPokemon(lucario);
