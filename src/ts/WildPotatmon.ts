import Potatmon from "./Potatmon.js";
import {Player} from "./Player.js";

export default class WildPotatmon extends Potatmon {
    constructor() {

    }

    catch(player: Player) {
        if (player.bench.length > 4) {
            player.addPC(this);
        } else {
            player.bench.append(this);
        }
    }
}
