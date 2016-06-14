var MakeCow = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('cow');
  this.$node.attr("src","http://www.animatedimages.org/data/media/211/animated-cow-image-0037.gif");
  this.step();
};

MakeCow.prototype = Object.create(MakeDancer.prototype);
MakeCow.prototype.constructor = MakeCow;

MakeCow.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate({height: 'toggle'}, 1000 )
};  