export default class GUI {
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
