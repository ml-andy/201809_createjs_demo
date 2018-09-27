var canvas, stage, exportRoot;

function init() {
	canvas = document.getElementById("giftAni");
	images = images||{};
	ss = ss||{};

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadFile({src:"images/gift_atlas_.json", type:"spritesheet", id:"gift_atlas_"}, true);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
	var queue = evt.target;
	ss["gift_atlas_"] = queue.getResult("gift_atlas_");
	exportRoot = new lib.BG_mc();
	exportRoot.setTransform(264,226.1,1,1,0,0,0,-0.5,0);

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}

init();