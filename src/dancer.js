var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img class="dancer"></img>');
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
};

MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};