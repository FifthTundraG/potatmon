export default class Potatmon {
	name: string;
	hp: number;
	maxHp: number;
	attack: number;
	defense: number;
	level: number;
	// the amount of xp required to advance to the next level
	xpRequired: number;
	// the amount of progress in the current level
	currentXp: number;
	// og values for HP and such
	originalHp: number;
	originalDefense: number;
	originalAttack: number;
    constructor(name: string, hp: number, attack: number, defense: number) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.maxHp = hp;
        this.level = 1;
        this.xpRequired = 10; //!
        this.currentXp = 0;
        this.originalHp = hp;
        this.originalDefense = defense;
        this.originalAttack = attack;
    }

    setLevel(level: number) {
		// additional logic will be here
		this.level = level;

		return this;
    }

    attackPotatmon(potatmon: Potatmon) {
    	potatmon.hp -= this.attack/potatmon.defense;
		if (potatmon.hp <= 0) {
			this.gainExperience(3);
			potatmon.hp = 0;
		}
		document.getElementById("enemyHealth").innerText = potatmon.hp as unknown as string;
//     	if (potatmon.hp*potatmon.defense > this.attack) {
//
//         	eactivePotatmon.hp -= activePotatmon.attack/eactivePotatmon.defense;
//
//         	document.getElementById("ehp").innerText = "enemy health: " + eactivePotatmon.hp
//
//         	activePotatmon.hp -= eactivePotatmon.attack/activePotatmon.defense;
//
//         	document.getElementById("hp").innerText = "Health: " + activePotatmon.hp
//
//
//         	if (activePotatmon.hp*activePotatmon.defense <= 0) {
//             	console.log("death");
//             	activePotatmon.hp = 0;
//             	activePotatmon.attack = 0;
//             	document.getElementById("hp").innerText = "Health: " + activePotatmon.hp
//             	document.getElementById("win").innerText = "You Lost!"
//         	}
//     	} else {
//         	eactivePotatmon.hp = 0;
//         	document.getElementById("ehp").innerText = "enemy health: " + eactivePotatmon.hp
//         	document.getElementById("win").innerText = "You Won!"
//
//     	}
    }

	gainExperience(exp: number) {
		this.currentXp += exp;
		this.calculateExperience();
	}

    calculateExperience() {
		if (this.currentXp >= this.xpRequired) {
			this.currentXp = 0;
			this.level += 1;
			this.xpRequired = this.xpRequired*1.1;
			this.maxHp += Math.round(this.level*this.maxHp*0.1);
			this.attack += Math.round(this.level*this.attack*0.1);
		}
    }
}
