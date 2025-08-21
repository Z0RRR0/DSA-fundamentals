class Stack {
  constructor(items = []) {
    // Initialize the stack with an optional array of items.
    this.items = items;
  }

  // Adds an item to the top of the stack.
  push(item) {
    this.items.push(item);
    return this.items;
  }

  // Removes and returns the item at the top of the stack.
  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack underflow: Cannot pop from an empty stack.');
    }
    return this.items.pop();
  }

  // Retrieves the item at the top of the stack without removing it.
  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty: Cannot peek.');
    }
    return this.items[this.items.length - 1];
  }

  // Returns the number of items in the stack.
  size() {
    return this.items.length;
  }

  // Checks if the stack is empty.
  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage
let stack = new Stack();
console.log(stack.push('100')); // ['100']
console.log(stack.push('200')); // ['100', '200']
console.log(stack.push('300')); // ['100', '200', '300']
console.log(stack.pop()); // '300'
console.log(stack.size()); // 2
console.log(stack.peek()); // '200'
console.log(stack); // Stack { items: ['100', '200'] }

/* 
Time Complexities (Big-O Notation):
1. push(item): O(1) - Adding an item to the end of an array is a constant-time operation.
2. pop(): O(1) - Removing the last item from an array is also a constant-time operation.
3. peek(): O(1) - Accessing the last element of the array is direct and takes constant time.
4. size(): O(1) - Accessing the length of an array is constant time.
5. isEmpty(): O(1) - Checking if the array is empty is a simple comparison.
*/