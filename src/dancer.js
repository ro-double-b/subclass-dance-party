var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img class="dancer"></img>');
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;

  this.interactionCheckTime = 10;
};

MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.interactionStep = function() {
  setTimeout(this.interactionStep.bind(this), this.interactionCheckTime);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};