console.log('v.4');

var canvas, stage, bgAni, giftAni;

init();
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
	bgAni.setTransform(264,236.1,1,1,0,0,0,-0.5,0);
	bgAni.alpha = 0;
	stage.addChild(bgAni);
	
	stage.update();
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	
	openingAni();
}
function openingAni() {
	createjs.Tween.get(bgAni)
		.to({ alpha: 1, y: 226 }, 300)
		.call(function() {
			giftAni = new lib.GIFT_mc();
			giftAni.setTransform(97.9,205,1,1,0,0,0,-156.1,0);
			stage.addChild(giftAni);
		});
}


$('.list_item').on('mousedown', function() {
	$(this).addClass('press');
});
$('.list_item').on('mouseup', function() {
  $(this).removeClass('press');
  if ($(this).hasClass('on')) stopAni($(this));
  else startAni($(this));
});
$('.submitbtn').on('click', function() {
	giftAni.gotoAndPlay(73);
	$('.list_item').attr('class', 'list_item');
});
$('.playbtn').on('click', function() {
	giftAni.shouldStop = false;
	giftAni.gotoAndPlay(1);
})

function stopAni(target) {
	target.removeClass('on');
		switch (target.index()) {
      case 0:
        giftAni.gotoAndStop(19);
        break;
      case 1:
        giftAni.gotoAndStop(32);
        break;
      case 2:
        giftAni.gotoAndStop(43);
        break;
      case 3:
        giftAni.gotoAndStop(56);
        break;
      default:
        break;
    }
}
function startAni(target) {
	target.addClass('on');
	switch (target.index()) {
		case 0:
			giftAni.gotoAndPlay(20);
			break;
		case 1:
			giftAni.gotoAndPlay(33);
			break;
		case 2:
			giftAni.gotoAndPlay(44);
			break;
		case 3:
			giftAni.gotoAndPlay(57);
			break;
		default:
			break;
	}
}