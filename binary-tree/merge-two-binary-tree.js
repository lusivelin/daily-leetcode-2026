/**
 * The problem is not the most efficient way to merge two binary trees,
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const result = []

    function traverse(n) {
        if(!n) return
        result.push(n.val)
        traverse(n.left)
        traverse(n.right)
    }

    traverse(root1)
    traverse(root2)
    return result.sort((a, b) => a - b)
};