// pq: https://zenn.dev/riku/articles/e1c0ea46af0348

export class PriorityQueue {
  private list: [number, number, number][] = [];

  public push(v: [number, number, number]) {
    this.list.push(v);
    const back = this.list.length - 1;

    this.against(back);
  }

  private against(child: number) {
    if (child === 0) return;
    const parent = Math.ceil(child / 2) - 1;

    const childValue = this.list[child];
    const parentValue = this.list[parent];

    if (parentValue > childValue) {
      this.swap(child, parent);
      this.against(parent);
    }
  }

  private swap(a: number, b: number) {
    const tmp = this.list[a];
    this.list[a] = this.list[b];
    this.list[b] = tmp;
  }

  public top(): [number, number, number] {
    if (this.list.length === 0) throw new Error("empty");
    return this.list[0];
  }

  public pop(): [number, number, number] {
    if (this.list.length === 0) throw new Error("empty");
    const ans = this.top();
    const tail = this.list.pop();
    if (this.size() > 0) {
      if (tail != null) {
        this.list[0] = tail;
      }
      this.flow(0);
    }
    this.flow(0);
    return ans;
  }

  private flow(parent: number) {
    const parentValue = this.list[parent];

    const left = parent * 2 + 1;
    const right = parent * 2 + 2;

    if (!this.inRange(left)) return;

    // 左子入るが右子はいない
    if (this.inRange(left) && !this.inRange(right)) {
      const leftValue = this.list[left];

      if (parentValue < leftValue) {
        this.swap(parent, left);
      }
    }

    if (this.inRange(left) && this.inRange(right)) {
      const leftValue = this.list[left];
      const rightValue = this.list[right];
      const target = leftValue > rightValue ? left : right;
      const targetValue = this.list[target];

      if (parentValue < targetValue) {
        this.swap(parent, target);
        this.flow(target);
      }
    }
  }

  private inRange(index: number): boolean {
    return index < this.list.length;
  }

  public size() {
    return this.list.length;
  }
}
