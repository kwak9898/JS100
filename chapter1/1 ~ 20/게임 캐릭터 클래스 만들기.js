class Wizard {
    constructor(health, mane, armor) {
        this.health = health;
        this.mana = mane;
        this.armor = armor;
    }
    attack() {
        console.log('파이어볼')
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
