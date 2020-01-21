export class LinkedList {
  
  constructor() {
    this.root  = null;
  }
  push(v) {
    if( this.root == null){
      this.root = new Node(v);
      return;
    }
    let c = this.root;    
    while(c.next != null){
      c = c.next;
    }
    c.next = new Node(v);    
  }

  pop() {
    if(this.root.next == null){      
      const v =this.root.value;
      this.root = null;
      return v;      
    }    
    let { prev, current } = LinkedList.findLast(this.root);
    this.remove(prev);    
    return current.value;
  }

  remove(prev) {
    prev.next = null;
  }

  static findLast(root) {
    let c = root;
    let prev = this;
    while (c.next != null) {
      prev = c;
      c = c.next;
    }
    return { prev, current:c };
  }
  
  static findBy(root, val) {
    let c = root;
    let prev = this;
    while (c.next != null && val != c.value) {
      prev = c;
      c = c.next;
    }
    if(c.value != val){
      return {prev:null, current:null};
    }
    return { prev, current:c };
  }

  shift() {
    const rootVal = this.root.value;
    const newRoot = this.root.next;
    this.root = newRoot;
    return rootVal;
  }

  unshift(v) {
    let newRoot = new Node(v);
    newRoot.next = this.root;
    this.root = newRoot;
  }

  delete(v) {
    let { prev, current } = LinkedList.findBy(this.root, v)
    if(current ==  null){
      return;
    }
    prev.next = current.next;
    if(current == this.root){
      this.root = this.root.next;
    }
  }

  count() {
    let node = this.root;
    let c = 0;
    while(node){
       c++;
       node = node.next; 
    }
    return c;
  }
}
class Node{
  constructor(v) {
   this.value =v;
   this.next = null;
  }
}

