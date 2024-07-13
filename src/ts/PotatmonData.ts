import Potatmon from "./Potatmon.js";
import {clone} from "./helper.js";

export default class PotatmonData {
	static readonly POTATMONS = [
		new Potatmon("Watermander", 10, 4, 1),
		new Potatmon("Arsosaur", 8, 6, 1),
		new Potatmon("Grasle", 12, 3, 2),
		new Potatmon("Ratatatatata", 12, 4, 1),
		new Potatmon("Eekhens", 16, 5, 1),
		new Potatmon("Nidododotortian", 10, 4, 2),
		new Potatmon("Oddalot", 10, 8, 1),
		new Potatmon("Magnetlight", 18, 3, 2),
		new Potatmon("Fogly", 9, 8, 1)
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
