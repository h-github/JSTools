/**
 * Created by hamid on 2017-03-04.
 */
var ResizableArray = function(capacity){
  this.capacity = capacity;
  this.items = new Array(capacity);
  this.size = 0;
};

ResizableArray.prototype.getSize = function(){
  return this.size;
};

ResizableArray.prototype.setItem = function(index, item){
  if(index < 0 || index > this.items.length - 1){
    return new Error('index exceeds the array length');
  }
  this.items[index] = item;
};

ResizableArray.prototype.getItem = function(index){
  if(index < 0 || index > this.items.length - 1){
    return new Error('index exceeds the array length');
  }
  return this.items[index];
}

ResizableArray.prototype.append = function(item){
  this.ensureExtraCapacity();
  this.setItem(this.size, item);
  this.size++;
}


ResizableArray.prototype.ensureExtraCapacity = function () {
  if(this.getSize() === this.capacity){
    var newArray = new Array(this.capacity);
    this.items = this.items.concat(newArray);
    this.capacity = this.capacity * 2;
  }
};

////////////////////////////////////////////////////
///////////////////////Test/////////////////////////
////////////////////////////////////////////////////

function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

var newReArr = new ResizableArray(10);
console.log(newReArr);

for(var i = 0 ; i < 20; i++){
  var renInt = getRandomInt(1,1000);
  newReArr.append(renInt);
  console.log(newReArr.items);
}