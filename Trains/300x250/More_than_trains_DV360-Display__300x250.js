(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"More_than_trains_DV360_Display__300x250_atlas_P_1", frames: [[0,0,1200,300]]},
		{name:"More_than_trains_DV360_Display__300x250_atlas_NP_1", frames: [[0,0,600,200]]}
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



(lib._300x250Trains = function() {
	this.initialize(ss["More_than_trains_DV360_Display__300x250_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PoVHorizWhite = function() {
	this.initialize(ss["More_than_trains_DV360_Display__300x250_atlas_P_1"]);
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


(lib.HEAD2Trains300x250svg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgJALQgEgEgBgHQABgHAEgDQAEgDAFAAQAHAAADADQAFADgBAHQABAHgFAEQgEADgGAAQgFAAgEgDg");
	this.shape.setTransform(221.15,102.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAuIgNgEIAAgVIAPAGIAPACQAIAAACgCQADgCAAgEIgBgEIgFgEIgNgHQgGgCgIgEQgFgDgDgFQgCgEAAgJQAAgNAJgGQAJgHARAAQAIAAAHACIAQAFIgHASIgNgEQgFgCgHAAQgEAAgDACQgDABAAADIACAEIAFAEIALAFIAOAGQAFADAEAFQACAFAAAJQAAAKgDAFQgEAGgKAEQgKADgKABQgJgBgIgBg");
	this.shape_1.setTransform(214.65,98.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBAIAAh+IAZAAIAAB+g");
	this.shape_2.setTransform(207.9,96.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAsQgIgDgGgGQgGgGgDgJQgDgKAAgKQAAgOAFgLQAFgJALgHQAKgFAMAAQAMAAALAFQAKAGAGAKQAFALAAAOQAAAMgDAIQgDAJgGAGQgFAGgJADQgIADgKAAQgIAAgJgDgAgNgTQgFAHAAAMQAAAKACAFQADAGADADQAEAEAGAAQAHAAAEgEQAEgDACgGQACgFAAgKQAAgIgCgGQgCgGgEgDQgEgDgHAAQgJAAgEAHg");
	this.shape_3.setTransform(200.175,98.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAsQgIgDgGgGQgHgHgCgIQgDgJAAgLQAAgPAFgKQAFgKAKgGQAKgFANAAQANAAAKAFQAKAGAFAKQAGAKAAAPIAAAAQAAALgDAJQgDAJgGAGQgFAGgJADQgIADgKAAQgJAAgIgDgAgOgTQgEAHAAAMQAAAHACAIQACAGAEADQAEAEAGAAQAHAAAEgEQAEgDACgGQABgGAAgJQAAgIgBgGQgDgGgEgDQgDgDgHAAQgJAAgFAHg");
	this.shape_4.setTransform(189.875,98.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARBAIAAg1QAAgJgDgGQgEgEgIAAQgGgBgEAEQgFADgBAGQgCAGAAALIAAArIgZAAIAAh+IAZAAIgBAvIABAAQACgEAFgEIAJgEIAJgCQAJAAAJAEQAHAEAEAHQAEAHAAALIAAA8g");
	this.shape_5.setTransform(179.225,96.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAGAwQgLAAgLgGQgJgEgGgLQgFgMAAgOQAAgPAGgMQAGgKAKgGQALgEALgBQAIABAJACQAHABAFADIgIATIgLgEQgEgBgGAAQgHgBgCAEQgEADgDAGQgCAFAAAKQAAAJACAFQACAFAFAEQADADAGAAQAJAAAFgCQAHgCAFgEIAAAVQgFAEgHACQgGACgKAAg");
	this.shape_6.setTransform(169.525,98.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAuIgNgEIAAgVIAPAGIAPACQAHAAADgCQADgCAAgEIgBgEIgGgEIgMgHQgHgCgHgEQgFgDgDgFQgDgEAAgJQAAgNAKgGQAJgHAQAAQAJAAAHACIAQAFIgHASIgNgEQgGgCgGAAQgFAAgCACQgDABAAADIABAEIAGAEIALAFIANAGQAGADADAFQADAFAAAJIABAAQAAAJgFAGQgEAGgJAEQgKADgKABQgKgBgHgBg");
	this.shape_7.setTransform(161.025,98.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLBAIAAh+IAXAAIAAB+g");
	this.shape_8.setTransform(149.9,96.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAtQgGgEgEgGQgEgHAAgJQAAgPALgGQAJgHAUAAIAQgBIAAgEQAAgIgEgCQgEgEgGAAIgMACIgNAFIgIgRIAQgGQAIgCAKAAIAAgBQATABAJAHQAKAIAAARIAAA8IgSAAIgEgNIgBAAIgIAIQgEAEgFABQgEABgIABQgJAAgGgDgAgJAIQgFAEAAAHQAAAGADACQAEACAFAAQAHAAAGgFQAFgEAAgJIAAgIIgJAAQgMACgEADg");
	this.shape_9.setTransform(142.025,98.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAqQgJgEgFgLQgFgKgBgQQAAgPAGgMQAHgLAJgFQALgEALgBQAHABAJACQAIABAEADIgGATIgMgEIgKgBQgHgBgDAEQgDADgDAGQgCAFAAAKQAAAIACAGQADAGAEADQAEADAFAAQAJAAAFgCIAMgGIAAAVQgGAEgGACQgGACgKAAQgLAAgLgGg");
	this.shape_10.setTransform(133.1,98.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAsQgIgDgGgGQgGgGgDgJQgDgIAAgMQAAgOAFgLQAFgKALgGQAKgFAMAAQANAAAKAFQAKAGAGAKQAFALAAAOQAAAMgDAIQgDAJgGAGQgGAGgIADQgIADgKAAQgJAAgIgDgAgNgTQgFAHAAAMQAAAKACAFQACAGAEADQAEAEAGAAQAHAAAEgEQAEgDACgGQACgFAAgKQAAgIgCgGQgCgGgEgDQgFgDgGAAQgKAAgDAHg");
	this.shape_11.setTransform(123.525,98.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLBAIAAh+IAYAAIAAB+g");
	this.shape_12.setTransform(115.8,96.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFA1QgGgCgEgHQgEgHAAgLIAAgrIgMAAIAAgLIAOgIIAHgTIAPAAIAAATIAaAAIAAATIgaAAIAAArQAAAGADACQADACAFAAIAQgDIAAATQgFACgFABQgGABgHAAQgJAAgFgDg");
	this.shape_13.setTransform(105.225,97.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAvIAAhaIATAAIAEAPIABAAQADgFADgEQADgEAGgCQAGgDAFAAIAAAAIAJACIgCAWIgEAAIgEAAIgJABIgIAEQgDACgCAFQgCAFAAAGIAAAug");
	this.shape_14.setTransform(98.375,98.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRAsQgJgDgFgGQgFgFgEgKQgDgJAAgLQAAgOAFgLQAFgKAKgGQALgFAMAAQANAAAKAFQALAHAEAJQAGALAAAOQAAAMgDAIQgDAJgGAGQgGAGgIADQgIADgKAAQgJAAgIgDgAgOgTQgEAGAAANQAAAKACAFQACAGAEADQAEAEAGAAQAHAAAEgEQAEgDACgGQACgIAAgHQAAgIgCgGQgCgGgEgDQgFgDgGAAQgJAAgFAHg");
	this.shape_15.setTransform(88.925,98.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpBCIAAiBIATAAIAEAMIABAAIAGgIQAEgCAEgCIALgCIAAgBQAPAAAKANQAJAMAAAXQABAPgFAKQgEALgJAFQgHAFgLAAQgFABgFgCIgIgFIgGgFIgBAAIABAGIAAArgAgKgqQgEACgBAGIgCANIAAADQAAAJACAFQABAGAEADQAFADAGAAQAFAAAEgDQAEgDABgGQACgFAAgJQAAgNgEgIQgEgGgJAAQgFAAgFADg");
	this.shape_16.setTransform(78.75,100.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgpBCIAAiBIAUAAIAEAMIABAAIAFgIIAIgEQAFgCAHAAIAAgBQAPAAAJANQAJALAAAYQAAAPgEAKQgEAKgIAGQgJAFgJAAQgFABgGgCQgEgBgEgEIgFgFIgCAAIACANIAAAkgAgJgqQgEACgCAGQgBAEAAAJIAAADQgBAIACAGQACAGAEADQAEADAGAAQAFAAAEgDQAEgDABgGQADgHAAgHQAAgNgFgIQgEgGgIAAIgBAAQgFAAgEADg");
	this.shape_17.setTransform(68.15,100.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZArQgJgEgDgHQgEgHAAgMIAAg6IAZAAIAAA0QAAAJADAFQAEAGAIAAQAGgBAFgDQAEgEACgGQACgJAAgHIAAgqIAYAAIAABaIgTAAIgEgMIAAAAQgDAEgFADQgFAEgFABIgJACQgJgBgIgDg");
	this.shape_18.setTransform(57.1,98.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTAuIgOgEIAAgVIAQAGIAOACQAIAAACgCQADgCAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBgFgDIgLgHQgIgCgHgEQgFgDgDgFQgCgEAAgJQAAgNAJgGQAJgHARAAQAIAAAIACQAKACAGADIgIASIgNgEQgFgCgHAAQgEAAgDACQgDABAAADIACAEIAFAEIALAFQAIACAFAEQAHADACAFQAEAFAAAJQAAAJgFAGQgEAGgJAEQgJADgMABQgIgBgHgBg");
	this.shape_19.setTransform(47.55,98.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSAqQgLgFgGgKQgGgKAAgQQAAgPAGgLQAFgLAJgFQALgFALAAIABAAQALAAAKAFQAKAFAEAJQAFAJAAANIAAAMIg5AAQgBAJAHAHQAFAGAKAAIAQgCQAHgBAIgEIAAATIgOAFQgIABgKAAQgOAAgJgFgAgJgYQgFAFgBAKIAiAAQAAgGgCgEQgDgFgDgCQgCgCgHAAQgHAAgEAEg");
	this.shape_20.setTransform(34.05,98.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAWA8IgWhaIgUBaIgdAAIgfh2IAZAAIAUBXIABAHIADgPIAUhPIAXAAIAVBPIACAPIACgKIAThUIAZAAIgeB2g");
	this.shape_21.setTransform(21.025,97.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0C5FA3").s().p("AjNDIIAAmPIGbAAIAAGPg");
	this.shape_22.setTransform(20.625,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222.6,107.3);


(lib.HEAD1Trains300x250svg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgJALQgEgDAAgIQAAgHAEgDQAEgDAFAAQAGAAAEADQAEADAAAHQAAAIgEADQgFADgFAAQgEAAgFgDg");
	this.shape.setTransform(164.725,82.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAuIgNgEIAAgVIAQAGIAPACQAGAAADgCQADgCAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgGgEIgMgGQgIgEgGgDQgFgDgDgFQgDgFAAgIQAAgNAKgGQAKgHAPABQAJAAAIABIAPAFIgHASIgNgEQgFgCgHAAQgEAAgDACQgDABAAADIABAEIAGADIALAGQAJAEAEADQAHADACAEQADAFAAAJIABAAQAAAJgFAGQgEAHgJADQgKAEgKgBQgJABgIgCg");
	this.shape_1.setTransform(158.225,78.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAvIAAg1QAAgJgDgGQgEgEgIAAQgKAAgEAHQgEAJAAAMIAAAsIgZAAIAAhbIATAAIADAMIABAAQADgFAFgDIAJgEIAKgBIABAAQAOAAAJAIQAJAIAAARIAAA7g");
	this.shape_2.setTransform(148.575,78.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMA/IAAhZIAZAAIAABZgAgIgpQgFgDAAgGQAAgHAFgDQAEgCAEAAQAGAAAEACQADACAAAIQAAAGgDADQgEADgGAAQgFAAgDgDg");
	this.shape_3.setTransform(140.5,76.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAtQgHgEgDgGQgEgGAAgKQAAgPAKgGQALgGATgBIAQgBIAAgEQAAgIgEgDQgFgDgFAAQgEAAgIACIgNAFIgIgRQAGgDAKgDQAIgCAKAAIAAAAQASAAAKAIQAKAIAAAQIAAA7IgSAAIgFgLIAAAAIgIAIQgEACgGACQgEACgIgBQgHAAgHgCgAgJAIQgFAEAAAHQAAAFADADQAEACAFAAQAHAAAFgFQAGgEAAgKIAAgHIgKAAQgLABgEAEg");
	this.shape_4.setTransform(132.625,78.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARA/IAAg1QAAgJgEgFQgDgEgHAAQgIAAgDADQgEACgCAHQgCAHAAAJIAAArIgZAAIAAh9IAZAAIAAAmIgCAJIACAAQADgEAEgEQAEgDAFgBQADgBAHAAQAIgBAIAEQAJAEADAHQAEAIAAAKIAAA7g");
	this.shape_5.setTransform(122.4,76.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQArQgJgGgGgKQgEgKAAgRQgBgOAGgMQAGgLAKgFQALgEAMAAQAHAAAIACQAHABAGADIgIATIgKgEIgLgBQgHAAgDADQgEADgCAGQgCAFAAAJQAAAKACAGQADAFAEADQADADAHAAQAHAAAGgCIAMgGIAAAVQgFAEgHABQgGACgKAAQgLAAgLgEg");
	this.shape_6.setTransform(112.7,78.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpBAIAAgUIAEABIAGAAQAGAAADgBQAEgCACgFQACgCACgGIACgEIglhZIAcAAIASA3IABAKIAAAAIAEgOIARgzIAbAAIgoBlQgBAHgHAJQgGAHgGACQgIADgIAAg");
	this.shape_7.setTransform(99.25,80.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMA/IAAh9IAZAAIAAB9g");
	this.shape_8.setTransform(91.9,76.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqBCIAAiBIAUAAIAEALIABAAIAGgHIAIgEQAHgCAEAAQAQAAAJAMQAKALgBAYQABAQgFAJQgFALgHAFQgIAFgKAAQgHAAgEgBQgEgCgEgDIgFgFIgCAAIABAGIABArgAgJgrQgEADgBAFQgCAFAAAJIAAADQgBAJACAGQACAEAEAEQADADAHAAQAFAAAEgDQADgDACgFQACgGAAgJQAAgPgEgFQgEgHgIAAIgBAAQgFAAgEACg");
	this.shape_9.setTransform(84.35,80.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpBCIAAiBIAUAAIADALIABAAIAGgHQAEgDAEgBQAFgCAGAAQAPAAAKAMQAJAMAAAXQABAQgFAJQgEALgJAFQgHAFgLAAQgGAAgEgBQgFgCgDgDIgGgFIgBAAIABAGIAAArgAgKgrQgEAEgBAEIgCAOIAAADQAAAJACAGQABAEAEAEQAFADAGAAQAFAAAEgDQAEgEABgEQACgGAAgJQAAgOgEgGQgEgIgJABQgEgBgGADg");
	this.shape_10.setTransform(73.8,80.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaArQgGgDgFgIQgEgIAAgLIAAg6IAZAAIAAA0QAAAJAEAGQAEAFAHAAQAGAAAEgEQAFgDACgHQACgHgBgIIAAgrIAZAAIAABaIgTAAIgDgMIgCAAQgDAFgEADQgDADgHABIgKABQgJAAgIgDg");
	this.shape_11.setTransform(62.7,78.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAuIgPgEIAAgVIARAGIAPACQAGAAADgCQADgCAAgEIgBgEIgGgEIgLgGQgJgDgGgEQgFgDgDgFQgCgFgBgIQABgNAJgGQAKgHAPABQAJAAAIABIAQAFIgIASIgMgEQgGgCgHAAQgEAAgDACQgDABAAADIABAEIAGADIALAGQAJAEAFADQAGADADAEQADAFAAAJQAAAJgFAGQgDAGgJAEQgLAEgKgBQgKABgGgCg");
	this.shape_12.setTransform(53.15,78.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AggA0QgKgLAAgYQAAgXAKgLQAKgMAPAAQAHAAAEABQAGADACACIAHAHIAAAAIgBgIIAAgnIAZAAIAAB+IgUAAIgEgMIgBAAIgGAHQgEADgFABQgDACgHAAQgPAAgKgMgAgMgCQgFAGAAANQAAAOAFAGQAFAHAHAAQAKAAAFgGQAEgHAAgLIAAgDQAAgNgEgGQgEgHgLAAQgIAAgEAHg");
	this.shape_13.setTransform(39.075,77.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AARAvIAAg1QAAgJgDgGQgEgEgHAAQgLAAgEAHQgEAIAAANIAAAsIgZAAIAAhbIATAAIADAMIACAAQACgFAFgDIAKgEIAKgBQAOAAAJAIQAJAIAAARIAAA7g");
	this.shape_14.setTransform(28.575,78.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaAtQgGgEgEgGQgEgHAAgJQAAgPALgGQAJgGAUgBIAQgBIAAgEQAAgIgEgDQgEgDgGAAIgMACIgNAFIgIgRIAQgGQAIgCAKAAIAAAAQATAAAJAIQAKAIAAAQIAAA7IgSAAIgEgLIgBAAIgIAIQgEACgFACQgEACgIgBQgJAAgGgCgAgJAIQgFAEAAAHQAAAFADADQAEACAFAAQAHAAAGgFQAFgEAAgKIAAgHIgJAAQgMABgEAEg");
	this.shape_15.setTransform(17.725,78.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAuQgGAAgHgEIAAgUIAPAFQAIACAHAAQAHAAADgCQADgCAAgEIgBgEIgGgEIgMgGQgIgEgGgDQgFgDgDgFQgDgGAAgHQAAgNAKgGQAJgGAQAAQAKAAAGABQAHACAJAEIgHASIgNgFQgFgCgHAAQgFAAgCABQgDACAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAGADIALAGIANAHQAGACADAFQADAGAAAHIABAAQAAAKgFAGQgEAGgJAEQgKADgKAAQgKAAgHgBg");
	this.shape_16.setTransform(201.775,58.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AASAuIAAg0QAAgJgFgFQgCgGgJAAQgKAAgEAJQgEAGAAAOIAAArIgZAAIAAhaIATAAIADAMIACAAQADgEAEgDQACgDAIgCIAKgBIAAAAQAPAAAJAIQAIAIAAARIAAA6g");
	this.shape_17.setTransform(192.1,58.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMA/IAAhaIAZAAIAABagAgJgoQgDgDgBgHQABgHADgDQAFgDAEAAQAGAAAEADQAEADAAAHQAAAGgEAEQgEACgGAAQgFAAgEgCg");
	this.shape_18.setTransform(184.05,56.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaAsQgHgEgDgFQgEgGAAgLQAAgOAKgGQALgGATgBIAQgBIAAgEQAAgIgEgDQgFgDgFAAQgHAAgFACIgNAFIgIgRQAGgDAKgDQAKgDAHABIABAAQARgBALAJQAKAIAAAQIAAA7IgSAAIgFgLIAAAAIgIAHQgEADgGACQgEABgIAAQgIAAgGgDgAgKAIQgEAFAAAFQAAAHADABQADADAGAAQAHAAAFgEQAGgFAAgJIAAgHIgKAAQgKAAgGAEg");
	this.shape_19.setTransform(176.175,58.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdAuIAAhaIATAAIAEAQIABAAQACgEAEgFQADgDAGgDQAEgCAHAAIAFAAIAEAAIgCAYIgEgBIgEAAIgJABQgGACgCACQgDADgCAEQgCAEAAAGIAAAug");
	this.shape_20.setTransform(168.075,58.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFA1QgGgCgEgHQgEgGAAgMIAAgrIgMAAIAAgLIAOgIIAHgTIAPAAIAAATIAaAAIAAATIgaAAIAAArQAAAGADACQAEACAEAAIAQgDIAAATIgKADQgGABgHAAQgJAAgFgDg");
	this.shape_21.setTransform(160.125,57.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AARAuIAAg0QAAgIgDgGQgEgGgIAAQgKAAgEAJQgEAIAAAMIAAArIgZAAIAAhaIATAAIADAMIABAAQADgEAFgDQADgDAGgCIALgBIAAAAQAOAAAJAIQAJAIAAARIAAA6g");
	this.shape_22.setTransform(146.775,58.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgaAsQgHgEgDgFQgEgGAAgLQAAgOAKgGQALgGATgBIAQgBIAAgEQAAgIgEgDQgFgDgFAAQgHAAgFACIgNAFIgIgRQAGgDAKgDQAKgDAIABQARgBALAJQAKAIAAAQIAAA7IgSAAIgFgLIAAAAQgDADgFAEQgDADgHACQgEABgIAAQgIAAgGgDgAgJAIQgFAFAAAFQAAAGADACQADADAGAAQAHAAAFgEQAGgFAAgJIAAgHIgKAAQgLAAgEAEg");
	this.shape_23.setTransform(135.925,58.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AARA/IAAg1QAAgJgDgEQgEgGgIAAQgHABgEADQgEAEgCAFQgCAJAAAHIAAArIgYAAIAAh+IAZAAIgBAnIgBAJIACAAQADgFAEgCQAEgEAFgBQAEgCAFABQAJAAAIADQAIADAEAIQAEAIAAAKIAAA7g");
	this.shape_24.setTransform(125.7,56.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFA1QgHgCgDgHQgEgGABgMIAAgrIgNAAIAAgLIAOgIIAIgTIAOAAIAAATIAZAAIAAATIgZAAIAAArQAAAGADACQAEACAEAAIAIgBIAHgCIAAATQgDACgHABQgEABgIAAQgIAAgGgDg");
	this.shape_25.setTransform(116.5,57.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgSAqQgLgFgGgKQgGgLAAgQQAAgOAFgLQAFgKAKgGQAKgFAMAAQANAAAJAEQAJAGAFAJQAFAKAAAMIAAALIg6AAQABALAGAGQAGAGAJAAQAKAAAGgCQAHgCAIgEIAAAUIgOAFIgSABQgMAAgLgFgAgKgYQgEAFgBAJIAiAAQAAgGgCgEQgCgEgEgCQgDgDgHAAQgGAAgFAFg");
	this.shape_26.setTransform(103.675,58.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgdAuIAAhaIATAAIAEAQIABAAQADgFADgEQADgEAGgCQAEgCAHAAIAFAAIAEAAIgCAYIgEgBIgEAAIgJABQgFABgDADQgDACgCAFQgCAEAAAGIAAAug");
	this.shape_27.setTransform(95.425,58.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRAsQgIgDgGgGQgGgGgDgJQgDgIAAgMQAAgOAFgLQAFgKALgGQAKgFAMAAQANAAAKAFQAKAGAFAKQAGALAAAOQAAALgDAJQgDAJgGAGQgGAGgIADQgJADgJAAQgKAAgHgDgAgNgTQgFAGAAANQAAAJACAGQACAGAEADQAFADAFAAQAHAAAEgDQAEgDACgGQACgIAAgHQAAgJgCgFQgCgFgEgEQgFgDgGAAQgJAAgEAHg");
	this.shape_28.setTransform(85.975,58.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAsAuIAAg0QAAgJgDgFQgDgGgIAAQgJAAgFAIQgEAHAAAMIAAAtIgYAAIAAg0QAAgGgBgFQgCgDgDgDQgDgCgEgBQgHABgEADQgEAEgCAHQgBAHAAAHIAAArIgZAAIAAhaIATAAIADAMIABAAQADgEAEgDQAFgEAFgBIAKgBQAJAAAIADQAGAEAEAGIACAAQAFgIAGgCQAJgDAHAAIAAAAQAQAAAHAIQAIAHAAASIAAA6g");
	this.shape_29.setTransform(72.625,58.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgTAqQgKgEgGgLQgGgLAAgQQAAgQAFgJQAGgLAKgFQAJgFAMAAQANAAAJAEQAKAGAEAJQAFAIAAAOIAAALIg6AAQABALAFAGQAHAGAJAAQAKAAAGgCQAGgBAJgFIAAAUIgOAFIgSABQgNAAgLgFgAgKgYQgEAFgCAJIAiAAQAAgGgCgEQgBgEgEgCQgDgDgHAAQgGAAgFAFg");
	this.shape_30.setTransform(55.15,58.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgdAuIAAhaIATAAIAEAQIABAAIAGgJQADgEAGgCQAEgCAHAAIAFAAIAEAAIgCAYIgEgBIgEAAIgJABQgGACgCACQgDADgCAEQgCAEAAAGIAAAug");
	this.shape_31.setTransform(46.875,58.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgPAVIAIgoIAWAAIABABIgEANIgKAag");
	this.shape_32.setTransform(40.8,53.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgSAqQgKgEgHgLQgGgLAAgQQAAgOAGgLQAFgLAJgFQAKgFAMAAIABAAQAMAAAJAEQAKAGAEAJQAFAIAAAOIAAALIg5AAQgBAKAHAHQAFAGAKAAQAJAAAHgCQAHgCAIgEIAAAUIgOAFIgSABQgNAAgKgFgAgJgYQgFAFgBAJIAiAAQAAgGgCgEQgDgFgDgBQgCgDgHAAQgHAAgEAFg");
	this.shape_33.setTransform(34.05,58.675);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgxA8Igfh3IAZAAIAVBgIADgQIAUhQIAXAAIATBIIAEAYIAVhgIAZAAIgeB2IgdAAIgWhZIgEAcIgQA+g");
	this.shape_34.setTransform(21.025,57.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0C5FA3").s().p("AjNDIIAAmPIGbAAIAAGPg");
	this.shape_35.setTransform(20.625,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.3,87.3);


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


(lib.Campaigntypesvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Campaign type.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6CF72").s().p("AgFAHQgDgCAAgFQAAgDADgDQACgCADAAQADAAAEACQACADAAADQAAAFgDACQgCACgEAAQgEAAgBgCg");
	this.shape.setTransform(159.55,8.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6CF72").s().p("AgeAwIAAgLIAIAAQAKAAAEgMIACgGIgbhDIAQAAIAOAnQACAFABAJIAAAAIACgHIAQguIAQAAIgdBMQgHAVgSAAIgKgBg");
	this.shape_1.setTransform(154.5,7.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6CF72").s().p("AgLAUIAAgjIgKAAIAAgGIAKgGIAFgOIAIAAIAAAPIATAAIAAALIgTAAIAAAjQAAAGADACQACACAEAAIALgBIAAAKIgGACIgIABQgTAAAAgWg");
	this.shape_2.setTransform(148.625,5.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6CF72").s().p("AgGAvIAAhDIANAAIAABDgAgFggQgCgCAAgEQAAgEACgCQADgCACAAQADAAADACQACACAAAEQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(144.5,4.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D6CF72").s().p("AAPAjIAAgpQAAgHgDgEQgDgFgHAAQgIABgEAFQgEAFAAAMIAAAiIgPAAIAAhDIALAAIACAJIABAAQADgFAGgDQAGgCAFAAQAZAAAAAZIAAArg");
	this.shape_4.setTransform(138.825,6.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D6CF72").s().p("AgXAcQgGgGAAgMIAAgrIAPAAIAAAoQAAAIADADQADAFAHAAQAIgBAEgFQAEgFAAgMIAAghIAPAAIAABCIgMAAIgCgJIAAAAQgDAFgGADQgGACgFAAQgNAAgGgGg");
	this.shape_5.setTransform(130.825,6.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D6CF72").s().p("AAjAjIAAgpQAAgIgDgEQgDgDgGgBQgJAAgDAGQgEAFAAALIAAAjIgNAAIAAgpQAAgHgDgEQgDgFgGAAQgIABgFAFQgDAFAAAMIAAAiIgPAAIAAhDIALAAIACAJIABAAQADgGAFgCQAGgCAGAAQAPgBAFALIABAAQADgFAFgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAArg");
	this.shape_6.setTransform(120.925,6.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D6CF72").s().p("AAjAjIAAgpQAAgIgDgEQgDgDgGgBQgJAAgDAGQgEAFAAALIAAAjIgNAAIAAgpQAAgHgDgEQgDgFgGAAQgJABgEAFQgEAGAAALIAAAiIgOAAIAAhDIALAAIACAJIABAAQACgFAGgDQAGgCAGAAQAPgBAFALIABAAQADgFAFgDQAGgCAGAAQAMAAAGAGQAGAHAAAMIAAArg");
	this.shape_7.setTransform(108.975,6.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D6CF72").s().p("AgQAfQgHgFgEgIQgEgIAAgKQAAgPAJgKQAIgJAOAAQAOAAAKAJQAIAKAAAPQAAAQgIAKQgJAJgPAAQgIAAgIgEgAgMgQQgEAGAAAKQAAAXAQAAQARAAAAgXQAAgWgRAAQgIAAgEAGg");
	this.shape_8.setTransform(99.15,6.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D6CF72").s().p("AAGAjQgOAAgJgJQgIgJAAgRQAAgPAJgKQAIgJAPAAQAKAAAJAEIgEALQgLgDgEAAQgRAAAAAWQAAAMAFAFQAEAGAHAAQAJAAAJgFIAAANQgEACgEABIgIABIgCAAg");
	this.shape_9.setTransform(92.325,6.1063);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D6CF72").s().p("AgUAjIAAhDIAMAAIACAMIABAAQADgGAEgEQAFgDAHAAIAAAAIAHABIgBAMIgHAAQgIAAgFAGQgFAFAAAJIAAAjg");
	this.shape_10.setTransform(83.6,6.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D6CF72").s().p("AgXAcQgGgGAAgMIAAgrIAPAAIAAAoQAAAIADADQADAFAHAAQAIgBAEgFQAEgGAAgLIAAghIAPAAIAABCIgMAAIgCgJIAAAAQgDAFgGADQgFACgGAAQgNAAgGgGg");
	this.shape_11.setTransform(76.525,6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D6CF72").s().p("AgPAfQgJgFgDgIQgEgIAAgKQAAgPAJgKQAIgJAOAAQAPAAAIAJQAJAKAAAPQAAARgJAJQgIAJgPAAQgJAAgGgEgAgMgQQgEAGAAAKQAAAXAQAAQASAAgBgXQAAgWgRAAQgHAAgFAGg");
	this.shape_12.setTransform(68.75,6.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D6CF72").s().p("AgZAsQgHgEAAgJQAAgHAEgEQAEgEAHgCIgFgEIgCgFQAAgEACgCIAHgFQgGgDgDgEQgDgGAAgGQAAgLAHgGQAHgGANAAIAJABIAYAAIAAAIIgMACQACACABADIABAHQAAALgHAFQgIAGgLAAIgGAAQgFACAAADQAAABAAAAQABABAAAAQAAABABAAQAAAAABABQABABAHAAIAKAAQALAAAGAFQAGAEAAAJQAAAMgJAGQgKAGgQAAQgPAAgHgFgAgPAWQgEADAAAFQAAAFAEACQADACAJAAQAKAAAGgDQAGgDAAgGQAAgEgDgCQgDgCgJAAIgKAAQgGAAgDADgAgKgkQgDAEAAAGIAAABQAAAGADADQAEAEAGAAQALAAAAgOQAAgGgDgEQgDgDgFAAQgGAAgEADg");
	this.shape_13.setTransform(58.175,7.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D6CF72").s().p("AAPAjIAAgpQAAgIgDgDQgDgFgHAAQgIABgEAFQgFAGAAALIAAAiIgOAAIAAhDIALAAIACAJIABAAQADgFAGgDQAFgCAGAAQAZAAAAAZIAAArg");
	this.shape_14.setTransform(50.825,6.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D6CF72").s().p("AgGAvIAAhDIAOAAIAABDgAgFggQgCgCAAgEQAAgDACgDQADgCACAAQADAAADACQACACAAAEQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_15.setTransform(45.05,4.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D6CF72").s().p("AgUAjIAAhDIAMAAIACAMIAAAAQAEgGAEgEQAFgDAGAAIAAAAIAIABIgCAMIgHAAQgIAAgEAGQgFAFAAAJIAAAjg");
	this.shape_16.setTransform(41.05,6.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D6CF72").s().p("AgPAfQgJgFgDgIQgEgIAAgKQAAgPAJgKQAIgJAOAAQAPAAAJAJQAIAKAAAPQAAARgIAJQgJAJgPAAQgJAAgGgEgAgMgQQgEAGAAAKQAAAXAQAAQARAAAAgXQAAgWgRAAQgIAAgEAGg");
	this.shape_17.setTransform(34.1,6.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D6CF72").s().p("AAPAwIAAgqQAAgGgDgEQgDgFgHAAQgIABgEAFQgEAEAAANIAAAiIgPAAIAAhfIAPAAIgBAlIABAAQADgGAFgCQAFgCAGAAQAZAAAAAYIAAAsg");
	this.shape_18.setTransform(26.375,4.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D6CF72").s().p("AAGAjQgOAAgJgJQgIgIAAgSQAAgPAJgKQAIgJAPAAQAKAAAJAEIgEALQgMgDgDAAQgRAAAAAWQAAAMAEAFQAFAGAHAAQAJAAAJgFIAAANQgEACgEABIgIABIgCAAg");
	this.shape_19.setTransform(19.375,6.1063);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D6CF72").s().p("AAPAjIAAgpQAAgHgDgEQgCgFgIAAQgIABgEAFQgEAGAAALIAAAiIgPAAIAAhDIAMAAIACAJIAAAAQADgFAGgDQAGgCAGAAQAYAAAAAZIAAArg");
	this.shape_20.setTransform(12.225,6.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D6CF72").s().p("AAaAtIgJgZIghAAIgJAZIgPAAIAhhZIAPAAIAhBZgAgMAHIAZAAIgNgmg");
	this.shape_21.setTransform(4.125,5.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160.5,12.5);


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
	this.instance = new lib.HEAD2Trains300x250svg("synched",0);
	this.instance.setTransform(114,87,1,1,0,0,0,114,87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(0,0,222.6,107.3), null);


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
	this.instance = new lib.HEAD1Trains300x250svg("synched",0);
	this.instance.setTransform(124.7,68.9,1,1,0,0,0,124.7,68.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,205.3,87.3), null);


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

	// svg
	this.instance = new lib.Campaigntypesvg("synched",0);
	this.instance.setTransform(76.05,-3.3,1,1,0,0,0,80.2,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CAMPAIGN, new cjs.Rectangle(-4.1,-9.5,160.4,12.5), null);


// stage content:
(lib.More_than_trains_DV360Display__300x250 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(159));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(243.05,128.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(148).to({scaleX:1.16,scaleY:1.16},2).to({scaleX:1,scaleY:1},6).wait(3));

	// LOGO
	this.instance_1 = new lib.LOGO();
	this.instance_1.setTransform(11.05,22.05,0.14,0.14,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(159));

	// HEAD1
	this.instance_2 = new lib.HEAD1();
	this.instance_2.setTransform(346.2,208.1,1,1,0,0,0,446.2,208.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({x:446.2,alpha:1},19,cjs.Ease.quadOut).wait(139));

	// HEAD2
	this.instance_3 = new lib.HEAD2();
	this.instance_3.setTransform(77.3,29.2,1,1,0,0,0,77.3,29.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({alpha:1},19,cjs.Ease.quadOut).wait(81));

	// CAMPAIGN
	this.instance_4 = new lib.CAMPAIGN();
	this.instance_4.setTransform(-65,154.7,1,1,0,0,0,105,23.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(114).to({_off:false},0).to({x:123.5},16,cjs.Ease.quintOut).wait(29));

	// PIC
	this.instance_5 = new lib._300x250Trains();
	this.instance_5.setTransform(0,150,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(159));

	// BKGD
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F5FA3").s().p("A3bLuIAA3bMAu3AAAIAAXbg");
	this.shape_1.setTransform(150,75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(159));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-24.2,124.5,324.7,126);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 250,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/More_than_trains_DV360_Display__300x250_atlas_P_1.png", id:"More_than_trains_DV360_Display__300x250_atlas_P_1"},
		{src:"images/More_than_trains_DV360_Display__300x250_atlas_NP_1.jpg", id:"More_than_trains_DV360_Display__300x250_atlas_NP_1"}
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