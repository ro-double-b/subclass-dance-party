var MakeRotateDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('stretchy');
  this.$node.attr("src","goat.jpg");
  this.step();
};

MakeRotateDancer.prototype = Object.create(MakeDancer.prototype);
MakeRotateDancer.prototype.constructor = MakeRotateDancer;

MakeRotateDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate({height: 'toggle'}, 1000 )
};  