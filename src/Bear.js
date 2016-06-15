var MakeBear = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bear');
  this.$node.attr('src', 'http://caccioppoli.com/Animated%20gifs/Bears/0146.gif');
  this.step();
  this.interactionStep();
};

MakeBear.prototype = Object.create(MakeDancer.prototype);
MakeBear.prototype.constructor = MakeBear;

MakeBear.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  moveRandom(this);
};  

var moveRandom = function(obj) {
  var currentY = parseInt(obj.$node.css("top"));
  var currentX = parseInt(obj.$node.css("left"));
  var nextY = $("body").height() * Math.random();
  var nextX = $("body").width() * Math.random();

  if (currentX > nextX) {
    obj.$node.addClass('left');
    obj.$node.css('transform', 'scaleX(-1) rotate('+ -Math.atan((currentY - nextY)/(currentX - nextX)) + 'rad)');
  } else {
    obj.$node.removeClass('left');
    obj.$node.css('transform', 'scaleX(1) rotate('+ Math.atan((currentY - nextY)/(currentX - nextX)) + 'rad)');
  }
  var styleSettings = {
    top: nextY,
    left: nextX,
  };
  obj.$node.animate(styleSettings);
};

MakeBear.prototype.interactionStep = function() {
  MakeDancer.prototype.interactionStep.call(this);
  
  var height = parseInt(this.$node.css('top'));
  var width = parseInt(this.$node.css('left'));

  window.farmers.forEach(function(item, index) {
    
    var farmerHeight = parseInt(item.$node.css('top'));
    var farmerWidth = parseInt(item.$node.css('left'));

    
    if (Math.abs(height - farmerHeight) < 100 && Math.abs(width - farmerWidth) < 100 ) {
      if (item.$node.hasClass('moveFarmer')) {
        var newObj = {};
        newObj.$node = $('<img class="dancer"></img>');
        var styleSettings = {
          top: farmerHeight,
          left: farmerWidth
        };
        newObj.$node.css(styleSettings);        
        newObj.$node.attr('src', 'http://www190.lunapic.com/editor/working/146594524136217?855941930');
        $('body').append(newObj.$node);
        item.$node.remove();
        item.step = function() {};
        window.farmers.splice(index, 1);
        var $nodeKetchup = $('<img class="ketchup"></img>');
        
        newObj.$node.on('mouseenter', function(element) {
          var styleSettings = {
            top: parseInt($(this).css("top")) - 75,
            left: parseInt($(this).css("left")) + 75
          };

          $nodeKetchup.attr('src', 'http://www190.lunapic.com/editor/working/146594524136217?9790030947');
          $('body').append($nodeKetchup);
          $nodeKetchup.css(styleSettings);

        });
        newObj.$node.on('mouseleave', function(element) {
          $nodeKetchup.remove();
        });

      }
    }
  });
};