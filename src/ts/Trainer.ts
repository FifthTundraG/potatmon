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
	constructor(bench: Potatmon[]) {
		super("You", bench);
	}
}

export class Enemy extends Trainer {
	constructor(name: string, bench: Potatmon[]) {
		super(name, bench);
	}
}
