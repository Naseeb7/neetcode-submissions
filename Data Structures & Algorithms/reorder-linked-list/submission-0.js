/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let first = head;
        let second = slow.next;
        slow.next = null;

        let prev = null;
        let current = second;

        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        second = prev;

        while (second) {
            const firstNext = first.next;
            const secondNext = second.next;

            first.next = second;
            second.next = firstNext;

            first = firstNext;
            second = secondNext;
        }
    }
}
