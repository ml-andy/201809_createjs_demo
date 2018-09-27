(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.box = function() {
	this.spriteSheet = ss["gift_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.box_front = function() {
	this.spriteSheet = ss["gift_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.box_top = function() {
	this.spriteSheet = ss["gift_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.can = function() {
	this.spriteSheet = ss["gift_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.m_bg = function() {
	this.spriteSheet = ss["gift_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.noodle = function() {
	this.spriteSheet = ss["gift_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.people = function() {
	this.spriteSheet = ss["gift_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.porkFloss = function() {
	this.spriteSheet = ss["gift_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ribbon_front = function() {
	this.spriteSheet = ss["gift_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ribbon_left = function() {
	this.spriteSheet = ss["gift_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.ribbon_right = function() {
	this.spriteSheet = ss["gift_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ribbon_top = function() {
	this.spriteSheet = ss["gift_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.rice = function() {
	this.spriteSheet = ss["gift_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.rice_1 = function() {
	this.initialize();

	// Layer_1
	this.instance = new lib.rice();
	this.instance.setTransform(-60.5,-66.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.5,-66.5,121,133);


(lib.ribbon_top_1 = function() {
	this.initialize();

	// Layer_1
	this.instance = new lib.ribbon_top();
	this.instance.setTransform(-45,-32);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45,-32,90,64);


(lib.ribbon_right_1 = function() {
	this.initialize();

	// Layer_1
	this.instance = new lib.ribbon_right();
	this.instance.setTransform(-43,-50.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43,-50.5,164,95);


(lib.ribbon_left_1 = function() {
	this.initialize();

	// Layer_1
	this.instance = new lib.ribbon_left();
	this.instance.setTransform(-29.5,-55.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.5,-55.5,114,69);


(lib.ribbon_front_1 = function() {
	this.initialize();

	// Layer_1
	this.instance = new lib.ribbon_front();
	this.instance.setTransform(-53.5,-61.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.5,-61.5,107,123);


(lib.porkFloss_1 = function() {
	this.initialize();

	// Layer_1
	this.instance = new lib.porkFloss();
	this.instance.setTransform(-53,-63.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53,-63.5,106,127);


(lib.people_1 = function() {
	this.initialize();

	// Layer_1
	this.instance = new lib.people();
	this.instance.setTransform(-320,-58);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-58,640,116);


(lib.noodle_1 = function() {
	this.initialize();

	// Layer_1
	this.instance = new lib.noodle();
	this.instance.setTransform(-63,-73);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63,-73,126,146);


(lib.m_bg_1 = function() {
	this.initialize();

	// Layer_1
	this.instance = new lib.m_bg();
	this.instance.setTransform(-320,-287.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-287.5,640,575);


(lib.can_1 = function() {
	this.initialize();

	// Layer_1
	this.instance = new lib.can();
	this.instance.setTransform(-56,-84);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-84,112,168);


(lib.box_top_1 = function() {
	this.initialize();

	// Layer_1
	this.instance = new lib.box_top();
	this.instance.setTransform(-161,-82);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-161,-82,306,195);


(lib.box_front_1 = function() {
	this.initialize();

	// Layer_1
	this.instance = new lib.box_front();
	this.instance.setTransform(-161,-67.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-161,-67.5,291,122);


(lib.box_1 = function() {
	this.initialize();

	// Layer_1
	this.instance = new lib.box();
	this.instance.setTransform(-144,-150);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-144,-150,291,272);


(lib.GIFT_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		this.stop();
	}
	this.frame_43 = function() {
		this.stop();
	}
	this.frame_56 = function() {
		this.stop();
	}
	this.frame_72 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(13).call(this.frame_32).wait(11).call(this.frame_43).wait(13).call(this.frame_56).wait(16).call(this.frame_72).wait(135));

	// ribbon_top
	this.instance = new lib.ribbon_top_1();
	this.instance.setTransform(-75,-34.5,0.04,0.04,0,0,0,1.3,1.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1},4).to({regX:0.1,regY:0.1,scaleX:1.1,scaleY:1.1,x:-74.9},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-75},2).wait(13).to({x:-62.8,y:-34.6},0).wait(1).to({x:-60.3},0).wait(1).to({x:-57.4},0).wait(1).to({x:-53.9},0).wait(1).to({x:-49.8},0).wait(1).to({x:-45.1},0).wait(1).to({x:-39.6},0).wait(1).to({x:-33.3,y:-34.7},0).wait(1).to({x:-26.1},0).wait(1).to({x:-17.9},0).wait(1).to({x:-8.5,y:-34.8},0).wait(1).to({x:2},0).wait(1).to({x:13.8,y:-34.9},0).wait(1).to({x:26.9},0).wait(1).to({x:41.5,y:-35},0).wait(1).to({x:57.5,y:-35.1},0).wait(1).to({x:75.1},0).wait(1).to({x:95.9,y:-35.2},0).wait(1).to({x:120.4,y:-35.3},0).wait(1).to({x:148.4,y:-35.4},0).wait(1).to({x:180,y:-35.6},0).wait(1).to({x:214.5,y:-35.7},0).wait(1).to({x:251.4,y:-35.9},0).wait(1).to({x:289.6,y:-36},0).wait(1).to({x:328.2,y:-36.2},0).wait(1).to({x:365.9,y:-36.3},0).wait(1).to({x:402,y:-36.5},0).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_132 = new cjs.Graphics().p("Ar1HbIAAu1IDJAAIAAO1g");
	var mask_graphics_133 = new cjs.Graphics().p("Aj6HbIAAu1IH1AAIAAO1g");
	var mask_graphics_134 = new cjs.Graphics().p("AmQHbIAAu1IMhAAIAAO1g");
	var mask_graphics_135 = new cjs.Graphics().p("AonHbIAAu1IRPAAIAAO1g");
	var mask_graphics_136 = new cjs.Graphics().p("Aq+HbIAAu1IV9AAIAAO1g");
	var mask_graphics_137 = new cjs.Graphics().p("AtUHbIAAu1IapAAIAAO1g");
	var mask_graphics_138 = new cjs.Graphics().p("AvrHbIAAu1IfXAAIAAO1g");
	var mask_graphics_139 = new cjs.Graphics().p("AyBHbIAAu1MAkDAAAIAAO1g");
	var mask_graphics_140 = new cjs.Graphics().p("A0YHbIAAu1MAoxAAAIAAO1g");
	var mask_graphics_141 = new cjs.Graphics().p("A2uHbIAAu1MAtdAAAIAAO1g");
	var mask_graphics_142 = new cjs.Graphics().p("A5FHbIAAu1MAyLAAAIAAO1g");
	var mask_graphics_143 = new cjs.Graphics().p("A7cHbIAAu1MA25AAAIAAO1g");
	var mask_graphics_144 = new cjs.Graphics().p("A9yHbIAAu1MA7lAAAIAAO1g");
	var mask_graphics_145 = new cjs.Graphics().p("EggJAHbIAAu1MBATAAAIAAO1g");
	var mask_graphics_146 = new cjs.Graphics().p("EgigAHbIAAu1MBFBAAAIAAO1g");
	var mask_graphics_147 = new cjs.Graphics().p("Egk2AHbIAAu1MBJtAAAIAAO1g");
	var mask_graphics_148 = new cjs.Graphics().p("EgnNAHbIAAu1MBObAAAIAAO1g");
	var mask_graphics_149 = new cjs.Graphics().p("EgpjAHbIAAu1MBTHAAAIAAO1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(132).to({graphics:mask_graphics_132,x:-75.9,y:-31.1}).wait(1).to({graphics:mask_graphics_133,x:-126.6,y:-31.1}).wait(1).to({graphics:mask_graphics_134,x:-111.5,y:-31.1}).wait(1).to({graphics:mask_graphics_135,x:-96.5,y:-31.1}).wait(1).to({graphics:mask_graphics_136,x:-81.4,y:-31.1}).wait(1).to({graphics:mask_graphics_137,x:-66.3,y:-31.1}).wait(1).to({graphics:mask_graphics_138,x:-51.2,y:-31.1}).wait(1).to({graphics:mask_graphics_139,x:-36.2,y:-31.1}).wait(1).to({graphics:mask_graphics_140,x:-21.1,y:-31.1}).wait(1).to({graphics:mask_graphics_141,x:-6,y:-31.1}).wait(1).to({graphics:mask_graphics_142,x:9.1,y:-31.1}).wait(1).to({graphics:mask_graphics_143,x:24.1,y:-31.1}).wait(1).to({graphics:mask_graphics_144,x:39.2,y:-31.1}).wait(1).to({graphics:mask_graphics_145,x:54.3,y:-31.1}).wait(1).to({graphics:mask_graphics_146,x:69.4,y:-31.1}).wait(1).to({graphics:mask_graphics_147,x:84.4,y:-31.1}).wait(1).to({graphics:mask_graphics_148,x:99.5,y:-31.1}).wait(1).to({graphics:mask_graphics_149,x:114.6,y:-31.1}).wait(58));

	// ribbon_left
	this.instance_1 = new lib.ribbon_left_1();
	this.instance_1.setTransform(-69.9,-29.4,1,1,0,0,0,27.5,-21);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(132).to({_off:false},0).wait(48).to({x:-57.7},0).wait(1).to({x:-55.2},0).wait(1).to({x:-52.2},0).wait(1).to({x:-48.8},0).wait(1).to({x:-44.7,y:-29.5},0).wait(1).to({x:-39.9},0).wait(1).to({x:-34.5},0).wait(1).to({x:-28.2},0).wait(1).to({x:-20.9,y:-29.6},0).wait(1).to({x:-12.7},0).wait(1).to({x:-3.4},0).wait(1).to({x:7.1,y:-29.7},0).wait(1).to({x:18.9},0).wait(1).to({x:32,y:-29.8},0).wait(1).to({x:46.6},0).wait(1).to({x:62.6,y:-29.9},0).wait(1).to({x:80.2,y:-30},0).wait(1).to({x:101,y:-30.1},0).wait(1).to({x:125.5,y:-30.2},0).wait(1).to({x:153.5,y:-30.3},0).wait(1).to({x:185.1,y:-30.4},0).wait(1).to({x:219.6,y:-30.6},0).wait(1).to({x:256.5,y:-30.7},0).wait(1).to({x:294.7,y:-30.9},0).wait(1).to({x:333.3,y:-31},0).wait(1).to({x:371,y:-31.2},0).wait(1).to({x:407.1,y:-31.4},0).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_150 = new cjs.Graphics().p("ApqHiIAAixITVAAIAACxg");
	var mask_1_graphics_151 = new cjs.Graphics().p("AswCfIAAk8IZhAAIAAE8g");
	var mask_1_graphics_152 = new cjs.Graphics().p("Av2DlIAAnJIftAAIAAHJg");
	var mask_1_graphics_153 = new cjs.Graphics().p("Ay8EsIAApXMAl5AAAIAAJXg");
	var mask_1_graphics_154 = new cjs.Graphics().p("A2BFyIAArjMAsDAAAIAALjg");
	var mask_1_graphics_155 = new cjs.Graphics().p("A5HG5IAAtxMAyPAAAIAANxg");
	var mask_1_graphics_156 = new cjs.Graphics().p("A8NH/IAAv9MA4bAAAIAAP9g");
	var mask_1_graphics_157 = new cjs.Graphics().p("A/TJGIAAyLMA+nAAAIAASLg");
	var mask_1_graphics_158 = new cjs.Graphics().p("EgiZAKNIAA0ZMBEyAAAIAAUZg");
	var mask_1_graphics_159 = new cjs.Graphics().p("EgleALTIAA2lMBK9AAAIAAWlg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(150).to({graphics:mask_1_graphics_150,x:-18,y:48.2}).wait(1).to({graphics:mask_1_graphics_151,x:1.8,y:94.7}).wait(1).to({graphics:mask_1_graphics_152,x:21.5,y:101.8}).wait(1).to({graphics:mask_1_graphics_153,x:41.3,y:108.8}).wait(1).to({graphics:mask_1_graphics_154,x:61.1,y:115.9}).wait(1).to({graphics:mask_1_graphics_155,x:80.9,y:123}).wait(1).to({graphics:mask_1_graphics_156,x:100.7,y:130}).wait(1).to({graphics:mask_1_graphics_157,x:120.4,y:137.1}).wait(1).to({graphics:mask_1_graphics_158,x:140.2,y:144.1}).wait(1).to({graphics:mask_1_graphics_159,x:160,y:151.2}).wait(48));

	// ribbon_front
	this.instance_2 = new lib.ribbon_front_1();
	this.instance_2.setTransform(-19.5,158);
	this.instance_2._off = true;

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).wait(30).to({x:-7.3,y:157.9},0).wait(1).to({x:-4.8},0).wait(1).to({x:-1.9},0).wait(1).to({x:1.6},0).wait(1).to({x:5.7},0).wait(1).to({x:10.4},0).wait(1).to({x:15.9},0).wait(1).to({x:22.2,y:157.8},0).wait(1).to({x:29.4},0).wait(1).to({x:37.6},0).wait(1).to({x:47,y:157.7},0).wait(1).to({x:57.5},0).wait(1).to({x:69.3,y:157.6},0).wait(1).to({x:82.4},0).wait(1).to({x:97,y:157.5},0).wait(1).to({x:113,y:157.4},0).wait(1).to({x:130.6},0).wait(1).to({x:151.4,y:157.3},0).wait(1).to({x:175.9,y:157.2},0).wait(1).to({x:203.9,y:157.1},0).wait(1).to({x:235.5,y:156.9},0).wait(1).to({x:270,y:156.8},0).wait(1).to({x:306.9,y:156.6},0).wait(1).to({x:345.1,y:156.5},0).wait(1).to({x:383.7,y:156.3},0).wait(1).to({x:421.4,y:156.2},0).wait(1).to({x:457.5,y:156},0).wait(1));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_140 = new cjs.Graphics().p("ALzJHIAAyNICGAAIAASNg");
	var mask_2_graphics_141 = new cjs.Graphics().p("AkAJHIAAyNIIBAAIAASNg");
	var mask_2_graphics_142 = new cjs.Graphics().p("Am+JHIAAyNIN9AAIAASNg");
	var mask_2_graphics_143 = new cjs.Graphics().p("Ap8JHIAAyNIT5AAIAASNg");
	var mask_2_graphics_144 = new cjs.Graphics().p("As6JHIAAyNIZ1AAIAASNg");
	var mask_2_graphics_145 = new cjs.Graphics().p("Av4JHIAAyNIfxAAIAASNg");
	var mask_2_graphics_146 = new cjs.Graphics().p("Ay3JHIAAyNMAlvAAAIAASNg");
	var mask_2_graphics_147 = new cjs.Graphics().p("A11JHIAAyNMArrAAAIAASNg");
	var mask_2_graphics_148 = new cjs.Graphics().p("A4zJHIAAyNMAxnAAAIAASNg");
	var mask_2_graphics_149 = new cjs.Graphics().p("A7xJHIAAyNMA3jAAAIAASNg");
	var mask_2_graphics_150 = new cjs.Graphics().p("A+vJHIAAyNMA9fAAAIAASNg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(140).to({graphics:mask_2_graphics_140,x:89,y:43.1}).wait(1).to({graphics:mask_2_graphics_141,x:171.8,y:43.1}).wait(1).to({graphics:mask_2_graphics_142,x:172.4,y:43.1}).wait(1).to({graphics:mask_2_graphics_143,x:173,y:43.1}).wait(1).to({graphics:mask_2_graphics_144,x:173.6,y:43.1}).wait(1).to({graphics:mask_2_graphics_145,x:174.2,y:43.1}).wait(1).to({graphics:mask_2_graphics_146,x:174.8,y:43.1}).wait(1).to({graphics:mask_2_graphics_147,x:175.4,y:43.1}).wait(1).to({graphics:mask_2_graphics_148,x:175.9,y:43.1}).wait(1).to({graphics:mask_2_graphics_149,x:176.5,y:43.1}).wait(1).to({graphics:mask_2_graphics_150,x:177.1,y:43.1}).wait(57));

	// ribbon_right
	this.instance_3 = new lib.ribbon_right_1();
	this.instance_3.setTransform(69.1,49,1,1,0,0,0,39,-3);
	this.instance_3._off = true;

	this.instance_3.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(140).to({_off:false},0).wait(40).to({x:81.3,y:48.9},0).wait(1).to({x:83.8},0).wait(1).to({x:86.7},0).wait(1).to({x:90.2},0).wait(1).to({x:94.3,y:48.8},0).wait(1).to({x:99},0).wait(1).to({x:104.5},0).wait(1).to({x:110.8},0).wait(1).to({x:118,y:48.7},0).wait(1).to({x:126.2},0).wait(1).to({x:135.6},0).wait(1).to({x:146.1,y:48.6},0).wait(1).to({x:157.9},0).wait(1).to({x:171,y:48.5},0).wait(1).to({x:185.6},0).wait(1).to({x:201.6,y:48.4},0).wait(1).to({x:219.2,y:48.3},0).wait(1).to({x:240,y:48.2},0).wait(1).to({x:264.5,y:48.1},0).wait(1).to({x:292.5,y:48},0).wait(1).to({x:324.1,y:47.9},0).wait(1).to({x:358.6,y:47.7},0).wait(1).to({x:395.5,y:47.6},0).wait(1).to({x:433.7,y:47.4},0).wait(1).to({x:472.3,y:47.3},0).wait(1).to({x:510,y:47.1},0).wait(1).to({x:546.1,y:47},0).wait(1));

	// box_top
	this.instance_4 = new lib.box_top_1();
	this.instance_4.setTransform(9,-64.5,1,0.01,0,0,0,0,-80);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120).to({_off:false},0).to({regY:-82,scaleY:1,x:18.6,y:-64},11).wait(49).to({regX:-8,regY:15.5,x:22.7,y:33.5},0).wait(1).to({x:25.2},0).wait(1).to({x:28.2},0).wait(1).to({x:31.7},0).wait(1).to({x:35.7},0).wait(1).to({x:40.4},0).wait(1).to({x:45.9},0).wait(1).to({x:52.2},0).wait(1).to({x:59.4,y:33.4},0).wait(1).to({x:67.6},0).wait(1).to({x:76.9},0).wait(1).to({x:87.5},0).wait(1).to({x:99.2},0).wait(1).to({x:112.4},0).wait(1).to({x:126.9},0).wait(1).to({x:142.9},0).wait(1).to({x:160.5,y:33.3},0).wait(1).to({x:181.2},0).wait(1).to({x:205.6},0).wait(1).to({x:233.6},0).wait(1).to({x:265.1,y:33.2},0).wait(1).to({x:299.6},0).wait(1).to({x:336.4},0).wait(1).to({x:374.5,y:33.1},0).wait(1).to({x:413},0).wait(1).to({x:450.7,y:33},0).wait(1).to({regX:0,regY:-82,x:494.7,y:-64.5},0).wait(1));

	// box_front
	this.instance_5 = new lib.box_front_1();
	this.instance_5.setTransform(24.7,164.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).wait(161).to({regX:-15.5,regY:-6.5,x:21.3,y:157.5},0).wait(1).to({x:23.8},0).wait(1).to({x:26.8},0).wait(1).to({x:30.3},0).wait(1).to({x:34.3},0).wait(1).to({x:39},0).wait(1).to({x:44.5},0).wait(1).to({x:50.8},0).wait(1).to({x:58},0).wait(1).to({x:66.2},0).wait(1).to({x:75.5},0).wait(1).to({x:86},0).wait(1).to({x:97.8},0).wait(1).to({x:110.9},0).wait(1).to({x:125.5},0).wait(1).to({x:141.4},0).wait(1).to({x:159},0).wait(1).to({x:179.8},0).wait(1).to({x:204.2},0).wait(1).to({x:232.2},0).wait(1).to({x:263.6},0).wait(1).to({x:298.1},0).wait(1).to({x:334.9},0).wait(1).to({x:373.1},0).wait(1).to({x:411.5},0).wait(1).to({x:449.2},0).wait(1).to({regX:0,regY:0,x:500.7,y:164},0).wait(1));

	// can
	this.instance_6 = new lib.can_1();
	this.instance_6.setTransform(69,-126.9,1,1,0,0,0,0,84);
	this.instance_6._off = true;

	this.instance_7 = new lib.noodle_1();
	this.instance_7.setTransform(-47,186.5,1,1,0,0,0,0,73);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(57).to({_off:false},0).wait(1).to({regY:0,scaleX:1.02,scaleY:0.98,y:-138.9},0).wait(1).to({scaleX:1.04,scaleY:0.96,y:-72.4},0).wait(1).to({scaleX:1.06,scaleY:0.94,y:-15.4},0).wait(1).to({scaleX:1.07,scaleY:0.93,y:30.6},0).wait(1).to({scaleX:1.08,scaleY:0.92,y:65.9},0).wait(1).to({scaleX:1.09,scaleY:0.91,y:90.8},0).wait(1).to({scaleX:1.09,scaleY:0.91,y:107.1},0).wait(1).to({scaleX:1.09,scaleY:0.91,y:118},0).wait(1).to({scaleX:1.1,scaleY:0.9,y:125.5},0).wait(1).to({scaleX:1.1,scaleY:0.9,y:131},0).wait(1).to({scaleX:1.1,scaleY:0.9,y:135.4},0).wait(1).to({regX:0.1,regY:84,scaleX:1.1,scaleY:0.9,y:215.5},0).to({regX:0,scaleX:1,scaleY:1},3).wait(30).to({regX:0.1,scaleX:1.1,scaleY:0.9},3).to({regX:0,scaleX:1,scaleY:1},3).to({_off:true},71).wait(27).to({_off:false,x:543.7},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(179).to({_off:false},0).wait(1).to({regY:0,x:-31.9,y:114.2},0).wait(1).to({x:-28.8,y:114.4},0).wait(1).to({x:-25.2,y:114.6},0).wait(1).to({x:-20.9,y:114.8},0).wait(1).to({x:-15.8,y:115},0).wait(1).to({x:-10,y:115.3},0).wait(1).to({x:-3.2,y:115.7},0).wait(1).to({x:4.6,y:116},0).wait(1).to({x:13.6,y:116.5},0).wait(1).to({x:23.8,y:117},0).wait(1).to({x:35.3,y:117.5},0).wait(1).to({x:48.3,y:118.2},0).wait(1).to({x:63,y:118.9},0).wait(1).to({x:79.2,y:119.7},0).wait(1).to({x:97.3,y:120.6},0).wait(1).to({x:117.1,y:121.6},0).wait(1).to({x:138.9,y:122.6},0).wait(1).to({x:164.7,y:123.9},0).wait(1).to({x:194.9,y:125.4},0).wait(1).to({x:229.7,y:127.1},0).wait(1).to({x:268.8,y:129},0).wait(1).to({x:311.5,y:131.1},0).wait(1).to({x:357.2,y:133.3},0).wait(1).to({x:404.5,y:135.7},0).wait(1).to({x:452.3,y:138},0).wait(1).to({x:499,y:140.3},0).to({_off:true},1).wait(1));

	// noodle
	this.instance_8 = new lib.noodle_1();
	this.instance_8.setTransform(-47,-149.6,1,1,0,0,0,0,73);
	this.instance_8._off = true;

	this.instance_9 = new lib.porkFloss_1();
	this.instance_9.setTransform(61,91.5,1,1,0,0,0,0,63.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({_off:false},0).wait(1).to({regY:0,scaleX:1.02,scaleY:0.98,y:-163.9},0).wait(1).to({scaleX:1.03,scaleY:0.97,y:-106},0).wait(1).to({scaleX:1.05,scaleY:0.95,y:-52.9},0).wait(1).to({scaleX:1.06,scaleY:0.94,y:-7.2},0).wait(1).to({scaleX:1.07,scaleY:0.93,y:29.7},0).wait(1).to({scaleX:1.08,scaleY:0.92,y:58.1},0).wait(1).to({scaleX:1.09,scaleY:0.91,y:77.4},0).wait(1).to({scaleX:1.09,scaleY:0.91,y:90.6},0).wait(1).to({scaleX:1.09,scaleY:0.91,y:99.9},0).wait(1).to({scaleX:1.1,scaleY:0.9,y:106.6},0).wait(1).to({scaleX:1.1,scaleY:0.9,y:111.7},0).wait(1).to({scaleX:1.1,scaleY:0.9,y:116.1},0).wait(1).to({regX:0.1,regY:73,scaleX:1.1,scaleY:0.9,y:186.5},0).to({regX:0,scaleX:1,scaleY:1},3).wait(18).to({regX:0.1,scaleX:1.1,scaleY:0.9},3).to({regX:0,scaleX:1,scaleY:1},4).to({_off:true},94).wait(27).to({_off:false,x:427.7},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(179).to({_off:false},0).wait(1).to({regY:0,x:70.4,y:30.4},0).wait(1).to({x:72.3,y:30.9},0).wait(1).to({x:74.5,y:31.5},0).wait(1).to({x:77.2,y:32.2},0).wait(1).to({x:80.3,y:33},0).wait(1).to({x:84,y:34},0).wait(1).to({x:88.2,y:35},0).wait(1).to({x:93,y:36.3},0).wait(1).to({x:98.6,y:37.7},0).wait(1).to({x:104.9,y:39.4},0).wait(1).to({x:112.1,y:41.2},0).wait(1).to({x:120.2,y:43.3},0).wait(1).to({x:129.3,y:45.7},0).wait(1).to({x:139.4,y:48.3},0).wait(1).to({x:150.6,y:51.2},0).wait(1).to({x:162.9,y:54.4},0).wait(1).to({x:176.4,y:57.9},0).wait(1).to({x:192.4,y:62},0).wait(1).to({x:211.2,y:66.9},0).wait(1).to({x:232.8,y:72.5},0).wait(1).to({x:257,y:78.8},0).wait(1).to({x:283.6,y:85.7},0).wait(1).to({x:311.9,y:93},0).wait(1).to({x:341.3,y:100.6},0).wait(1).to({x:370.9,y:108.3},0).wait(1).to({x:400,y:115.8},0).to({_off:true},1).wait(1));

	// porkFloss
	this.instance_10 = new lib.porkFloss_1();
	this.instance_10.setTransform(61,-169,1,1,0,0,0,0,63.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(32).to({_off:false},0).wait(1).to({regY:0,scaleX:1.02,scaleY:0.98,y:-182.3,alpha:0.188},0).wait(1).to({scaleX:1.04,scaleY:0.96,y:-133.2,alpha:0.372},0).wait(1).to({scaleX:1.05,scaleY:0.95,y:-89.2,alpha:0.537},0).wait(1).to({scaleX:1.07,scaleY:0.93,y:-52.5,alpha:0.675},0).wait(1).to({scaleX:1.08,scaleY:0.92,y:-24.1,alpha:0.781},0).wait(1).to({scaleX:1.09,scaleY:0.91,y:-4.2,alpha:0.855},0).wait(1).to({scaleX:1.09,scaleY:0.91,y:9,alpha:0.905},0).wait(1).to({scaleX:1.09,scaleY:0.91,y:18,alpha:0.939},0).wait(1).to({scaleX:1.1,scaleY:0.9,y:24.2,alpha:0.962},0).wait(1).to({scaleX:1.1,scaleY:0.9,y:28.5,alpha:0.978},0).wait(1).to({scaleX:1.1,scaleY:0.9,y:31.6,alpha:0.99},0).wait(1).to({regX:0.1,regY:63.6,scaleX:1.1,scaleY:0.9,y:91.6,alpha:1},0).to({regX:0,regY:63.5,scaleX:1,scaleY:1,y:91.5},3).wait(17).to({regX:0.1,regY:63.6,scaleX:1.1,scaleY:0.9,y:91.6},3).to({regX:0,regY:63.5,scaleX:1,scaleY:1,y:91.5},4).wait(19).to({regX:0.1,regY:63.6,scaleX:1.1,scaleY:0.9,y:91.6},3).to({regX:0,regY:63.5,scaleX:1,scaleY:1,y:91.5},4).wait(83).to({regY:0,x:73.1,y:28},0).wait(1).to({x:75.6},0).wait(1).to({x:78.5},0).wait(1).to({x:82},0).wait(1).to({x:86},0).wait(1).to({x:90.8},0).wait(1).to({x:96.2},0).wait(1).to({x:102.5},0).wait(1).to({x:109.7},0).wait(1).to({x:117.9},0).wait(1).to({x:127.2},0).wait(1).to({x:137.6},0).wait(1).to({x:149.4},0).wait(1).to({x:162.5},0).wait(1).to({x:176.9},0).wait(1).to({x:192.9},0).wait(1).to({x:210.4},0).wait(1).to({x:231.1},0).wait(1).to({x:255.4},0).wait(1).to({x:283.4},0).wait(1).to({x:314.7},0).wait(1).to({x:349.1},0).wait(1).to({x:385.8},0).wait(1).to({x:423.9},0).wait(1).to({x:462.2},0).wait(1).to({x:499.8},0).wait(1).to({regY:63.5,x:535.7,y:91.5},0).wait(1));

	// rice
	this.instance_11 = new lib.rice_1();
	this.instance_11.setTransform(-33.5,-161.8,1,1,0,0,0,0,66.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({_off:false},0).to({regX:0.1,scaleX:1.1,scaleY:0.9,x:-33.4,y:105.2,alpha:1},13).to({regX:0,scaleX:1,scaleY:1,x:-33.5},3).wait(14).to({regX:0.1,scaleX:1.1,scaleY:0.9,x:-33.4},3).to({regX:0,scaleX:1,scaleY:1,x:-33.5},4).wait(124).to({regY:0,x:-21.4,y:38.7},0).wait(1).to({x:-18.9},0).wait(1).to({x:-16},0).wait(1).to({x:-12.5},0).wait(1).to({x:-8.5},0).wait(1).to({x:-3.7},0).wait(1).to({x:1.7},0).wait(1).to({x:8},0).wait(1).to({x:15.2},0).wait(1).to({x:23.4},0).wait(1).to({x:32.7},0).wait(1).to({x:43.1},0).wait(1).to({x:54.9},0).wait(1).to({x:68},0).wait(1).to({x:82.4},0).wait(1).to({x:98.4},0).wait(1).to({x:115.9},0).wait(1).to({x:136.6},0).wait(1).to({x:160.9},0).wait(1).to({x:188.9},0).wait(1).to({x:220.2},0).wait(1).to({x:254.6},0).wait(1).to({x:291.3},0).wait(1).to({x:329.4},0).wait(1).to({x:367.7},0).wait(1).to({x:405.3},0).wait(1).to({regY:66.5,x:441.2,y:105.2},0).wait(1));

	// box
	this.instance_12 = new lib.box_1();
	this.instance_12.setTransform(-488.1,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:1.5,regY:-14,x:-472.9,y:82.5},0).wait(1).to({x:-468.8},0).wait(1).to({x:-463.6},0).wait(1).to({x:-457.1},0).wait(1).to({x:-449.2},0).wait(1).to({x:-439.5},0).wait(1).to({x:-427.7},0).wait(1).to({x:-413.7},0).wait(1).to({x:-397.1},0).wait(1).to({x:-377.7},0).wait(1).to({x:-355.3},0).wait(1).to({x:-329.6},0).wait(1).to({x:-297.6},0).wait(1).to({x:-257.8},0).wait(1).to({x:-210.8},0).wait(1).to({x:-158},0).wait(1).to({x:-101.7},0).wait(1).to({x:-45.1},0).wait(1).to({regX:0,regY:0,x:7.1,y:96.5},0).wait(161).to({regX:1.5,regY:-14,x:20.8,y:82.5},0).wait(1).to({x:23.2},0).wait(1).to({x:26.2},0).wait(1).to({x:29.7},0).wait(1).to({x:33.7},0).wait(1).to({x:38.5},0).wait(1).to({x:44},0).wait(1).to({x:50.3},0).wait(1).to({x:57.5},0).wait(1).to({x:65.7},0).wait(1).to({x:75},0).wait(1).to({x:85.5},0).wait(1).to({x:97.3},0).wait(1).to({x:110.5},0).wait(1).to({x:125},0).wait(1).to({x:141},0).wait(1).to({x:158.6},0).wait(1).to({x:179.4},0).wait(1).to({x:203.8},0).wait(1).to({x:231.9},0).wait(1).to({x:263.4},0).wait(1).to({x:297.9},0).wait(1).to({x:334.7},0).wait(1).to({x:372.9},0).wait(1).to({x:411.4},0).wait(1).to({x:449.2},0).wait(1).to({regX:0,regY:0,x:483.7,y:96.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-632.1,-53.5,291,272);


(lib.BG_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// people
	this.instance = new lib.people_1();
	this.instance.setTransform(0,0,1,1,0,0,0,0.9,60.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:-2.3},15).to({scaleY:1,skewX:0},18).to({scaleY:1,skewX:3.1},17).to({scaleY:1,skewX:0},17).to({scaleY:1,skewX:-2.3},16).to({scaleY:1,skewX:0},18).to({scaleY:1,skewX:3.1},17).to({scaleY:1,skewX:0},17).to({scaleY:1,skewX:-2.3},17).to({scaleY:1,skewX:0},18).to({scaleY:1,skewX:3.1},17).to({scaleY:1,skewX:0},17).wait(3));

	// m_bg
	this.instance_1 = new lib.m_bg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(207));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.9,-287.5,640.9,575);


// stage content:
(lib.gift = function() {
	this.initialize();

	// GIFT_LAYER
	this.instance = new lib.GIFT_mc();
	this.instance.setTransform(97.9,205,1,1,0,0,0,-156.1,0);

	// GB_LAYER
	this.instance_1 = new lib.BG_mc();
	this.instance_1.setTransform(264,226.1,1,1,0,0,0,-0.5,0);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.1,138.6,962.6,575);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;