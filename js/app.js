console.log('v.1');

var canvas, stage, bgAni, giftAni;

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
	stage = new createjs.Stage(canvas);

	bgAni = new lib.BG_mc();
	bgAni.setTransform(264,226.1,1,1,0,0,0,-0.5,0);
	stage.addChild(bgAni);

	giftAni = new lib.GIFT_mc();
	giftAni.setTransform(97.9,205,1,1,0,0,0,-156.1,0);
	stage.addChild(giftAni);
	
	stage.update();
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}

init();


$('.list_item').on('mousedown', function() {
	$(this).addClass('press');
});

$('.list_item').on('mouseup', function() {
  $(this).removeClass('press');
  if ($(this).hasClass('on')) $(this).removeClass('on');
  else {
    $(this).addClass('on');
    switch ($(this).index()) {
      case 0:
        giftAni.gotoAndPlay(32);
        break;
      case 1:
        giftAni.gotoAndPlay(43);
        break;
      case 2:
        giftAni.gotoAndPlay(56);
        break;
      case 3:
        giftAni.gotoAndPlay(72);
        break;
      default:
        break;
    }
  }
});