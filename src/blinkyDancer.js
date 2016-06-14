// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };


var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // console.log("make a new instance")
  this.step();
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;



MakeBlinkyDancer.prototype.step = function() {
  console.log("MakeBlinkyDancer step function has been called");
  //MakeDancer.prototype.step.call(this);
  var obj = this;
  var time = this.timeBetweenSteps;
  setTimeout(function(){ return obj.step(); }, obj.timeBetweenSteps);


/*
  setTimeout(
    

    function() { 
      console.log(this);
       //this code correctly blinks in perpetuity BUT is bound to the window and not to the MakeBlinkyDancer instance 
     return MakeBlinkyDancer.prototype.step.call(this); },

    this.timeBetweenSteps);
*/
  //console.log(this.$node);
  obj.$node.toggle();

};  




