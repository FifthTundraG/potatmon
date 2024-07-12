console.log("turn based game yay! totally not pokemon but without the adventure part")

function clone<T>(instance: T): T {
    const copy = new (instance.constructor as { new (): T })();
    Object.assign(copy, instance);
    return copy;
}

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

class GUI {
	static guis: Record<string, HTMLDivElement> = {
		battle: document.getElementById("GUI_Attack") as HTMLDivElement
	}

	static currentGui: HTMLDivElement = GUI.guis.battle;

	static switchGui(gui: HTMLDivElement) {
		GUI.currentGui.style.display = "none";
		GUI.currentGui = gui;
		gui.style.display = "block";
	}
}

class PotatmonData {
	static readonly POTATMONS = [
		new Potatmon("Watermander", 10, 4, 1),
		new Potatmon("Arsosaur", 8, 6, 1),
		new Potatmon("Grasle", 12, 3, 2),
		new Potatmon("Ratatatatata", 12, 4, 1)
	]

	static getPotatmonFromName(name: string): Potatmon {
		for (let i in PotatmonData.POTATMONS) {
			if (PotatmonData.POTATMONS[i].name.toLowerCase() === name.toLowerCase()) {
				return clone(PotatmonData.POTATMONS[i]);
			}
		}
		throw new Error("Unable to find potatmon from name: "+name);
	}

	static getPotatmonById(id: number): Potatmon {
		return PotatmonData.POTATMONS[id];
		// todo: add checks for if it exists or not
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

let bench: Potatmon[] = [PotatmonData.getPotatmonFromName("watermander"), PotatmonData.getPotatmonFromName("grasle"), PotatmonData.getPotatmonFromName("arsosaur")]

const player = new Player(bench);

//enemy stuffs ------------------------------------------------------------------------------------------------------------------------------------------------
const enemy = new Enemy("BOB.", [PotatmonData.getPotatmonFromName("ratatatatata"), PotatmonData.getPotatmonFromName("grasle")]);

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

GUI.switchGui(GUI.guis.battle);
