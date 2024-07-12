export default class Potatmon {
	name: string;
	hp: number;
	maxHealth: number;
	attack: number;
	defense: number;
    constructor(name,hp,attack,defense) {
        this.name = name;
        this.hp = hp;
        this.maxHealth = hp;
        this.attack = attack;
        this.defense = defense;
    }

    attackPotatmon(potatmon: Potatmon) {
    	potatmon.hp -= this.attack/potatmon.defense;
		if (potatmon.hp < 0) {
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
}
