var MakeSpinnyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.step();
};

MakeSpinnyDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinnyDancer.prototype.constructor = MakeSpinnyDancer;

MakeSpinnyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggleClass('rotate');
};  
