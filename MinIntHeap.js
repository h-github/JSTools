var MinIntHeap = function () {
  this.capacity = 10;
  this.size = 0;

  this.items = new Array(this.capacity);
};

MinIntHeap.prototype.getLeftChildIndex = function (parentIndex) {
  return 2 * parentIndex + 1;
};

MinIntHeap.prototype.getRightChildIndex = function (parentIndex) {
  return 2 * parentIndex + 2;
};

MinIntHeap.prototype.getParentIndex = function (childIndex) {
  return (childIndex - 1) / 2;
};

MinIntHeap.prototype.hasLeftChild = function (index) {
  return this.getLeftChildIndex(index) < this.size;
};

MinIntHeap.prototype.hasRightChild = function (index) {
  return this.getRightChildIndex(index) < this.size;
};

MinIntHeap.prototype.hasParent = function (index) {
  return this.getParentIndex(index) >= 0;
};

MinIntHeap.prototype.leftChild = function (index) {
  return this.items[this.getLeftChildIndex(index)];
};

MinIntHeap.prototype.rightChild = function (index) {
  return this.items[this.getRightChildIndex(index)];
};

MinIntHeap.prototype.parent = function (index) {
  return this.items[this.getParentIndex(index)];
};

MinIntHeap.prototype.swap = function(indexOne, indexTwo){
  var temp = this.items[indexOne];
  this.items[indexOne] = this.items[indexTwo];
  this.items[indexTwo] = temp;
};

MinIntHeap.prototype.ensureExtraCapacity = function(){
  if(this.size === this.capacity){
    var temp = this.items;
    console.log(this.capacity);
    this.items = new Array(this.capacity);
    this.items = temp.concat(this.items);
    this.capacity *= 2;
  }
};

MinIntHeap.prototype.peek = function(){
  if(this.size === 0){
    throw new Error;
  }
  return this.items[0];
};

MinIntHeap.prototype.poll = function(){
  if(this.size === 0){
    throw new Error;
  }

  var item = this.items[0];
  this.items[0] = this.items[this.size - 1];
  this.size--;
  this.heapifyDown();
  return item;
};

MinIntHeap.prototype.add = function(item){
  this.ensureExtraCapacity();
  this.items[this.size] = item;
  this.size++;
  this.heapifyUp();
};

MinIntHeap.prototype.heapifyUp = function(){
 var index = this.size - 1;
 while(this.hasParent(index) && this.parent(index) > this.items[index]){
   this.swap(this.getParentIndex(index), index);
   index = this.getParentIndex(index);
 }
};

MinIntHeap.prototype.heapifyDown = function(){
  var index = 0;
  while(this.hasLeftChild(index)){
    var smallerChildIndex = this.getLeftChildIndex(index);
    if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)){
      smallerChildIndex = this.getRightChildIndex(index);
    }

    if(this.items[index] < this.items[smallerChildIndex]){
      break;
    }else{
      this.swap(index, smallerChildIndex);
    }
    index = smallerChildIndex;
  }
};




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var newHeap = new MinIntHeap();
for(var i = 0 ; i < 10000 ; i++){
  newHeap.add(getRandomInt(1 , 1000));
  console.log(JSON.stringify(newHeap));
  
}