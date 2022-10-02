// export default class DoublyLinkedList<T> {
//     public length: number;

//     constructor() {
//     }

//     prepend(item: T): void {

// }
//     insertAt(item: T, idx: number): void {

// }
//     append(item: T): void {

// }
//     remove(item: T): T | undefined {

// }
//     get(idx: number): T | undefined {

// }
//     removeAt(idx: number): T | undefined {

// }
// }

type NullableLinkedNode = LinkedNode | null;

class LinkedNode {
    public val: number;
    public next: NullableLinkedNode;

    constructor(val: number, next: NullableLinkedNode) {
        this.val = val;
        this.next = next;
    }
}

class MyLinkedList {
    public size: number;
    public head: NullableLinkedNode;
    public tail: NullableLinkedNode;

    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    get(index: number): number {
        if (index < 0 || index >= this.size) return -1;
        else {
            let currNode = this.head;

            for (let i = 0; i < index; i++) {
                currNode = currNode!.next;
            }
            return currNode!.val;
        }
    }

    addAtHead(val: number): void {
        this.size++;
        const newNode = new LinkedNode(val, this.head);
        this.head = newNode;
        if (!this.tail) this.tail = newNode;
    }

    addAtTail(val: number): void {
        this.size++;
        const newNode = new LinkedNode(val, null);
        if (!this.tail) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    addAtIndex(index: number, val: number): void {
        if (index > this.size) return;

        if (this.size) {
            let currNode = this.head;
            let prevNode: NullableLinkedNode = null;
            for (let i = 0; i < index; i++) {
                prevNode = currNode;
                currNode = currNode!.next;
            }
            const newNode = new LinkedNode(val, currNode);
            if (prevNode) {
                prevNode.next = newNode;
                if (index === this.size) this.tail = newNode;
            } else {
                this.head = newNode;
            }
        } else {
            this.head = new LinkedNode(val, null);
            this.tail = new LinkedNode(val, null);
        }
        this.size++;
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) return;

        this.size--;
        let prevNode: NullableLinkedNode = null;
        let nextNode: NullableLinkedNode = null;
        let currNode = this.head;

        for (let i = 0; i < index; i++) {
            prevNode = currNode;
            currNode = currNode!.next;
            nextNode = currNode!.next ? currNode!.next : null;
        }

        if (currNode === this.head) {
            this.head = currNode!.next;
        } else {
            prevNode!.next = nextNode;
            if (!nextNode) this.tail = prevNode;
        }
    }
}
const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(7);
myLinkedList.addAtHead(2);
myLinkedList.addAtTail(1);
myLinkedList.addAtIndex(3, 0);
myLinkedList.deleteAtIndex(2);
myLinkedList.addAtHead(6);
// myLinkedList.addAtTail(4);
// console.log(myLinkedList.get(4));
// myLinkedList.addAtHead(4);
// myLinkedList.addAtIndex(5, 0);
// myLinkedList.addAtHead(6);

console.log("size: " + myLinkedList.size);

let currNode = myLinkedList.head;
for (let i = 0; i < myLinkedList.size; i++) {
    console.log(currNode);
    currNode = currNode!.next;
}

console.log("head: " + JSON.stringify(myLinkedList.head));
console.log("tail: " + JSON.stringify(myLinkedList.tail));

//   var obj = new MyLinkedList()
//   var param_1 = obj.get(index)
//   obj.addAtHead(val)
//   obj.addAtTail(val)
//   obj.addAtIndex(index,val)
//   obj.deleteAtIndex(index)
