var MakeChicken = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr("src","http://www.animatedimages.org/data/media/532/animated-chicken-image-0157.gif");
  this.step();
};

MakeChicken.prototype = Object.create(MakeDancer.prototype);
MakeChicken.prototype.constructor = MakeChicken;

MakeChicken.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};  

