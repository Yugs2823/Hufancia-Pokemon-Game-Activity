// Pokemon Game
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

function Trainer(name, age) {
    this.name = name;
    this.age = age;
    this.pokemonList = [];
}

Trainer.prototype.addPokemon = function(pokemon) {
    this.pokemonList.push(pokemon);
    console.log(`${pokemon.name} added to ${this.name}'s team!`);
};

let mewtwo = new Pokemon('Mewtwo', 3, 100, 60);
let bulbasaur = new Pokemon('Bulbasaur', 5, 100, 40);
let lucario = new Pokemon('Lucario', 4, 100, 55);

let yugi = new Trainer('Yugi', 19);

mewtwo.attackOpponent(bulbasaur);
bulbasaur.attackOpponent(lucario);

yugi.addPokemon(mewtwo);
yugi.addPokemon(bulbasaur);
yugi.addPokemon(lucario);

console.log("");
console.log(`Trainer: ${yugi.name}, Age: ${yugi.age}`);
console.log(`Trainer ${yugi.name}'s Pokemon Team:`);
yugi.pokemonList.forEach(pokemon => {
    console.log(`- ${pokemon.name}, Level: ${pokemon.level}, Health: ${pokemon.health}, Attack: ${pokemon.attack}`);
});
