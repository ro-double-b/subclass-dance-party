var MakeSpinnyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr("src","cow.jpg");
  this.step();
};

MakeSpinnyDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinnyDancer.prototype.constructor = MakeSpinnyDancer;

MakeSpinnyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggleClass('rotate');

  move_random(this);
};  

var move_random = function(obj) {
  var styleSettings = {
    top: $("body").height() * Math.random(),
    left: $("body").width() * Math.random()
  };
  obj.$node.animate(styleSettings);

};