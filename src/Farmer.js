var MakeFarmer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('farmer');
  this.$node.attr('src', 'http://www.picgifs.com/graphics/f/farm/graphics-farm-930914.gif');
    // console.log(this.$node.css("top"))
  this.step();
  this.interactionStep();
};

MakeFarmer.prototype = Object.create(MakeDancer.prototype);
MakeFarmer.prototype.constructor = MakeFarmer;

MakeFarmer.prototype.interactionStep = function() {
  MakeDancer.prototype.interactionStep.call(this);
  
  var height = parseInt(this.$node.css('top'));
  var width = parseInt(this.$node.css('left'));

  window.animals.forEach(function(item, index) {
    var animalHeight = parseInt(item.$node.css('top'));
    var animalWidth = parseInt(item.$node.css('left'));
    if (Math.abs(height - animalHeight) < 100 && Math.abs(width - animalWidth) < 100 ) {
      if (item.$node.attr('src') === 'http://www.animatedimages.org/data/media/532/animated-chicken-image-0157.gif') {
        var newObj = {};
        newObj.$node = $('<img class="dancer"></img>');
        var styleSettings = {
          top: animalHeight,
          left: animalWidth
        };
        newObj.$node.css(styleSettings);        
        newObj.$node.attr('src', 'http://ihopbonita.com/wp-content/uploads/2014/05/FriedChickenDinner.png');
        $('body').append(newObj.$node);
        item.$node.remove();
        item.step = function() {};
        window.animals.splice(index, 1);
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

      } else if (item.$node.attr('src') === 'http://www.animatedimages.org/data/media/211/animated-cow-image-0037.gif') {
        var newObj = {};
        newObj.$node = $('<img class="dancer"></img>');
        var styleSettings = {
          top: animalHeight,
          left: animalWidth
        };
        newObj.$node.css(styleSettings);
        newObj.$node.attr('src', 'http://ihopbonita.com/wp-content/uploads/2014/05/T_Bone_Steak.png');
        $('body').append(newObj.$node);
        item.$node.remove();
        item.step = function() {};
        window.animals.splice(index, 1);

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

MakeFarmer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggleClass('rotate');
  move_random(this);
    //console.log(this.$node.css("top"))
};  

var move_random = function(obj) {
  var styleSettings = {
    top: $("body").height() * Math.random(),
    left: $("body").width() * Math.random()
  };
  obj.$node.animate(styleSettings);

};