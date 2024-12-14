function createTree() {
    let separation = 10; // Default separation value
    
    function tree(x) {
        if (arguments.length) {
            separation = x; // Setter: set `separation` to the provided value `x`
            return tree; // Return the `tree` function itself for chaining
        } else {
            return separation; // Getter: return the current `separation` value
        }
    }

    return tree;
}

// Usage
let myTree = createTree();

// Setting the separation
myTree(20); // Set the separation to 20

// Getting the separation
console.log(myTree()); // Outputs: 20
