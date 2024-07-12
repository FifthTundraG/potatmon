import Potatmon from "./Potatmon.js";

export default class EventTrigger {
    static events = {
        encounter(enemyName: string) {
            const encounterRibbon = document.createElement("div") as HTMLDivElement;
            encounterRibbon.className = "encounter-ribbon";
            encounterRibbon.innerText = `${enemyName} has appeared!`;
            document.body.appendChild(encounterRibbon);

            setTimeout(() => {
                encounterRibbon.remove();
            }, 1000);
        }
    }

    static triggerEvent(event: (...args) => any, ...args: any) {
        event(args);
    }
}
