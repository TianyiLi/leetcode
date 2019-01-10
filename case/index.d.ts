declare interface ListNode {
  val: number;
  next: ListNode | null;
}

declare var ListNode: {
  new(val: number): ListNode
  (): any
  (val: number): any
}