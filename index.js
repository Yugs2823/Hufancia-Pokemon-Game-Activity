// Pokemon Game
function Pokemon(name, level, health, attack) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.attack = attack;
}

// Attack Method
Pokemon.prototype.attackOpponent = function(target) {
    console.log(`${this.name} attacks ${target.name}!`);
    target.health -= this.attack;
    console.log(`${target.name}'s health reduced to ${target.health}`);
};

// Trainer
let trainer = {
    name: 'Yugi',
    age: 19,
    team: [],

    // Add Pokemon to team
    addPokemon: function(pokemon) {
        this.team.push(pokemon);
        console.log(`${pokemon.name} added to ${this.name}'s team!`);
    }
};

let mewtwo = new Pokemon('Mewtwo', 3, 100, 60);
let bulbasaur = new Pokemon('Bulbasaur', 5, 100, 40);
let lucario = new Pokemon('Lucario', 4, 100, 55);

mewtwo.attackOpponent(bulbasaur);
bulbasaur.attackOpponent(lucario);

trainer.addPokemon(mewtwo);
trainer.addPokemon(bulbasaur);
trainer.addPokemon(lucario);

// Display Information
console.log("");
console.log(`Trainer: ${trainer.name}, Age: ${trainer.age}`);
console.log(`Trainer ${trainer.name}'s Pokemon Team:`);
trainer.team.forEach(pokemon => {
    console.log(`- ${pokemon.name}, Level: ${pokemon.level}, Health: ${pokemon.health}, Attack: ${pokemon.attack}`);
});
