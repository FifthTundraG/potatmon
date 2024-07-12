import Potatmon from "./Potatmon.js";
import {Player, Enemy} from "./Trainer.js";
import PotatmonData from "./PotatmonData.js";
import GUI from "./GUI.js";
import EventTrigger from "./EventTrigger.js";

console.log("turn based game yay! totally not pokemon but without the adventure part");

function reloadActivePotatmonInfo(): void {
	// our potatmon
	document.getElementById("playerHealth").innerText = player.activePotatmon.hp as unknown as string;
	document.getElementById("playerActivePotatmon").innerText = player.activePotatmon.name;
	
	// enemy potatmon
	document.getElementById("enemyHealth").innerText = enemy.activePotatmon.hp as unknown as string;
	document.getElementById("enemyActivePotatmon").innerText = enemy.activePotatmon.name;
}

let bench: Potatmon[] = [PotatmonData.getPotatmonFromName("watermander"), PotatmonData.getPotatmonFromName("grasle"), PotatmonData.getPotatmonFromName("arsosaur")]

const player: Player = new Player(bench);

//enemy stuffs ------------------------------------------------------------------------------------------------------------------------------------------------
const enemy: Enemy = new Enemy("BOB.", [PotatmonData.getPotatmonFromName("ratatatatata"), PotatmonData.getPotatmonFromName("grasle")]);

reloadActivePotatmonInfo();

document.getElementById("test").addEventListener("click", () => {
//     console.log(player.activePotatmon);
	EventTrigger.triggerEvent(EventTrigger.events.encounter,enemy.name);
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
