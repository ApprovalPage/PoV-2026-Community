(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"More_than_trains_DV360_Display__300x600_atlas_P_1", frames: [[0,0,1200,300]]},
		{name:"More_than_trains_DV360_Display__300x600_atlas_NP_1", frames: [[0,0,600,568]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._300x600Trains = function() {
	this.initialize(ss["More_than_trains_DV360_Display__300x600_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PoVHorizWhite = function() {
	this.initialize(ss["More_than_trains_DV360_Display__300x600_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.LOGO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PoVHorizWhite();
	this.instance.setTransform(0,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(0,-150,1200,300), null);


(lib.HEAD2Trains300x600svg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAOQgGgEAAgKQAAgJAGgEQAFgEAHAAQAIAAAFAEQAGAEAAAJQAAAKgGAEQgEAEgJAAQgIAAgEgEg");
	this.shape.setTransform(162.075,177.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaA9QgJgCgJgEIAAgbQAKAFALACQALADAIAAQAJAAAEgDQAEgCAAgFIgBgFQgCgDgGgDQgEgDgMgFQgKgEgJgFQgHgFgDgGQgDgGAAgLQAAgRANgIQANgIAUAAQAKAAALACQAJACAMAFIgKAYIgQgGQgIgDgIAAQgHAAgDACQgEACAAAEQAAADABACIAIAFIAPAHQAIADAKAGQAGADAFAHQAEAHABAKIAAABQgBALgGAJQgFAJgMAEQgKAEgRAAg");
	this.shape_1.setTransform(153.55,173.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPBUIAAinIAgAAIAACng");
	this.shape_2.setTransform(144.65,171.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXA6QgKgEgIgIQgIgIgEgMQgEgLAAgPQAAgSAHgPQAHgOANgHQANgHARAAQARAAANAHQANAHAIAOQAHAOAAATQAAAOgEAMQgDALgIAJQgJAIgKAEQgMAEgMAAQgLAAgMgEgAgSgaQgGAJAAARQAAALADAJQACAIAGAEQAFAEAIAAQAKAAAEgEQAGgEACgIQADgJAAgLQAAgKgDgJQgDgIgFgEQgFgEgJAAQgMAAgGAJg");
	this.shape_3.setTransform(134.475,173.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXA6QgLgFgHgHQgIgIgEgMQgEgMAAgOQAAgSAHgPQAGgNAOgIQAOgHAQAAQAQAAAOAHQANAHAIAOQAHAOAAATIAAAAQAAAQgEAKQgEALgIAJQgHAIgLAEQgLAEgNAAQgMAAgLgEgAgSgaQgGAIAAASQAAANADAHQACAIAGAEQAEAEAJAAQAKAAAEgEQAFgEADgIQADgJAAgLQAAgKgDgJQgDgIgFgEQgFgEgJAAQgMAAgGAJg");
	this.shape_4.setTransform(120.875,173.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXBUIAAhHQAAgMgFgGQgEgGgLgBQgJABgFAEQgGAFgCAHQgCAIgBAOIAAA5IggAAIAAinIAgAAIAAAzIgBALIABAAQAFgGAFgEQAFgDAHgCQAFgCAHAAQANAAAKAFQAJAEAGAKQAFAJABAPIAABPg");
	this.shape_5.setTransform(106.85,171.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWA4QgMgHgHgNQgGgNAAgWQAAgVAHgOQAIgOANgHQANgGARAAQALAAAKACQAJACAHAEIgKAZIgOgFQgGgCgHAAQgJAAgFAEQgFAEgDAIQgDAHAAAMQAAAMADAIQAEAJAFADQAFAEAIAAQAJAAAJgDQAIgDAHgFIAAAcQgGAFgJACQgIACgNAAQgQAAgOgGg");
	this.shape_6.setTransform(94.075,173.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaA9QgJgCgJgEIAAgbQAKAFALACQALADAIAAQAIAAAFgDQAEgCAAgFIgBgFQgEgEgEgCQgEgDgMgFQgKgEgJgFQgGgEgEgHQgDgGAAgLQAAgRAMgIQAOgIAUAAQAKAAALACQAJACAMAFIgKAYIgQgGQgIgDgJAAQgGAAgDACQgFACAAAEQAAACACADIAIAFIAPAHQAJAEAJAFQAHADAEAHQAEAHABAKIAAABQgBALgGAJQgFAJgMAEQgKAEgRAAg");
	this.shape_7.setTransform(82.9,173.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBUIAAinIAfAAIAACng");
	this.shape_8.setTransform(68.275,171.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiA6QgJgEgFgJQgEgHAAgNQAAgUANgIQANgJAagBIAVAAIAAgGQAAgIgFgGQgFgEgJAAQgJAAgHACIgRAHIgLgXQAKgEAMgDQAQgEAHAAQAYAAAOALQANALAAAVIAABPIgXAAIgGgQIgCAAIgKAKQgGAFgGACQgGABgKAAQgLAAgIgEgAAJAFQgQABgGAEQgGAHAAAIQAAAHAEADQAFADAHAAQAKAAAGgFQAIgHAAgLIAAgKg");
	this.shape_9.setTransform(57.9,173.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWA4QgMgHgHgNQgGgNAAgWQAAgVAHgOQAIgOANgHQANgGARAAQALAAAKACQAJACAHAEIgKAZIgOgFQgGgCgHAAQgJAAgFAEQgFAEgDAIQgDAHAAAMQAAAMADAIQAEAJAFADQAFAEAIAAQAJAAAJgDQAIgDAHgFIAAAcQgGAFgJACQgIACgNAAQgQAAgOgGg");
	this.shape_10.setTransform(46.125,173.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXA6QgKgEgIgIQgIgIgEgMQgEgKAAgQQAAgUAHgNQAGgNAOgIQAOgHAQAAQAQAAAOAHQANAHAIAOQAHAOAAATIAAAAQAAAQgEAKQgEALgIAJQgHAHgLAFQgLAEgNAAQgMAAgLgEgAgSgaQgGAJAAARQAAAMADAIQACAIAGAEQAEAEAJAAQAJAAAFgEQAGgEACgIQACgHAAgNQAAgMgCgHQgDgIgFgEQgFgEgJAAQgMAAgGAJg");
	this.shape_11.setTransform(33.525,173.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQBUIAAinIAhAAIAACng");
	this.shape_12.setTransform(23.35,171.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbBUIAAheIgSAAIAAgQIASgJIAAgJQABgPAFgJQAFgIAJgEQAIgDAOAAQAKAAAIABIAMAEIgIAYIgJgCIgKgBQgGAAgEAEQgCAEAAAHIAAAHIAcAAIAAAZIgcAAIAABeg");
	this.shape_13.setTransform(232.35,144.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXA6QgKgEgIgIQgIgIgEgMQgEgMAAgOQAAgSAHgPQAHgOANgHQANgHARAAQARAAANAHQANAHAIAOQAHAOAAATQAAAOgEAMQgFANgHAHQgHAIgLAEQgLAEgNAAQgMAAgLgEgAgSgaQgGAIAAASQAAANADAHQACAIAGAEQAEAEAJAAQAKAAAEgEQAFgEADgIQADgJAAgLQAAgKgDgJQgDgIgFgEQgGgEgIAAQgMAAgGAJg");
	this.shape_14.setTransform(220.575,147.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbA9QgHgCgLgEIAAgbQALAFAKACQAMADAJAAQAHAAAFgDQAEgCAAgFIgCgFQgBgCgFgEQgFgDgMgFIgSgJQgIgEgDgHQgDgGgBgLQAAgRANgIQAOgIAUAAQAKAAALACQAMADAJAEIgKAYIgRgGQgHgDgJAAQgGAAgEACQgDACAAAEQAAACACADIAHAFIAPAHQAKAEAHAFQAHADAGAHQADAHAAAKQAAAMgFAJQgGAJgLAEQgMAEgQAAg");
	this.shape_15.setTransform(202.65,147.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgmA9IAAh3IAZAAIAEAUIACAAQADgGAFgFQAGgFAGgDQAHgDAIAAIAGAAIAFABIgCAeIgKgBIgMACQgHACgEADQgEAEgDAGQgCAGAAAHIAAA9g");
	this.shape_16.setTransform(192.725,146.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYA4QgOgHgIgNQgIgPAAgUQAAgUAHgOQAHgOANgHQANgIAQABIAAAAQARAAALAHQAMAFAHANQAGAMAAARIAAAQIhMAAQABANAHAIQAIAIANAAQAKAAALgCIAUgHIAAAZQgJAEgKADQgNACgKAAQgRAAgOgHgAgNggQgGAHgBAMIAtAAQAAgGgDgGQgCgHgFgCQgGgEgHAAIAAAAQgJAAgGAGg");
	this.shape_17.setTransform(180.625,147);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHBHQgIgEgFgIQgFgJAAgQIAAg5IgQAAIAAgNIASgLIAKgaIAUAAIAAAaIAiAAIAAAYIgiAAIAAA5QAAAHADAEQAFADAGAAIAVgEIAAAZQgHADgHAAQgHACgKAAQgJAAgJgDg");
	this.shape_18.setTransform(169.25,145.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgmA9IAAh3IAZAAIAEAUIACAAQAFgIADgDQAHgGAFgCQAHgDAIAAIAFAAIAGABIgCAeIgKgBQgGAAgHACQgGACgEADQgFAEgCAGQgCAGAAAHIAAA9g");
	this.shape_19.setTransform(160.2,146.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXA6QgKgEgIgIQgIgIgEgMQgEgMAAgOQAAgSAHgPQAHgOANgHQANgHARAAQARAAANAHQANAHAIAOQAHAOAAATQAAAOgEAMQgFANgHAHQgHAIgLAEQgLAEgNAAQgMAAgLgEgAgSgaQgGAIAAASQAAANADAHQACAIAGAEQAEAEAJAAQAKAAAEgEQAFgEADgIQADgJAAgLQAAgKgDgJQgDgIgFgEQgGgEgIAAQgMAAgGAJg");
	this.shape_20.setTransform(147.775,147.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag3BYIAAisIAbAAIAFAPIABAAIAIgJQADgEAIgCQAGgDAIAAQAVABALAPQANAQAAAeQAAAUgFAOQgHANgKAIQgLAHgNAAQgHAAgHgCQgGgCgEgEIgIgHIgCAAIACAJIAAA5gAgMg5QgFADgDAIIgCASIAAADQAAALACAJQADAIAFADQAFAEAHAAQAJAAAEgEQAFgEACgIQACgFABgOQgBgSgFgJQgFgIgMgBQgHAAgFAEg");
	this.shape_21.setTransform(134.35,149.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag3BYIAAisIAbAAIAEAPIABAAIAIgJQAFgEAGgCQAHgDAIAAQAUABANAPQAMAQAAAeQAAAVgGANQgGANgKAIQgLAHgNAAQgHAAgHgCQgHgCgEgEIgIgHIgBAAIABAJIAAA5gAgNg5QgFAEgCAHQgCAIgBAKIAAADQABALACAJQACAIAFADQAFAEAJAAQAHAAAFgEQAFgFACgHQACgIAAgLQABgRgGgKQgGgIgLgBQgGAAgHAEg");
	this.shape_22.setTransform(120.45,149.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgiA5QgKgFgFgKQgGgKAAgPIAAhNIAhAAIAABFQABANAEAGQAEAHAKAAQAKAAAGgFQAFgFADgIQABgIAAgNIAAg4IAiAAIAAB3IgZAAIgFgPIgCAAQgEAGgGAEQgGAEgGABQgGACgIAAQgNAAgJgEg");
	this.shape_23.setTransform(105.85,147.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgaA9QgIgCgKgEIAAgbQALAFAKACQALADAIAAQAKAAADgDQAEgCAAgFIgBgFQgCgDgGgDIgQgIQgOgGgEgDQgGgEgFgHQgDgIAAgJQAAgQAMgJQAOgIAUAAQAKAAALACQAMADAKAEIgLAYIgQgGQgGgDgKAAQgHAAgDACQgEACAAAEQAAADACACIAHAFIAPAHQAKAEAIAFQAIADADAHQAFAHAAAKQAAAMgGAJQgHAJgLAEQgLAEgPAAg");
	this.shape_24.setTransform(93.25,147.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYA4QgOgHgIgNQgIgOAAgVQAAgUAHgOQAHgOANgHQANgIAQABIgBAAQASAAALAHQAMAFAHANQAGAMAAARIAAAQIhMAAQABANAHAIQAIAIANAAQAKAAALgCIAUgHIAAAZQgJAEgKADQgNACgKAAQgRAAgOgHgAgNggQgGAHgBAMIAtAAQAAgGgDgGQgDgHgEgCQgGgEgHAAQgJAAgGAGg");
	this.shape_25.setTransform(75.525,147);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgmA9IAAh3IAZAAIAEAUIACAAQADgGAFgFQAFgFAHgDQAHgDAIAAIAGAAIAFABIgCAeIgKgBIgMACQgHACgEADQgEAEgDAGQgCAGAAAHIAAA9g");
	this.shape_26.setTransform(64.625,146.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgUAbIALg1IAdAAIABACIgFARIgOAig");
	this.shape_27.setTransform(56.625,140);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgZA4QgOgIgHgMQgIgOAAgVQAAgUAHgOQAGgOAOgHQANgIAQABIgBAAQASAAALAHQAMAFAHANQAGAMAAARIAAAQIhMAAQABAOAHAHQAIAIANAAQALAAAKgCQAIgDAMgEIAAAZQgIAEgLADQgNACgLAAQgQAAgPgHgAgNggQgGAHgBAMIAtAAQAAgHgDgFQgCgHgGgCQgFgEgHAAQgJAAgGAGg");
	this.shape_28.setTransform(47.775,147);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAdBPIgahkIgDgTIgcB3IglAAIgoidIAgAAIAbB1IABAJIACgJIAdh1IAeAAIAXBXIAHAnIACgNIAahxIAgAAIgnCdg");
	this.shape_29.setTransform(30.6,145.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0C5FA3").s().p("AjNDIIAAmPIGbAAIAAGPg");
	this.shape_30.setTransform(20.625,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.9,179.7);


(lib.HEAD1Trains300x600svg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAOQgGgFAAgJQAAgJAGgEQAFgEAHAAQAIAAAGAEQAFAEAAAJQAAAJgFAFQgHAEgHAAQgHAAgFgEg");
	this.shape.setTransform(219.85,125.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaA9QgIgCgKgEIAAgbQAIAEANAEQAKACAKAAQAJAAADgCQAEgDABgFQAAgCgCgDQgCgDgFgDIgQgIIgTgJQgIgFgDgGQgDgGgBgLQABgQANgJQAMgIAVAAQAKAAAMACQAJACALAFIgKAYQgGgDgLgDQgIgDgIAAQgGAAgEACQgDACAAAEQAAADACACIAHAFIAPAHQAOAGAEADQAHADAFAHQADAHAAALQABAMgGAIQgGAJgLAEQgMAEgPAAg");
	this.shape_1.setTransform(211.3,120.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXA9IAAhFQAAgMgFgHQgEgHgKAAQgOAAgGAKQgFALgBASIAAA4IghAAIAAh3IAZAAIAFAQIACAAQADgGAHgFQAGgEAGgBIAOgCQATAAAMAKQAMAKAAAYIAABNg");
	this.shape_2.setTransform(198.55,120.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQBTIAAh2IAgAAIAAB2gAgMg2QgFgDAAgKQAAgJAFgEQAGgCAGAAQAIAAAFACQAFAFAAAIQAAAKgFADQgHAEgGgBQgGABgGgEg");
	this.shape_3.setTransform(187.975,118.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiA6QgJgEgFgIQgEgIAAgOQgBgTANgIQAOgJAagBIAUgBIAAgFQAAgJgEgFQgFgEgJAAQgHAAgJACIgRAHIgLgXQAMgFAJgCQAMgDAMAAQAZAAAMAKQANALABAVIAABPIgYAAIgFgQIgCAAQgFAHgFADQgFAFgHABQgGACgLAAQgJAAgJgEgAgNALQgGAFAAAJQAAAHAEADQAEADAHAAQAKAAAHgGQAIgGAAgLIAAgKIgNAAQgPABgGAFg");
	this.shape_4.setTransform(177.6,120.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXBTIAAhGQAAgLgFgHQgEgHgLABQgJgBgFAFQgFAEgDAJQgDAKAAALIAAA4IggAAIAAilIAgAAIgBA+IABAAQAEgGAGgFQAFgEAHgBIAMgCQAOAAAJAFQAKAFAFAJQAFAJABAQIAABNg");
	this.shape_5.setTransform(164.1,118.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVA4QgNgGgGgOQgHgNAAgWQAAgVAIgOQAIgOAMgHQAPgGAPAAQAMAAAKACIAPAGIgKAZIgOgFQgGgCgIAAQgJAAgDAEQgGAEgDAIQgDAJAAAKQAAAMADAIQADAIAGAEQAEAEAIAAQAKAAAJgDQAKgEAFgEIAAAcQgFAFgLACQgHACgNAAQgRAAgMgGg");
	this.shape_6.setTransform(151.35,120.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvBWIgHgBIAAgaIANABQAHAAAFgDQAEgCAEgFQADgEACgHIACgGIgwh2IAkAAIAZBKIABAHIAAAGIABAAIABgKIAZhNIAkAAIgzCGQgEAMgIAJQgHAIgJAFQgJADgMAAg");
	this.shape_7.setTransform(133.575,123.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBTIAAilIAgAAIAAClg");
	this.shape_8.setTransform(123.95,118.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag3BYIAAisIAbAAIAEAPIACAAIAHgJQAGgEAGgCQAGgCAHgBQAVABANAQQAMAPAAAfQAAAUgGANQgFANgLAIQgLAHgNAAQgJAAgFgCQgGgCgFgEQgEgDgDgFIgCAAIACAJIAAA6gAAAg8QgHAAgFADQgGAEgBAHQgDAGAAAMIAAAEQAAALACAIQADAHAFAEQAFAEAHABQAJgBAEgEQAEgDADgIQADgIAAgMQAAgSgGgIQgFgKgMAAg");
	this.shape_9.setTransform(114,123.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag3BYIAAisIAaAAIAFAPIABAAQADgEAGgFQAFgEAFgCQAGgCAJgBQATABAOAQQAMAQAAAeQAAAUgGANQgGAOgLAHQgKAHgNAAQgKAAgEgCQgGgCgFgEIgIgIIgBAAIABBDgAAAg8QgIAAgFADQgEAEgDAHQgCAIgBAKIAAAEQABAMACAHQACAHAFAEQAFAEAJABQAHgBAFgEQAFgEACgHQADgJgBgLQABgRgGgJQgGgKgLAAg");
	this.shape_10.setTransform(100.1,123.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiA4QgJgDgGgKQgGgKAAgQIAAhNIAhAAIAABFQABANAEAGQAEAHAKAAQAJAAAHgEQAFgGADgIQACgIAAgMIAAg5IAhAAIAAB3IgaAAIgEgPIgCAAQgEAGgGADQgGAEgGADQgGABgIAAQgNAAgJgFg");
	this.shape_11.setTransform(85.5,120.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaA9QgIgBgLgFIAAgbQAKAFAMADQAJACALAAQAJAAADgCQAEgDAAgFQAAgDgBgCQgCgDgGgDIgQgIQgIgDgLgGQgGgFgEgGQgEgGAAgLQAAgQAOgJQANgIAUAAQAKAAALACQAKACALAFIgKAYQgGgDgLgDQgIgDgHAAQgHAAgEACQgDACAAAEQAAADACACIAHAFIAPAHQANAGAFADQAHADAEAHQAEAHABALQAAAMgGAIQgGAJgLAEQgNAEgOAAg");
	this.shape_12.setTransform(72.9,120.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqBFQgNgQAAgeQAAgeANgQQANgQAUAAQAIAAAGADQAFABAHAFIAIAJIABAAIgCgLIgBgzIAhAAIAAClIgZAAIgGgPIgCAAIgHAJQgGAEgGACQgEACgKAAQgUAAgMgPgAgQgDQgGAJAAARQAAARAGAKQAGAIALABQANgBAGgHQAFgJABgPIAAgEQAAgRgGgJQgFgJgPAAQgKAAgGAJg");
	this.shape_13.setTransform(54.325,118.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAXA9IAAhFQAAgNgFgGQgEgHgKAAQgOAAgGAKQgFALgBASIAAA4IghAAIAAh3IAZAAIAFAQIACAAQADgGAHgFQAFgEAHgBIAOgCQATAAAMAKQAMAKAAAYIAABNg");
	this.shape_14.setTransform(40.5,120.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjA6QgIgEgFgIQgEgIgBgOQAAgTAOgIQANgJAagBIAVgBIAAgFQAAgJgFgFQgEgEgKAAQgGAAgKACIgQAHIgMgXQANgGAJgBQAMgDAMAAQAYAAANAKQANAKgBAWIAABPIgWAAIgGgQIgBAAQgFAHgGADQgFAFgIABQgEACgMAAQgJAAgKgEgAgNALQgGAFAAAJQAAAHAEADQAFADAHAAQAKAAAHgGQAHgGAAgLIAAgKIgNAAQgOAAgHAGg");
	this.shape_15.setTransform(26.25,120.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaA9QgIgCgKgEIAAgbQAKAFALADQAJACALAAQAJAAADgCQAEgDABgFQAAgCgCgDQgCgDgFgDIgRgIQgKgEgIgFQgHgFgEgGQgEgIAAgJQAAgQAOgJQANgIAUAAQAKAAALACQAJACAMAFIgKAYQgHgEgKgCQgIgDgHAAQgHAAgEACQgDACAAAEQAAADACACIAHAFIAPAHQANAGAFADQAIAEADAGQAEAHABALQAAAMgGAIQgHAJgKAEQgNAEgOAAg");
	this.shape_16.setTransform(268.65,94.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXA9IAAhFQAAgMgFgHQgEgHgLAAQgNAAgGAKQgGAKAAATIAAA4IggAAIAAh3IAYAAIAFAQIACAAQADgGAGgFQAGgEAHgBIAOgCQATAAAMAKQAMALAAAXIAABNg");
	this.shape_17.setTransform(255.9,94.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQBUIAAh3IAgAAIAAB3gAgMg2QgFgDAAgKQAAgJAFgDQAGgEAGAAQAHAAAFAEQAGADAAAJQAAAJgGAEQgGADgGABQgGgBgGgDg");
	this.shape_18.setTransform(245.325,91.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjA6QgIgEgFgIQgEgIgBgOQABgTANgIQAOgJAZgBIAVgBIAAgFQAAgJgFgFQgFgEgJAAQgHAAgJACIgRAHIgLgXQALgFALgCQAMgDALAAQAZAAANAKQANALAAAVIAABPIgYAAIgFgQIgBAAQgGAHgFADQgFAFgIABQgEACgMAAQgKAAgJgEgAgNALQgGAFAAAJQAAAHAEADQAEADAIAAQAJAAAIgGQAHgGAAgLIAAgKIgNAAQgPABgGAFg");
	this.shape_19.setTransform(234.95,94.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmA9IAAh3IAZAAIAEAUIACAAIAIgLIAMgIQAHgDAIAAIAAAAIALABIgCAfIgFgBIgFgBQgHAAgFACQgGACgFADQgEAEgDAGQgCAGAAAHIAAA9g");
	this.shape_20.setTransform(224.275,94.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHBGQgIgCgFgJQgFgJAAgQIAAg4IgQAAIAAgPIASgKIAKgaIAUAAIAAAaIAiAAIAAAZIgiAAIAAA4QAAAIADACQAEAEAHAAIALgBIAKgDIAAAZQgHACgHABQgHACgKAAQgLAAgHgEg");
	this.shape_21.setTransform(213.8,93.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAXA9IAAhFQgBgMgEgHQgFgHgKAAQgOAAgFAKQgGALAAASIAAA4IghAAIAAh3IAZAAIAFAQIACAAQACgFAHgGQAHgEAGgBQAIgCAGAAIAAAAQAUAAAKAKQANALAAAXIAABNg");
	this.shape_22.setTransform(196.2,94.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgjA6QgJgFgEgHQgFgIAAgOQAAgTAOgIQAOgJAZgBIAVgBIAAgFQAAgJgFgFQgFgEgJAAQgHAAgJACIgRAHIgLgXQANgGAJgBQAMgDALAAIABAAQAYAAANAKQANALAAAVIAABPIgXAAIgHgQIAAAAQgFAHgGADQgGAFgGABQgGACgKAAQgKAAgKgEgAgNALQgGAFAAAJQAAAHAEADQAFADAHAAQAJAAAIgGQAHgGAAgLIAAgKIgNAAQgPABgGAFg");
	this.shape_23.setTransform(181.925,94.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAXBUIAAhHQAAgMgFgGQgFgGgJgBQgJABgGAEQgFAEgDAIQgCAJAAANIAAA5IghAAIAAinIAhAAIgCA/IACAAQADgGAGgFQAGgDAGgCIANgCQANAAAJAFQAKAFAFAJQAGAJgBAPIAABPg");
	this.shape_24.setTransform(168.45,91.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHBGQgHgCgGgJQgFgKAAgPIAAg4IgQAAIAAgPIASgKIAKgaIAUAAIAAAaIAhAAIAAAZIghAAIAAA4QAAAIAEACQADAEAHAAIAKgBIALgDIAAAZIgNADQgIACgJAAQgLAAgIgEg");
	this.shape_25.setTransform(156.325,93.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgZA4QgNgHgJgOQgHgNAAgVQAAgVAHgNQAGgOAOgHQAMgHAQAAQARAAAMAGQANAIAFALQAHAMAAARIAAAPIhMAAQAAANAIAJQAIAIANAAQAMAAAJgCQANgEAGgEIAAAaQgHAEgLACQgJACgPAAQgSAAgNgGgAgNggQgGAGgCANIAtAAQAAgGgCgHQgCgFgGgEQgEgDgIAAIgBAAQgIAAgGAGg");
	this.shape_26.setTransform(139.475,94.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgmA9IAAh3IAZAAIAFAUIABAAQAEgGAEgFQAGgGAGgCQAHgDAIAAIALABIgCAfIgFgBIgFgBQgHAAgGACQgGACgEADQgEADgDAHQgCAFAAAIIAAA9g");
	this.shape_27.setTransform(128.55,94.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWA6QgLgDgIgJQgIgIgEgLQgEgMAAgPQAAgTAHgOQAHgOANgHQANgHASAAQARAAAMAHQANAHAIAOQAHAOAAATQAAAQgEALQgDALgIAIQgJAJgKADQgMAEgMAAQgLAAgLgEgAgSgaQgGAJAAARQAAALADAJQADAIAFAEQAGAEAHAAQAJAAAFgEQAGgEACgIQADgJAAgLQAAgKgDgJQgCgIgGgEQgGgEgIAAQgMAAgGAJg");
	this.shape_28.setTransform(116.125,94.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AA7A9IAAhFQgBgMgEgHQgEgHgJAAQgNAAgGAJQgGAJAAARIAAA8IgfAAIAAhFQAAgJgDgFQgBgGgEgDQgEgDgGAAQgKAAgFAFQgFAEgCAJQgCAKAAALIAAA4IghAAIAAh3IAZAAIAFAQIABAAQADgGAHgFQAEgDAHgCIAOgCQANAAAJAEQAIAFAGAJIACAAQAFgJALgFQAIgEAMAAIAAAAQAUAAAKAKQALALAAAXIAABNg");
	this.shape_29.setTransform(98.55,94.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYA4QgOgHgIgOQgIgNAAgVQAAgTAHgPQAHgPANgGQAMgHAQAAIAAAAQASAAALAGQAMAHAHAMQAGALAAASIAAAPIhMAAQABAOAHAIQAIAIANAAQANAAAIgCIAUgIIAAAaQgJAEgKACQgIACgPAAQgSAAgNgGgAgNggQgGAHgBAMIAtAAQAAgGgDgHQgDgFgEgEQgFgDgIAAQgIAAgHAGg");
	this.shape_30.setTransform(75.525,94.225);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgmA9IAAh3IAZAAIAEAUIACAAQADgGAFgFQAFgFAHgDQAHgDAIAAIAAAAIALABIgCAfIgKgCQgHAAgFACQgGACgFADQgEAEgDAGQgCAGAAAHIAAA9g");
	this.shape_31.setTransform(64.625,94.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgUAbIALg1IAdAAIABADIgFAQIgOAig");
	this.shape_32.setTransform(56.625,87.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgZA4QgOgHgHgOQgIgNAAgVQAAgTAHgPQAGgOAOgHQAMgHAQAAIABAAQARAAALAGQAMAHAHAMQAGALAAASIAAAPIhMAAQABAPAHAHQAIAIANAAQANAAAIgCQANgEAHgEIAAAaQgIAEgLACQgIACgQAAQgRAAgOgGgAgNggQgGAHgBAMIAtAAQAAgHgDgGQgCgFgGgEQgEgDgIAAQgJAAgGAGg");
	this.shape_33.setTransform(47.775,94.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAdBPIgchuIgBgIIgcB2IglAAIgoidIAgAAIAbB1IABAJIAEgVIAbhpIAeAAIAaBpIAEAVIAch+IAgAAIgnCdg");
	this.shape_34.setTransform(30.6,92.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0C5FA3").s().p("AjNDIIAAmPIGbAAIAAGPg");
	this.shape_35.setTransform(20.625,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.2,131.9);


(lib.CTAtypesvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CTA type.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AADAgQgOAAgIgIQgIgJAAgOQgBgOAJgJQAHgJANAAQAMAAAIAIQAHAHAAANIAAAHIgmAAQAAAHAEAEQADAEAHAAIALgBQAFgBAFgDIAAANQgFADgEABIgNABgAgHgPQgCACgBAHIAWAAQAAgGgDgDQgDgEgFAAQgFAAgDAEg");
	this.shape.setTransform(58.1,4.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAfIAAg8IANAAIADAKIABAAQABgDAFgFQAEgDAHAAIAFAAIgBAQIgFgBQgIAAgFAFQgDAEAAAGIAAAfg");
	this.shape_1.setTransform(52.8,4.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPAcQgHgEgDgHQgEgIAAgJQAAgOAIgIQAIgJANAAQAIAAAIAEQAGAEAEAHQAEAHAAAJIgBAAQAAAPgHAIQgIAJgOAAQgIAAgHgEgAgJgNQgDAFAAAIQAAAJADAFQAEAFAFAAQAGAAAEgFQACgFAAgJQAAgIgCgFQgEgEgGAAQgGAAgDAEg");
	this.shape_2.setTransform(46.75,4.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAeAfIAAgjQAAgGgDgEQgCgDgEAAQgHAAgCAFQgEAEAAAJIAAAeIgQAAIAAgjQAAgGgCgEQgDgDgEAAQgGAAgDAFQgDAEAAAKIAAAdIgRAAIAAg8IANAAIADAIIABAAQACgFAFgCQAFgCAFAAQANAAAFAJIABAAQADgEAFgDQAFgCAFAAQAKAAAHAFQAEAFAAAMIAAAng");
	this.shape_3.setTransform(38.05,4.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAMAfIAAgjQAAgHgDgDQgCgDgFAAQgGAAgEAFQgDAEAAAKIAAAdIgRAAIAAg8IAOAAIACAIIABAAQACgEAGgDQAEgCAFAAQAMAAAFAGQAGAGAAAKIAAAng");
	this.shape_4.setTransform(26.45,4.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAfIAAg8IANAAIACAKIABAAQACgEAFgEQAFgDAFAAIAGAAIgBAQIgFgBQgIAAgEAFQgEAEAAAGIAAAfg");
	this.shape_5.setTransform(20.8,4.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVAbQgFgFAAgJQAAgKAGgEQAIgFAMAAIALAAIAAgDQAAgJgKAAQgGAAgKAEIgGgLQALgGAMAAQAMAAAHAGQAGAFAAALIAAAoIgLAAIAAAAIgEgIIAAAAQgEAFgFACQgDACgHAAQgJAAgFgFgAAEADQgGAAgEACQgDACAAAGQAAAHAIAAQAFAAADgEQAEgDAAgGIAAgFg");
	this.shape_6.setTransform(14.625,4.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTAYQgIgIAAgPQAAgPAHgIQAJgJAMAAQANAAAHAIQAHAIAAAMIAAAHIgmAAQAAAHAEAEQADAEAHAAIAKgBIALgEIAAANIgKAEIgMABQgOAAgIgIgAgHgPQgCACgBAHIAWAAQAAgGgDgDQgDgEgFAAQgFAAgDAEg");
	this.shape_7.setTransform(8.375,4.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAoIAAhPIARAAIAABBIAgAAIAAAOg");
	this.shape_8.setTransform(2.475,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61,8.1);


(lib.CAMPAIGN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stacked
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6CF72").s().p("AgGAHQgCgDAAgEQAAgEACgCQACgCAEAAQAEAAACACQADADAAADQAAADgDAEQgCACgEAAQgDAAgDgCg");
	this.shape.setTransform(70.25,9.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6CF72").s().p("AgeAwIAAgLIAHAAQAMAAADgMIADgGIgchCIAAgBIAQAAIAOAnQADAJAAAFIABAAIACgHIAPgtIAPAAIgcBLQgHAVgTAAIgJgBg");
	this.shape_1.setTransform(65.45,8.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6CF72").s().p("AgMAVIAAgkIgJAAIAAgHIAKgEIAFgPIAIAAIAAAPIATAAIAAALIgTAAIAAAjQAAAFACADQAEACADABIALgCIAAAKIgGACIgIABQgUAAAAgVg");
	this.shape_2.setTransform(59.325,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6CF72").s().p("AgGAuIAAhCIANAAIAABCgAgFggQgCgDAAgCQAAgEACgCQACgCADAAQAEAAACACQACABAAAFQAAADgCACQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(55.15,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D6CF72").s().p("AgdAjIAAhDIAMAAIACAIIAAAAQADgEAGgDQAGgCAFgBQAZAAAAAZIAAArIgPAAIAAgoQAAgIgDgEQgDgEgHAAQgIABgEAFQgEAGAAALIAAAig");
	this.shape_4.setTransform(49.475,6.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D6CF72").s().p("AgXAcQgGgFAAgNIAAgrIAPAAIAAAoQAAAIADAEQADAEAHAAQAIAAAEgGQAEgFAAgMIAAghIAPAAIAABCIgMAAIAAAAIgCgJIgBAAQgDAFgFADQgGACgGAAQgMAAgGgGg");
	this.shape_5.setTransform(41.525,6.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D6CF72").s().p("AgxAjIAAhDIAMAAIACAIIAAAAQAEgEAFgDQAFgCAGgBQAPABAFAKIABAAQAEgGAEgCQAGgCAHgBQAMAAAFAHQAGAFgBANIAAArIgNAAIAAgoQAAgIgDgEQgEgEgFAAQgJAAgEAGQgEAFAAALIAAAiIgNAAIAAgoQAAgIgDgEQgDgEgGAAQgJABgEAFQgDAGAAALIAAAig");
	this.shape_6.setTransform(31.6,6.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D6CF72").s().p("AgwAjIAAhDIALAAIABAIIABAAQADgEAFgDQAGgCAGgBQAPABAFAKIABAAQADgFAFgDQAGgCAGgBQANAAAFAHQAGAFAAANIAAArIgPAAIAAgoQAAgIgCgEQgDgEgHAAQgIAAgEAGQgEAFAAALIAAAiIgNAAIAAgoQAAgHgDgFQgDgEgGAAQgJABgDAFQgFAGAAALIAAAig");
	this.shape_7.setTransform(19.65,6.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D6CF72").s().p("AgQAfQgHgFgFgIQgDgHAAgLQAAgQAIgJQAJgJAOAAQAPAAAIAKQAJAIAAAQIAAAAQAAAQgIAJQgKAKgOAAQgJAAgHgEgAgMgQQgFAGAAAKQAAAYARAAQARAAAAgYQAAgWgRAAQgIAAgEAGg");
	this.shape_8.setTransform(9.85,6.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D6CF72").s().p("AgRAaQgIgIAAgSQAAgPAIgKQAJgJAPAAQALAAAIAEIgFALQgIgDgHAAQgQAAAAAWQAAAMAEAFQAFAGAHAAQAJAAAJgFIAAANIgIADIgLABQgOAAgIgJg");
	this.shape_9.setTransform(3.025,6.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D6CF72").s().p("AgUAiIAAhCIAMAAIACAMIABAAQACgGAFgEQAFgDAHAAIAHAAIgBAOIgHgBQgJAAgEAGQgFAFAAAJIAAAig");
	this.shape_10.setTransform(83.6,-7.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D6CF72").s().p("AgXAdQgGgHAAgMIAAgrIAPAAIAAAoQAAAJADADQAEAEAGAAQAIAAAEgGQAEgFAAgMIAAghIAPAAIAABCIgMAAIgCgJIAAAAQgDAFgGADQgGADgFgBQgNAAgGgFg");
	this.shape_11.setTransform(76.525,-7.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D6CF72").s().p("AgPAeQgJgEgDgHQgEgKAAgJQAAgPAJgKQAIgJAOAAQAQAAAHAKQAJAJAAAPQAAARgJAJQgIAJgPAAQgJAAgGgFgAgMgQQgEAGAAAKQAAAXAQAAQASAAgBgXQAAgWgRgBQgHAAgFAHg");
	this.shape_12.setTransform(68.75,-7.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D6CF72").s().p("AgZAtQgHgGAAgJQAAgGAEgEQAEgFAHgBQgDgBgCgDQgCgDAAgDIACgFIAHgFQgGgDgDgFQgDgGAAgFQAAgLAHgHQAHgFANgBIAFABIAEABIAYAAIAAAHIgMADQACABABAEIABAHQAAALgHAFQgIAGgLAAIgGgBQgFADAAADQAAABAAAAQABABAAAAQAAABABAAQAAAAABABQACABAGAAIAKAAQAMAAAFAEQAGAGAAAJQAAALgJAGQgLAHgPgBQgNAAgJgEgAgPAWQgEADAAAFQAAAFAEACQAEACAIAAQALABAFgEQAGgDAAgGQAAgEgDgCQgEgCgIAAIgKAAQgGAAgDADgAgKgkQgDAEAAAHQAAAGADADQAEADAGAAQALAAAAgMQAAgIgDgCQgDgEgFgBQgFAAgFAEg");
	this.shape_13.setTransform(58.175,-5.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D6CF72").s().p("AAPAiIAAgoQAAgIgDgEQgDgEgHAAQgIAAgEAGQgFAFAAAMIAAAhIgOAAIAAhCIALAAIACAJIABAAQADgFAGgDQAGgCAFAAQAZAAAAAYIAAArg");
	this.shape_14.setTransform(50.825,-7.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D6CF72").s().p("AgGAvIAAhDIAOAAIAABDgAgFggQgCgDAAgDQAAgDACgDQACgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_15.setTransform(45.05,-8.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D6CF72").s().p("AgUAiIAAhCIAMAAIACAMIAAAAQADgGAFgEQAFgDAGAAIAIAAIgCAOIgHgBQgIAAgEAGQgFAFAAAJIAAAig");
	this.shape_16.setTransform(41.05,-7.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D6CF72").s().p("AgPAeQgJgEgDgHQgEgKAAgJQAAgPAJgKQAIgJAOAAQAQAAAIAKQAIAJAAAPQAAARgIAJQgJAJgPAAQgJAAgGgFgAgMgQQgEAGAAAKQAAAXAQAAQARAAAAgXQAAgWgRgBQgIAAgEAHg");
	this.shape_17.setTransform(34.1,-7.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D6CF72").s().p("AAPAwIAAgqQAAgGgDgEQgEgFgGAAQgIABgEAFQgEAEAAANIAAAiIgPAAIAAhfIAPAAIgBAlIABAAQADgFAFgDQAGgCAFAAQAZAAAAAYIAAAsg");
	this.shape_18.setTransform(26.375,-8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D6CF72").s().p("AgRAaQgIgIAAgRQAAgQAJgKQAIgJAPAAQALAAAIAEIgEAMQgJgEgGAAQgRAAAAAXQAAAKAEAHQAFAFAHAAQAKAAAIgEIAAAMQgEACgEABIgKABQgOAAgJgJg");
	this.shape_19.setTransform(19.375,-7.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D6CF72").s().p("AAPAiIAAgoQAAgIgDgEQgDgEgHAAQgIAAgEAGQgEAFAAAMIAAAhIgPAAIAAhCIAMAAIACAJIAAAAQADgFAGgDQAGgCAGAAQAYAAAAAYIAAArg");
	this.shape_20.setTransform(12.225,-7.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D6CF72").s().p("AAaAtIgJgZIghAAIgJAZIgPAAIAhhZIAPAAIAhBZgAgMAIIAZAAIgLgfIgCgIg");
	this.shape_21.setTransform(4.125,-8.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CAMPAIGN, new cjs.Rectangle(0,-13.2,85.7,26.5), null);


(lib.HEAD2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.HEAD2Trains300x600svg("synched",0);
	this.instance.setTransform(114,87,1,1,0,0,0,114,87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(0,0,236.9,179.7), null);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.HEAD1Trains300x600svg("synched",0);
	this.instance.setTransform(124.7,68.9,1,1,0,0,0,124.7,68.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,273.2,131.9), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// svg
	this.instance = new lib.CTAtypesvg("synched",0);
	this.instance.setTransform(-0.1,-2.65,1.15,1.15,0,0,0,27.7,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6CF72").s().p("AmUBVIAAipIMpAAIAACpg");
	this.shape.setTransform(2.5,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-38,-11,81,17), null);


// stage content:
(lib.More_than_trains_DV360Display__300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [158];
	// timeline functions:
	this.frame_158 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(158).call(this.frame_158).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(159));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(221.85,554.85,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(148).to({scaleX:1.6239,scaleY:1.6239},2).to({scaleX:1.4,scaleY:1.4},6).wait(3));

	// LOGO
	this.instance_1 = new lib.LOGO();
	this.instance_1.setTransform(18.1,40.1,0.2,0.2,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(159));

	// HEAD1
	this.instance_2 = new lib.HEAD1();
	this.instance_2.setTransform(346.1,208,1,1,0,0,0,446.1,208);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regX:446.4,x:446.4,alpha:1},19,cjs.Ease.quadOut).wait(139));

	// HEAD2
	this.instance_3 = new lib.HEAD2();
	this.instance_3.setTransform(77.5,29.2,1,1,0,0,0,77.5,29.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({alpha:1},19,cjs.Ease.quadOut).wait(81));

	// CAMPAIGN
	this.instance_4 = new lib.CAMPAIGN();
	this.instance_4.setTransform(10.25,584.6,1.4,1.4,0,0,0,105,23.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(114).to({_off:false},0).to({x:167},16,cjs.Ease.quintOut).wait(29));

	// PIC
	this.instance_5 = new lib._300x600Trains();
	this.instance_5.setTransform(0,218,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(159));

	// BKGD
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F5FA3").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(159));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(13.3,299.5,287.2,301);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 600,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/More_than_trains_DV360_Display__300x600_atlas_P_1.png", id:"More_than_trains_DV360_Display__300x600_atlas_P_1"},
		{src:"images/More_than_trains_DV360_Display__300x600_atlas_NP_1.jpg", id:"More_than_trains_DV360_Display__300x600_atlas_NP_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;