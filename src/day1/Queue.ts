class QueueNode<T> {
    public val: T;
    public next?: QueueNode<T>;

    constructor(val: T, next?: QueueNode<T>) {
        this.val = val;
        this.next = next;
    }
}

export default class Queue<T> {
    public length: number;
    private head?: QueueNode<T>;
    private tail?: QueueNode<T>;

    constructor() {
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;
        const newNode = new QueueNode(item, undefined);
        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.tail = this.head = newNode;
        }
    }
    deque(): T | undefined {
        const oldHead = this.head;

        if (oldHead) {
            this.head = oldHead.next;

            // clean up
            oldHead.next = undefined;
            if (oldHead === this.tail) this.tail = undefined;

            this.length--;
        }

        return oldHead?.val;
    }
    peek(): T | undefined {
        return this.head?.val;
    }
}
