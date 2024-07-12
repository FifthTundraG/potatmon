console.log("turn based game yay! totally not pokemon but without the adventure part")

//potatomanses ------------------------------------------------------------------------------------------------------------------------------------------------

class Potatmon {
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
    	document.getElementById("enemyHealth").innerText = potatmon.hp as unknown as string;
		if (potatmon.hp < 0) {
			potatmon.hp = 0;
		}
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

class Trainer {
	name: string;
	bench: Potatmon[];
	activePotatmon: Potatmon;
	constructor(name: string, bench: Potatmon[]) {
		this.name = name;
		this.bench = bench;
		
		this.activePotatmon = bench[0];
	}
}

class Player extends Trainer {
	constructor(bench: Potatmon[]) {
		super("You", bench);
	}
}

class Enemy extends Trainer {
	constructor(name: string, bench: Potatmon[]) {
		super(name, bench);
	}
}

function reloadActivePotatmonInfo(): void {
	// our potatmon
	document.getElementById("playerHealth").innerText = player.activePotatmon.hp as unknown as string;
	document.getElementById("playerActivePotatmon").innerText = player.activePotatmon.name;
	
	// enemy potatmon
	document.getElementById("enemyHealth").innerText = enemy.activePotatmon.hp as unknown as string;
	document.getElementById("enemyActivePotatmon").innerText = enemy.activePotatmon.name;
}

const watermander = new Potatmon("Watermander", 10, 4, 1)
const arsosaur = new Potatmon("Arsosaur", 8, 6, 1)
const grasle = new Potatmon("Grasle", 12, 3, 2)
const ratatatatata = new Potatmon("Ratatatatata", 12, 4, 1)

let bench: Potatmon[] = [watermander, grasle, arsosaur]

const player = new Player(bench);

//enemy stuffs ------------------------------------------------------------------------------------------------------------------------------------------------
const enemy = new Enemy("BOB.", [ratatatatata, grasle]);

reloadActivePotatmonInfo();

document.getElementById("test").addEventListener("click", () => {
    console.log(player.activePotatmon);
});
//attack ----------------------------------------------------------------------------------------------------------------------------------------------------------

document.getElementById("attack").addEventListener("click", () => {
	player.activePotatmon.attackPotatmon(enemy.activePotatmon);
//     if (eactivePotatmon.hp*eactivePotatmon.defense > activePotatmon.attack) {
//
//         eactivePotatmon.hp -= activePotatmon.attack/eactivePotatmon.defense;
//
//         document.getElementById("ehp").innerText = "enemy health: " + eactivePotatmon.hp
//
//         activePotatmon.hp -= eactivePotatmon.attack/activePotatmon.defense;
//
//         document.getElementById("hp").innerText = "Health: " + activePotatmon.hp
//
//
//         if (activePotatmon.hp*activePotatmon.defense <= 0) {
//             console.log("death");
//             activePotatmon.hp = 0;
//             activePotatmon.attack = 0;
//             document.getElementById("hp").innerText = "Health: " + activePotatmon.hp
//             document.getElementById("win").innerText = "You Lost!"
//         }
//     } else {
//         eactivePotatmon.hp = 0;
//         document.getElementById("ehp").innerText = "enemy health: " + eactivePotatmon.hp
//         document.getElementById("win").innerText = "You Won!"
//
//     }
}) 

//bench buttons ------------------------------------------------------------------------------------------------------------------------------------------------
function updateBenchButtons() {
	document.getElementById("b1").innerText = `${bench[0].name}'s health: ${bench[0].hp}, attack: ${bench[0].attack}, defense: ${bench[0].defense}`;
	document.getElementById("b2").innerText = `${bench[1].name}'s health: ${bench[1].hp}, attack: ${bench[1].attack}, defense: ${bench[1].defense}`;
	document.getElementById("b3").innerText = `${bench[2].name}'s health: ${bench[2].hp}, attack: ${bench[2].attack}, defense: ${bench[2].defense}`;
}

document.getElementById("b1").addEventListener("click", () => {
    player.activePotatmon = bench[0];
    reloadActivePotatmonInfo();
});

document.getElementById("b2").addEventListener("click", () => {
    player.activePotatmon = bench[1];
    reloadActivePotatmonInfo();
});

document.getElementById("b3").addEventListener("click", () => {
    player.activePotatmon = bench[2];
    reloadActivePotatmonInfo();
});
updateBenchButtons();
