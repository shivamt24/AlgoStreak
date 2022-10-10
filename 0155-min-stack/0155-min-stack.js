
var MinStack = function() {
    _stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if( _stack.length == 0 ){
        _stack.push([val,val]);
        return;
    }
    const currentMin = _stack[_stack.length - 1][1];
    _stack.push( [val, Math.min(currentMin, val)] );
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    _stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return _stack[ _stack.length - 1 ][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return _stack[ _stack.length - 1 ][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */