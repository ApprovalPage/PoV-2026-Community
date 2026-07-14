(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"More_than_buildings_DV360_Display__160x600_atlas_P_1", frames: [[0,0,1200,300]]},
		{name:"More_than_buildings_DV360_Display__160x600_atlas_NP_1", frames: [[0,0,600,568]]}
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



(lib._300x600Buildings = function() {
	this.initialize(ss["More_than_buildings_DV360_Display__160x600_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PoVHorizWhite = function() {
	this.initialize(ss["More_than_buildings_DV360_Display__160x600_atlas_P_1"]);
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


(lib.HEAD2Buildings160x600svg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgJALQgFgDABgIQgBgHAFgDQAEgDAFAAQAGAAAFADQADADABAHQgBAIgDADQgFADgGAAQgFAAgEgDg");
	this.shape.setTransform(141.65,179.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTArQgKgEgHgMQgGgJAAgRQAAgQAGgLQAFgKAKgFQALgGALAAQANAAAJAFQAKAGAEAIQAGAKAAANIAAALIg7AAQABAMAFAFQAGAHAKAAQAGAAAKgDQAHgBAIgEIAAATQgGAEgIACQgIABgKAAQgOAAgKgFgAgKgYQgFAFgBAJIAjAAQAAgDgCgHIgGgHQgEgCgGAAIAAAAQgGAAgFAFg");
	this.shape_1.setTransform(134.275,175.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIATAAIAEAQIABAAIAGgJIAJgGQAFgCAHAAIAIABIgCAXIgHgBQgFAAgFACQgEABgEADQgDACgCAFQgCAEAAAGIAAAvg");
	this.shape_2.setTransform(125.825,175.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAsQgHgDgFgIQgEgIAAgMIAAg7IAZAAIAAA1QAAAKAEAFQADAFAIAAQAIAAAEgDQAEgFACgGQACgJAAgGIAAgsIAZAAIAABcIgUAAIgDgMIgBAAQgDAFgFADQgEADgGABIgKABQgKAAgHgDg");
	this.shape_3.setTransform(115.875,175.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFA2QgHgDgDgGQgEgHAAgMIAAgsIgMAAIAAgKIAOgJIAHgTIAPAAIAAATIAaAAIAAATIgaAAIAAAsQAAAGADACQAEADAEAAIAJgBIAHgCIAAATIgKADIgNABQgIAAgGgDg");
	this.shape_4.setTransform(106.525,174.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMBBIAAiBIAZAAIAACBg");
	this.shape_5.setTransform(100.325,174.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAsQgHgDgFgIQgEgIAAgMIAAg7IAaAAIAAA1QAAAKADAFQAEAFAIAAQAHAAAEgDQAEgEACgHQACgGAAgJIAAgsIAZAAIAABcIgTAAIgEgMIgBAAQgDAFgFADIgKAEIgKABQgKAAgHgDg");
	this.shape_6.setTransform(92.125,175.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQArQgKgEgFgMQgFgJAAgSQAAgQAFgKQAGgKAKgGQALgFANAAQAKAAAGACQAIACAEADIgIATIgKgEIgKgCQgIAAgCAEQgFADgCAGQgCAGAAAIQAAAIACAIQADAGAEADQADACAGAAQAIAAAGgCQAHgBAFgEIAAAVQgGAEgGACQgGABgKAAQgMAAgKgFg");
	this.shape_7.setTransform(82.3,175.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMBBIAAiBIAZAAIAACBg");
	this.shape_8.setTransform(70.825,174.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAtQgHgEgEgGQgDgGAAgKQAAgPAKgGQAKgHAUgBIAQAAIAAgEQAAgHgEgEQgEgEgGAAQgEAAgIACIgNAFIgJgRQAHgEAKgCQAIgCAKAAIAAAAQATAAAJAIQAKAJAAAQIAAA9IgRAAIgFgNIgBAAIgIAIQgEADgGACQgEABgIAAQgIAAgGgDgAAGAEQgLAAgFAEQgFAFAAAGQAAAGAEADQADACAGAAQAGAAAGgFQAGgEAAgJIAAgIg");
	this.shape_9.setTransform(62.825,175.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQArQgKgFgFgLQgFgKAAgRQAAgPAGgLQAGgLAKgFQAKgFANAAQAKAAAGACQAHACAFADIgHATIgLgEIgLgCQgGAAgEAEQgEADgCAGQgCAGAAAIQAAAKACAGQACAGAFADQADACAGAAQAJAAAFgCIAMgFIAAAVIgMAGQgGABgKAAQgNAAgJgFg");
	this.shape_10.setTransform(53.675,175.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAtQgIgDgHgHQgFgFgEgJQgDgJAAgMQAAgPAFgLQAGgKAKgFQAJgGAPAAQANAAAJAGQALAFAFAKQAGAMAAAOQAAAMgDAJQgEAKgFAEQgHAHgHADQgJADgKAAQgJAAgIgDgAgOgUQgEAIAAAMQAAAKACAFQACAGAEADQAEAEAGAAQAHAAAEgEQAEgCACgHQACgFAAgKQAAgJgCgFQgCgHgEgCQgFgEgGAAQgJABgFAGg");
	this.shape_11.setTransform(43.95,175.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMBBIAAiBIAZAAIAACBg");
	this.shape_12.setTransform(36.1,174.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUBBIAAhJIgOAAIAAgMIAOgHIAAgGQAAgNAEgGQAEgGAHgDQAIgDAJAAIANABIAKADIgHASIgNgCQgHAAgCADQgCAEAAAEIAAAHIAWAAIAAASIgWAAIAABJg");
	this.shape_13.setTransform(26.35,174);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSAtQgHgDgGgHQgGgFgEgJQgDgJAAgMQAAgPAGgLQAFgKAKgFQAKgGANAAQAOAAAKAGQAKAFAFAKQAGAMAAAOQAAAMgDAJQgDAIgGAGQgGAHgJADQgHADgLAAQgJAAgJgDgAgOgUQgEAIAAAMIAAAAQAAAKACAFQACAHAEACQAEAEAGAAQAHAAAEgEQAEgCACgHQACgFAAgKQAAgJgCgFQgCgHgEgCQgEgEgHAAQgKABgEAGg");
	this.shape_14.setTransform(17.25,175.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAvQgGgBgIgDIAAgVQAGADAKACQAKADAFAAQAGAAAEgDQADgCAAgDIgBgFIgGgEIgMgGQgHgDgHgEQgGgDgCgFQgDgFAAgIQAAgNAKgHQALgGAPAAQAJAAAHACQAHABAJAEIgHASIgNgFQgGgBgHAAQgEAAgDABQgDACAAADIACAEIAFAEIAZAMQAGACADAFQADAGAAAIQAAAJgEAHQgEAGgJAEQgLADgKAAQgKAAgHgBg");
	this.shape_15.setTransform(126.675,155.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIATAAIAEAQIABAAIAGgJIAJgGQAFgCAHAAIAEAAIAEAAIgCAYIgHgBQgFAAgFACQgEAAgEAEQgDACgCAFQgCAEAAAGIAAAvg");
	this.shape_16.setTransform(119.025,155.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTArQgLgFgGgKQgGgLAAgQQAAgOAGgMQAFgLAKgGQAJgFANAAQAOAAAIAFQAJAEAGAKQAFAKAAANIAAALIg7AAQAAALAGAGQAGAGAKABIAQgCQAGgBAKgFIAAATQgHAEgIACQgHABgLAAQgOAAgKgFgAgKgYQgFAFgBAKIAjAAQAAgGgCgFQgCgDgEgDQgEgDgGAAQgGAAgFAFg");
	this.shape_17.setTransform(109.675,155.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AARBBIgagmIgLAJIAAAdIgZAAIAAiAIAZAAIAABCIgBALIAAAAIAkgpIAdAAIglAnIAnA1g");
	this.shape_18.setTransform(100.05,153.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAGAwQgNAAgJgFQgKgEgFgLQgFgMAAgPQAAgQAGgLQAFgLALgFQAJgFANAAQALAAAGACQAHABAFADIgHAUIgLgEIgLgBQgGAAgEADQgEACgCAHQgDAGAAAJQAAAHADAIQACAFAEADQAEAEAGAAQAJAAAFgCIAMgGIAAAVQgIAFgEABQgGABgKAAg");
	this.shape_19.setTransform(89.825,155.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaAtQgIgEgCgGQgEgGAAgKQAAgPAKgGQALgHATgBIAQAAIAAgEQAAgIgDgDQgFgEgGAAIgMACIgNAFIgIgRQAGgEAKgCQAIgCAKAAIAAAAQATAAAJAIQAKAIAAARIAAA9IgRAAIgFgNIgBAAIgIAIQgEADgFACQgFABgIAAQgHAAgHgDgAAGAEQgKAAgGAFQgEAEAAAGQAAAGADADQADACAGAAQAHAAAGgFQAFgFAAgJIAAgHg");
	this.shape_20.setTransform(79.925,155.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHA+QgHgFgDgDIgCAAIgEAKIgTAAIAAiAIAZAAIAAAoIgBAIIABAAQAEgGAGgEQAHgEAIAAQAQAAAKAMQAJANAAAWQAAAQgEALQgEAKgJAGQgIAFgKAAQgKAAgFgDgAgJgHQgEACgCAFQgCAGAAAIIAAADQAAAOAEAHQAEAHAKAAQAIAAAEgHQAFgHAAgOQAAgMgFgIQgFgGgIAAIAAgBQgFAAgEADg");
	this.shape_21.setTransform(69.975,153.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgTArQgLgFgGgKQgGgLAAgQQAAgQAGgKQAFgMAKgFQAJgFANAAQANAAAJAFQAJAFAGAJQAFALAAAMIAAALIg7AAQABALAFAGQAGAGAKABQAGAAAKgCQAHgCAIgEIAAATQgGAEgIACQgHABgLAAQgOAAgKgFgAgKgYQgFAFgBAKIAjAAQAAgGgCgFQgDgEgDgCQgEgDgGAAQgGAAgFAFg");
	this.shape_22.setTransform(54.925,155.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIATAAIAEAQIABAAIAGgJIAJgGQAFgCAHAAIAEAAIAEAAIgCAYIgHgBIgKACQgEAAgEAEQgDACgCAFQgCAEAAAGIAAAvg");
	this.shape_23.setTransform(46.475,155.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgQAVIAJgpIAWAAIABACIgOAng");
	this.shape_24.setTransform(40.3,150.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgTArQgLgFgGgKQgGgLAAgQQAAgQAGgKQAFgMAKgFQAJgFANAAQANAAAJAFQAJAFAGAJQAFALAAAMIAAALIg7AAQABALAFAGQAGAGAKABQAGAAAKgCQAHgCAIgEIAAATQgGAEgIACQgIABgKAAQgOAAgKgFgAgKgYQgFAFgBAKIAjAAQAAgGgCgFQgDgEgDgCQgEgDgGAAQgGAAgFAFg");
	this.shape_25.setTransform(33.475,155.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAWA9IgWhcIgVBcIgdAAIgfh5IAZAAIAVBhIAEgYIAUhJIAXAAIASBDIAGAeIAUhhIAaAAIgeB5g");
	this.shape_26.setTransform(20.2,154.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0C5FA3").s().p("AjNDIIAAmPIGbAAIAAGPg");
	this.shape_27.setTransform(20.625,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143.1,180.7);


(lib.HEAD1Buildings160x600svg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgJALQgFgEAAgHQAAgHAFgDQAEgDAFAAQAGAAAEADQAFADAAAHQAAAHgFAEQgEADgGAAQgFAAgEgDg");
	this.shape.setTransform(91.875,138.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAvQgKgCgEgCIAAgVIAQAGQAIACAIAAQAHAAACgCQADgCAAgFIgBgDIgFgFIgNgGQgHgDgHgEQgHgEgBgEQgDgFAAgIQAAgMAKgIQAKgGAQAAQAIAAAIABQAKADAGADIgHASIgNgEQgGgCgHAAIgHABQgDABAAAEIACAEIAFAEIAZAMQAGACADAFQADAGAAAIQAAAKgEAGQgEAGgJAEQgJADgMAAIgRgBg");
	this.shape_1.setTransform(85.275,135.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjA9QgLgHAAgMQAAgIAGgGQAEgGALgCQgDgBgEgEQgDgEAAgFQAAgFADgCQAEgEAFgDQgHgDgEgHQgFgIAAgJQAAgJAFgIQAEgHAJgEQAJgDALAAIAPABIAhAAIAAANIgPAEIADAHIABAHQAAAPgKAJQgKAIgSAAIgIgBIgDADIgBADQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAABIAFABIAIABIAPAAQAOAAAJAHQAIAGAAANQAAARgOAIQgMAJgaAAQgUgBgJgGgAgQAeQgEABgBADQgDADAAADQAAAFAFAEQAGACAIAAIAAAAQAJAAAGgBQAHgCADgEQADgCAAgFQAAgEgCgBQgBgCgFgBIgWgBQgFAAgEACgAgLgvQgEAFAAAHQAAAHAEAGQAEAEAGAAQAHAAADgEQADgFAAgIQAAgIgDgEQgEgFgGAAQgGAAgEAFg");
	this.shape_2.setTransform(76.125,137.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASAvIAAg1QAAgJgEgGQgDgFgIAAQgLAAgEAIQgEAIAAANIAAAsIgaAAIAAhcIAUAAIADAMIABAAQADgFAFgDQAEgDAGgBIAKgBQAPAAAJAIQAJAIAAASIAAA7g");
	this.shape_3.setTransform(65.825,135.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBBIAAhcIAZAAIAABcgAgJgpQgEgDAAgHQAAgHAEgDQAFgDAEAAQAGAAAEADQAEACAAAIQAAAHgEADQgEACgGAAQgEAAgFgCg");
	this.shape_4.setTransform(57.625,133.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghA1QgJgLAAgZQAAgXAKgMQAKgMAPAAQAHAAAEACIAJAFIAGAHIABAAIgBgIIgBgoIAZAAIAACAIgTAAIgFgMIgBAAIgGAHIgJAFQgDABgHAAQgQAAgKgMgAgMgCQgFAGAAAOQAAAOAFAGQAFAHAIAAQAKAAAEgGQAFgGAAgNIAAgCQAAgNgEgHQgFgHgLAAQgHAAgFAHg");
	this.shape_5.setTransform(49.375,133.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMBBIAAiBIAYAAIAACBg");
	this.shape_6.setTransform(41.7,133.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLBBIAAhcIAXAAIAABcgAgJgpQgEgDAAgHQAAgHAEgDQAFgDAEAAQAFAAAFADQAEADAAAHQAAAHgEADQgFACgFAAQgEAAgFgCg");
	this.shape_7.setTransform(36.5,133.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAsQgIgEgEgHQgEgIAAgMIAAg7IAaAAIAAA1QAAAKADAFQAEAFAIAAQAGAAAFgDQAEgEACgHQACgGAAgJIAAgsIAZAAIAABcIgTAAIgEgMIgBAAQgDAFgFACQgGAEgEABIgKABQgKAAgHgDg");
	this.shape_8.setTransform(28.275,135.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHA+QgGgDgEgGIgCAAIgEALIgTAAIAAiAIAZAAIgBAwIABAAQAEgHAGgDQAGgDAKAAQAPgBAJAMQAKANAAAWQAAARgEAKQgDAKgKAHQgHAEgMAAQgJAAgFgDgAgKgHQgEADgBAEQgCAFAAAKIAAACQAAANAEAIQAEAHAKAAQAHAAAFgHQAFgIAAgNQAAgOgFgFQgFgIgIABQgFAAgFACg");
	this.shape_9.setTransform(17.65,133.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMBBIAAiBIAZAAIAACBg");
	this.shape_10.setTransform(136.275,112.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaAtQgHgDgEgHQgDgIAAgIQAAgPAKgGQALgHATgBIAQAAIAAgFQAAgGgEgEQgDgEgHAAQgHAAgFACIgNAFIgJgRIARgGQAIgCAKAAQASAAAKAIQAKAIAAARIAAA9IgRAAIgFgNIgBAAQgDAEgFAEQgEADgGACQgEABgIAAQgJAAgFgDgAgKAIQgFAFAAAGQAAAGAEACQAEADAFAAQAHAAAFgFQAGgFAAgJIAAgHIgKAAQgLABgFADg");
	this.shape_11.setTransform(128.275,114.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMBBIAAhcIAZAAIAABcgAgJgpQgEgDAAgHQAAgIAEgCQAEgDAFAAQAFAAAFADQAEADAAAHQAAAHgEADQgEACgGAAQgFAAgEgCg");
	this.shape_12.setTransform(120.825,112.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIATAAIAEAQIABAAIAGgJIAJgGQAFgCAHAAIAEAAIAEAAIgBAYIgIgBQgFAAgEACQgFABgEADQgDACgCAFQgCAFAAAFIAAAvg");
	this.shape_13.setTransform(114.85,114.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFA3QgHgDgDgHQgEgHAAgLIAAgsIgMAAIAAgLIAOgIIAHgUIAPAAIAAAUIAaAAIAAATIgaAAIAAAsQAAAFADADQAEACAEAAIAQgDIAAATIgKADIgNABQgIAAgGgCg");
	this.shape_14.setTransform(106.725,113.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAvIgOgEIAAgVIAQAGQAIABAHAAQAHAAADgBQADgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgDgEgCIgMgGIgOgHQgFgCgEgGQgCgGAAgHQAAgNAKgHQAJgGAQAAQAJAAAIACQAHABAJAEIgIASIgNgEIgMgCQgEAAgDABQgDACAAADIABAEIAGADIALAGIAOAHQAGADADAFQADAEAAAJQAAAIgEAIQgFAHgJADQgHADgOAAIgQgBg");
	this.shape_15.setTransform(98.975,114.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAsQgIgEgEgHQgEgHAAgNIAAg7IAZAAIAAA1QAAAJAEAGQAEAFAHAAQAHAAAEgDQAEgEADgHQABgGAAgJIAAgsIAaAAIAABcIgUAAIgDgMIgBAAQgDAEgFADQgEADgGACIgKABQgKAAgHgDg");
	this.shape_16.setTransform(89.075,114.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggA1QgKgMAAgYQAAgVAKgOQAKgLAPgBQAHABAEABIAJAFQAEAEACADIABAAIgBgIIgBgpIAZAAIAACBIgTAAIgFgMIgBAAIgGAHQgEADgEACQgEACgHAAQgQgBgJgMgAgMgCQgFAHAAANQAAANAFAIQAEAGAJABQAJAAAFgHQAFgGAAgMIAAgDQAAgNgFgHQgEgHgLAAQgIAAgEAHg");
	this.shape_17.setTransform(77.85,112.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AASAvIAAg1QAAgKgEgFQgEgFgHAAQgLAAgEAIQgEAJAAAMIAAAsIgaAAIAAhcIAUAAIADAMIABAAQAEgFAEgCQAEgDAGgCIAKgBQAPAAAJAIQAJAIAAASIAAA7g");
	this.shape_18.setTransform(67.175,114.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMBBIAAhcIAZAAIAABcgAgJgpQgEgDAAgHQAAgHAEgDQAEgDAFAAQAGAAAEADQAEACAAAIQAAAHgEADQgEACgGAAQgFAAgEgCg");
	this.shape_19.setTransform(58.975,112.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AARAvIAAg1QAAgKgDgFQgEgFgIAAQgKAAgFAIQgEAJAAAMIAAAsIgZAAIAAhcIATAAIAEAMIABAAQAEgFAEgCQAEgDAFgCIALgBQAPAAAJAIQAJAIAAASIAAA7g");
	this.shape_20.setTransform(46.425,114.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaAtQgHgDgEgHQgDgIAAgIQAAgPAKgGQALgHATgBIAQAAIAAgFQAAgHgDgDQgEgEgHAAQgGAAgGACIgNAFIgJgRQAIgEAJgCQAIgCAKAAIAAAAQASAAAKAIQAKAHAAASIAAA9IgRAAIgFgNIgBAAIgIAIQgEADgGACQgEABgIAAQgJAAgFgDgAgKAIQgEAFAAAGQAAAGADACQAEADAFAAQAHAAAGgFQAFgFAAgJIAAgHIgKAAQgKAAgGAEg");
	this.shape_21.setTransform(35.375,114.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AARBBIAAg3QAAgKgDgEQgEgFgIAAQgHAAgEAEQgEAEgCAFQgCAGAAALIAAAsIgZAAIAAiBIAZAAIgBAxIACAAQADgGAEgCQAEgDAFgCIAJgBQALAAAHAEQAHADAEAIQAFAHAAALIAAA9g");
	this.shape_22.setTransform(24.975,112.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFA3QgHgDgDgHQgEgHAAgLIAAgsIgMAAIAAgLIAOgIIAHgUIAPAAIAAAUIAaAAIAAATIgaAAIAAAsQAAAFADADQAEACAEAAIAQgDIAAATIgKADIgNABQgIAAgGgCg");
	this.shape_23.setTransform(15.575,113.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgTArQgKgFgHgLQgGgKAAgRQAAgQAGgKQAFgKAKgGQAKgFAMAAQANAAAJAEQAJAGAGAJQAFALAAAMIAAALIg7AAQABAMAFAFQAGAGAKAAQAJAAAHgCIAPgFIAAAUQgIADgGABQgIACgKAAQgOAAgKgFgAgKgZQgFAGgBAJIAjAAQAAgFgCgEQgDgGgDgCQgEgCgGAAIAAAAQgHAAgEAEg");
	this.shape_24.setTransform(104.325,94.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIATAAIAEAQIABAAQACgEAEgEIAJgHQAGgDAGABIAAAAIAEAAIAEABIgCAXIgDAAIgEAAIgKABIgIADQgDADgCAFQgCAEAAAGIAAAvg");
	this.shape_25.setTransform(95.875,94.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgSAtQgHgCgGgIQgGgFgEgJQgDgJAAgMQAAgPAFgLQAGgKAKgFQAJgGAOAAQANAAAKAGQAKAFAGAKQAGAMAAAOQAAAMgDAJQgEAIgFAGQgIAIgHACQgHADgLAAQgJAAgJgDgAgOgUQgEAIgBAMQAAAJACAGQADAHADADQAEADAHAAQAHAAAEgDQAEgDABgHQACgGAAgJQAAgJgCgFQgBgHgEgCQgFgEgGAAQgJABgFAGg");
	this.shape_26.setTransform(86.3,94.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAtAvIAAg1QAAgKgDgFQgDgFgIAAQgKAAgEAHQgFAHABAMIAAAvIgYAAIAAg1QgBgHgBgEQgCgFgDgCQgEgCgEAAQgFAAgGADQgEAEgCAHQgBAHAAAIIAAAsIgaAAIAAhcIAUAAIADAMIABAAQADgEAFgDQAEgDAFgCIAKgBQALAAAHADQAGADAEAHIACAAQAEgGAIgEQAIgDAIAAQAQAAAHAIQAJAIgBASIAAA7g");
	this.shape_27.setTransform(72.7,94.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgTArQgKgFgHgLQgGgKAAgRQAAgQAGgKQAFgKAKgGQAKgFAMAAQANAAAJAEQAJAGAGAJQAFALAAAMIAAALIg7AAQABAMAFAFQAGAGAKAAQAJAAAHgCIAPgFIAAAUIgOAEQgHACgLAAQgOAAgKgFgAgKgZQgFAGgBAJIAjAAQAAgFgCgEQgDgGgDgCQgEgCgGAAQgGAAgFAEg");
	this.shape_28.setTransform(54.925,94.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdAvIAAhcIATAAIAEAQIABAAIAGgIQAEgEAFgDQAGgDAGABIAAAAIAEAAIAEABIgCAXIgDAAIgEAAIgKABIgIADQgDADgCAFQgCAEAAAGIAAAvg");
	this.shape_29.setTransform(46.475,94.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAVIAJgpIAWAAIABACIgOAng");
	this.shape_30.setTransform(40.3,88.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgTArQgKgFgHgLQgGgKAAgRQAAgQAGgKQAFgKAKgGQAKgFAMAAQANAAAJAEQAJAGAGAJQAFALAAAMIAAALIg7AAQABAMAFAFQAGAGAKAAQAJAAAHgCIAPgFIAAAUQgIADgGABQgIACgKAAQgOAAgKgFgAgKgZQgFAGgBAJIAjAAQAAgFgCgEQgDgGgDgCQgEgCgGAAQgGAAgFAEg");
	this.shape_31.setTransform(33.475,94.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAWA9IgWhcIgVBcIgdAAIgfh5IAZAAIAVBhIAEgYIAUhJIAXAAIASBDIAGAeIAUhhIAaAAIgeB5g");
	this.shape_32.setTransform(20.2,92.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0C5FA3").s().p("AjNDIIAAmPIGbAAIAAGPg");
	this.shape_33.setTransform(20.625,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.6,143.8);


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


(lib.Campaigntype160x600svg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D6CF72").s().p("AgGAHQgCgCAAgFQAAgEACgCQADgCADAAQAEAAACACQADAEAAACQAAAEgDADQgCACgEAAQgEAAgCgCg");
	this.shape.setTransform(77.3,22.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6CF72").s().p("AgeAwIAAgLIAHAAQAMAAADgMIADgGIgchDIAQAAIAOAnQADAJAAAFIABAAIACgHIAPguIAPAAIgcBMQgHAVgTAAIgJgBg");
	this.shape_1.setTransform(72.2,21.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6CF72").s().p("AgMAUIAAgjIgJAAIAAgGIAKgGIAFgOIAIAAIAAAPIATAAIAAALIgTAAIAAAjQAAAFACADQADACAEAAIALgBIAAAKIgGACIgIABQgUAAAAgWg");
	this.shape_2.setTransform(66.375,19.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D6CF72").s().p("AgGAvIAAhDIANAAIAABDgAgFggQgCgDAAgDQAAgDACgDQADgCACAAQADAAADACQACACAAAEQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(62.2,18.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D6CF72").s().p("AAPAiIAAgoQAAgIgDgEQgCgEgIAAQgIAAgEAGQgEAFAAAMIAAAhIgPAAIAAhCIAMAAIACAJIAAAAQADgFAGgDQAFgCAGAAQAZAAAAAYIAAArg");
	this.shape_4.setTransform(56.525,20.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D6CF72").s().p("AgXAcQgGgGAAgNIAAgrIAPAAIAAApQAAAHADAFQADADAHAAQAIAAAEgEQAEgHAAgLIAAgiIAPAAIAABDIgMAAIgCgIIgBAAQgDAEgFACQgFAEgHAAQgMgBgGgGg");
	this.shape_5.setTransform(48.575,20.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D6CF72").s().p("AAkAiIAAgoQAAgIgDgEQgEgEgFABQgKAAgDAEQgEAGAAAKIAAAjIgNAAIAAgoQAAgHgDgFQgDgDgGAAQgIgBgFAGQgDAFAAAMIAAAhIgPAAIAAhCIAMAAIACAJIAAAAQADgFAGgCQAEgDAHAAQAPAAAFALIABAAQADgGAFgCQAGgDAHgBQAMAAAFAHQAGAFgBANIAAArg");
	this.shape_6.setTransform(38.65,20.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D6CF72").s().p("AAjAiIAAgoQAAgIgCgEQgDgEgHABQgIAAgEAEQgEAGAAAKIAAAjIgNAAIAAgoQAAgGgDgGQgDgDgGAAQgJgBgDAGQgFAFAAAMIAAAhIgNAAIAAhCIALAAIABAJIABAAQADgFAFgCQAFgDAHAAQAPAAAFALIABAAQACgFAGgDQAGgDAGgBQANAAAFAHQAGAFAAANIAAArg");
	this.shape_7.setTransform(26.7,20.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D6CF72").s().p("AgQAfQgHgFgFgIQgDgHAAgLQAAgQAIgJQAJgJAOAAQAPAAAIAJQAJAJAAAQIAAAAQAAAQgIAJQgKAKgOAAQgJAAgHgEgAgMgRQgFAHAAAKQAAAXARAAQARAAAAgXQAAgWgRAAQgIAAgEAFg");
	this.shape_8.setTransform(16.9,20.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D6CF72").s().p("AgRAaQgIgJAAgRQAAgQAIgJQAJgJAPAAQALAAAIAEIgFALQgKgEgFABQgQgBAAAXQAAAMAEAFQAFAGAHAAQAIAAAKgFIAAANIgIACQgEACgHAAQgOAAgIgJg");
	this.shape_9.setTransform(10.075,20.15);

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
p.nominalBounds = new cjs.Rectangle(0,0,85.7,26.5);


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
	this.instance = new lib.HEAD2Buildings160x600svg("synched",0);
	this.instance.setTransform(114,87,1,1,0,0,0,114,87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(0,0,143.1,180.7), null);


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
	this.instance = new lib.HEAD1Buildings160x600svg("synched",0);
	this.instance.setTransform(124.7,68.9,1,1,0,0,0,124.7,68.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,137.6,143.8), null);


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

	// Layer_3
	this.instance = new lib.Campaigntype160x600svg("synched",0);
	this.instance.setTransform(0,-0.05,1,1,0,0,0,42.8,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CAMPAIGN, new cjs.Rectangle(-42.8,-13.2,85.69999999999999,26.5), null);


// stage content:
(lib.More_than_buildings_DV360Display__160x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(159));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(76.5,562.85,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(148).to({scaleX:1.6239,scaleY:1.6239,x:75.95},2).to({scaleX:1.4,scaleY:1.4,x:76.5},6).wait(3));

	// LOGO
	this.instance_1 = new lib.LOGO();
	this.instance_1.setTransform(11.05,40.1,0.115,0.115,0,0,0,1.3,0.8);

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
	this.instance_4.setTransform(70.25,540.6,1.4,1.4,0,0,0,105,23.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(114).to({_off:false},0).to({x:226.95},16,cjs.Ease.quintOut).wait(29));

	// BKGD PIC cover
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F5FA3").s().p("AsfRCMAAAgiDIY/AAMAAAAiDg");
	this.shape_1.setTransform(80,109);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(159));

	// PIC
	this.instance_5 = new lib._300x600Buildings();
	this.instance_5.setTransform(0,184,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(159));

	// BKGD
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F5FA3").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_2.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(159));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,299.5,356.6,301);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 160,
	height: 600,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/More_than_buildings_DV360_Display__160x600_atlas_P_1.png", id:"More_than_buildings_DV360_Display__160x600_atlas_P_1"},
		{src:"images/More_than_buildings_DV360_Display__160x600_atlas_NP_1.jpg", id:"More_than_buildings_DV360_Display__160x600_atlas_NP_1"}
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