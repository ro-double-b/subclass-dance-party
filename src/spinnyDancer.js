var MakeSpinnyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('farmer');
  this.$node.attr('src', 'cow.jpg');
    // console.log(this.$node.css("top"))
  this.step();
  this.interactionStep();
};

MakeSpinnyDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinnyDancer.prototype.constructor = MakeSpinnyDancer;

MakeSpinnyDancer.prototype.interactionStep = function() {
  MakeDancer.prototype.interactionStep.call(this);
  
  var height = parseInt(this.$node.css('top'));
  var width = parseInt(this.$node.css('left'));

  window.animals.forEach(function(item, index) {
    var animalHeight = parseInt(item.$node.css('top'));
    var animalWidth = parseInt(item.$node.css('left'));
    if (Math.abs(height - animalHeight) < 200 && Math.abs(width - animalWidth) < 200 ) {
      if (item.$node.attr('src') === 'owl.png') {
        item.$node = $('<img></img>');
        item.$node.attr('src', 'cow.jpg');
        item.step = function() {};
        window.animals.splice(index, 1)
      } else if (item.$node.attr('src') === 'goat.jpg'){
          var newObj = {};
          newObj.$node = $('<img class="dancer"></img>');
            var styleSettings = {
              top: animalHeight,
              left: animalWidth
            };
          newObj.$node.css(styleSettings);
          newObj.$node.attr('src', 'cow.jpg');
          $('body').append(newObj.$node);
          // item.$node.attr('src', 'chicken.jpg');
          // $('body').remove(item.$node);

          console.log("hit a goat");
          item.step = function() {}
          // console.log("hit a goat");
                  window.animals.splice(index, 1)
        }
    }
  });

};

MakeSpinnyDancer.prototype.step = function() {
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