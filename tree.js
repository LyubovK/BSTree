class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    //  в корень кладем то, что возвращает функция
    //
    this.root = addWithin(this.root, value);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }

  has(value) {
    return searchWithin(this.root, value);

    function searchWithin(node, value) {
      if (!node) {
        return false;
      }

      if (node.value === value) {
        return true;
      }

      return value < node.value
        ? searchWithin(node.left, value)
        : searchWithin(node.right, value);
    }
  }

  remove(value) {
    this.root = removeNode(this.root, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.value < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFormRight = node.right;
        while (minFormRight.left) {
          minFormRight = minFormRight.left;
        }

        node.value = minFormRight.value;
        node.remove = removeNode(node.right, minFormRight.value);

        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }

    return node.value;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }

    return node.value;
  }

  leftTraverses(cb) {
    doLeft(this.root, cb);

    function doLeft(node, cb) {
      if (node) {
        doLeft(node.left, cb);
        cb(node.value);
        doLeft(node.right, cb);
      }
    }
  }
  rightTraverses(cb) {
    doRight(this.root, cb);

    function doRight(node, cb) {
      if (node) {
        doRight(node.right, cb);
        cb(node.value);
        doRight(node.left, cb);
      }
    }
  }
}

console.log('BSTree');

function addItems() {
  console.log('add 13,15,9,20,18,32,25');

  bst.add(13);
  bst.add(15);
  bst.add(9);
  bst.add(20);
  bst.add(10);
  bst.add(32);
  bst.add(25);

  console.log(bst);
}
function getItems() {
  console.log('has 10', bst.has(10));
  console.log('has 15', bst.has(15));
  console.log('\n', bst);

  console.log('Left traverse:');
  bst.leftTraverses((val) => console.log(val));

  console.log('Right traverse:');
  bst.rightTraverses((val) => console.log(val));

  console.log('min', bst.min());
  console.log('max', bst.max());
}
function removeItems() {
  console.log('remove');

  bst.remove(15);
  console.log('removed 15');
  console.log(bst);

  console.log('left traverse');
  bst.rightTraverses((val) => console.log(val));
}

const bst = new BinarySearchTree();
addItems();
getItems();
removeItems();
