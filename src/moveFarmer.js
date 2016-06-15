var MakeMoveFarmer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('moveFarmer');
  this.$node.attr('src', 'https://dzc2hmj8w639c.cloudfront.net/sites/default/files/fv2_farmboy.png');
  this.interactionStep();

  $(document).keyup(function(e) {
    if (e.which === 38) {
      var styleSettings = { 
        top: parseInt($('.moveFarmer').css("top")) - 20
      };
    } 
    if (e.which === 40) {
      var styleSettings = { 
        top: parseInt($('.moveFarmer').css("top")) + 20
      };
    }
    if (e.which === 37) {
      var styleSettings = { 
        left: parseInt($('.moveFarmer').css("left")) - 20
      };
    }
    if (e.which === 39) {
      var styleSettings = { 
        left: parseInt($('.moveFarmer').css("left")) + 20
      };
    } 
    $('.moveFarmer').css(styleSettings);
  });

};

MakeMoveFarmer.prototype = Object.create(MakeDancer.prototype);
MakeMoveFarmer.prototype.constructor = MakeFarmer;

MakeMoveFarmer.prototype.interactionStep = function() {
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