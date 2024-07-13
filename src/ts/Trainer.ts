import Potatmon from "./Potatmon.js";

export default class Trainer {
	name: string;
	bench: Potatmon[];
	activePotatmon: Potatmon;
	constructor(name: string, bench: Potatmon[]) {
		this.name = name;
		this.bench = bench;

		this.activePotatmon = bench[0];
	}
}

export class Player extends Trainer {
	pc: Potatmon[];
	constructor(bench: Potatmon[]) {
		super("You", bench);

		this.pc = [];
	}

	addPC(potatmon: Potatmon) {
		this.pc.push(potatmon);
	}
	removePC() {

	}
}

export class Enemy extends Trainer {
	constructor(name: string, bench: Potatmon[]) {
		super(name, bench);
	}
}
