const questions = [

/* =========================
TWO POINTER (incl Linked List logic)
========================= */

{ id:1, title:"Two Sum Sorted", description:"Input: [2,7,11,15], target=9\nOutput: [2,7]\nArray is sorted. Find pair in O(n) time and O(1) space.", difficulty:1, topic:"Two Pointer", correctAnswer:"two-pointer" },

{ id:2, title:"Pair Difference", description:"Input: [1,3,5,8], k=2\nOutput: true\nCheck if any pair has difference k.", difficulty:1, topic:"Two Pointer", correctAnswer:"two-pointer" },

{ id:3, title:"Remove Duplicates", description:"Input: [1,1,2,2,3]\nOutput: [1,2,3]\nModify array in-place.", difficulty:1, topic:"Two Pointer", correctAnswer:"two-pointer" },

{ id:4, title:"Container With Most Water", description:"Input: [1,8,6,2,5,4]\nOutput: 49\nMaximize area using two ends.", difficulty:2, topic:"Two Pointer", correctAnswer:"two-pointer" },

{ id:5, title:"3 Sum", description:"Input: [-1,0,1,2,-1]\nOutput: [[-1,-1,2],[-1,0,1]]\nFind unique triplets.", difficulty:2, topic:"Two Pointer", correctAnswer:"two-pointer" },

{ id:6, title:"Trapping Rain Water", description:"Input: [4,2,0,3,2,5]\nOutput: 9\nCompute trapped water efficiently.", difficulty:3, topic:"Two Pointer", correctAnswer:"two-pointer" },

{ id:7, title:"Closest Pair Sum", description:"Input: [1,4,6,8], target=10\nOutput: 10\nFind closest pair sum.", difficulty:2, topic:"Two Pointer", correctAnswer:"two-pointer" },

{ id:8, title:"Merge Sorted Arrays", description:"Input: [1,3,5] & [2,4,6]\nOutput: [1,2,3,4,5,6]\nMerge efficiently.", difficulty:2, topic:"Two Pointer", correctAnswer:"two-pointer" },

{ id:9, title:"Middle of Linked List", description:"Input: 1→2→3→4→5\nOutput: 3\nFind middle node.", difficulty:1, topic:"Two Pointer", correctAnswer:"two-pointer" },

{ id:10, title:"Detect Cycle in Linked List", description:"Input: 1→2→3→4→2\nOutput: true\nDetect cycle using fast/slow.", difficulty:2, topic:"Two Pointer", correctAnswer:"two-pointer" },



/* =========================
HASHMAP
========================= */

{ id:11, title:"Two Sum Unsorted", description:"Input: [3,2,4], target=6\nOutput: [2,4]\nFind pair efficiently.", difficulty:1, topic:"HashMap", correctAnswer:"hashmap" },

{ id:12, title:"Frequency Count", description:"Input: [1,1,2,3]\nOutput: {1:2,2:1,3:1}", difficulty:1, topic:"HashMap", correctAnswer:"hashmap" },

{ id:13, title:"First Unique Character", description:"Input: 'leetcode'\nOutput: 'l'", difficulty:1, topic:"HashMap", correctAnswer:"hashmap" },

{ id:14, title:"Longest Consecutive Sequence", description:"Input: [100,4,200,1,3,2]\nOutput: 4", difficulty:2, topic:"HashMap", correctAnswer:"hashmap" },

{ id:15, title:"Group Anagrams", description:"Input: ['eat','tea','tan']\nOutput: grouped lists", difficulty:2, topic:"HashMap", correctAnswer:"hashmap" },

{ id:16, title:"Subarray Sum Equals K", description:"Input: [1,1,1], k=2\nOutput: 2", difficulty:2, topic:"HashMap", correctAnswer:"hashmap" },

{ id:17, title:"Detect Duplicates", description:"Input: [1,2,3,1]\nOutput: true", difficulty:1, topic:"HashMap", correctAnswer:"hashmap" },

{ id:18, title:"Majority Element", description:"Input: [3,3,4]\nOutput: 3\nFind element appearing > n/2 times.", difficulty:1, topic:"HashMap", correctAnswer:"hashmap" },



/* =========================
PREFIX SUM
========================= */

{ id:19, title:"Range Sum Query", description:"Input: [2,4,6,8], query(1,3)\nOutput: 18", difficulty:1, topic:"Prefix Sum", correctAnswer:"prefix-sum" },

{ id:20, title:"Running Sum", description:"Input: [1,2,3]\nOutput: [1,3,6]", difficulty:1, topic:"Prefix Sum", correctAnswer:"prefix-sum" },

{ id:21, title:"Subarray Sum Equals K", description:"Input: [1,2,3], k=3\nOutput: 2", difficulty:2, topic:"Prefix Sum", correctAnswer:"prefix-sum" },

{ id:22, title:"Equal 0/1 Subarray", description:"Input: [0,1,0]\nOutput: 2", difficulty:2, topic:"Prefix Sum", correctAnswer:"prefix-sum" },

{ id:23, title:"2D Prefix Sum", description:"Compute submatrix sum efficiently.", difficulty:3, topic:"Prefix Sum", correctAnswer:"prefix-sum" },

{ id:24, title:"Continuous Subarray", description:"Check if subarray sum exists.", difficulty:1, topic:"Prefix Sum", correctAnswer:"prefix-sum" },



/* =========================
SLIDING WINDOW
========================= */

{ id:25, title:"Max Sum Subarray K", description:"Input: [2,1,5,1,3], k=3\nOutput: 9", difficulty:1, topic:"Sliding Window", correctAnswer:"sliding-window" },

{ id:26, title:"First Negative Window", description:"Input: [-1,2,-3,4], k=2\nOutput: [-1,-3]", difficulty:1, topic:"Sliding Window", correctAnswer:"sliding-window" },

{ id:27, title:"Longest Unique Substring", description:"Input: 'abcabcbb'\nOutput: 3", difficulty:2, topic:"Sliding Window", correctAnswer:"sliding-window" },

{ id:28, title:"Minimum Window Substring", description:"Input: 'ADOBECODEBANC'\nOutput: 'BANC'", difficulty:2, topic:"Sliding Window", correctAnswer:"sliding-window" },

{ id:29, title:"Sliding Window Median", description:"Maintain median in each window.", difficulty:3, topic:"Sliding Window", correctAnswer:"sliding-window" },

{ id:30, title:"Longest Repeating Replacement", description:"Replace chars to maximize substring.", difficulty:2, topic:"Sliding Window", correctAnswer:"sliding-window" },



/* =========================
KADANE
========================= */

{ id:31, title:"Maximum Subarray", description:"Input: [-2,1,-3,4]\nOutput: 4", difficulty:1, topic:"Kadane", correctAnswer:"kadane" },

{ id:32, title:"Stock Profit", description:"Input: [7,1,5,3,6]\nOutput: 5", difficulty:1, topic:"Kadane", correctAnswer:"kadane" },

{ id:33, title:"Max Product Subarray", description:"Input: [2,3,-2,4]\nOutput: 6", difficulty:2, topic:"Kadane", correctAnswer:"kadane" },

{ id:34, title:"Circular Subarray", description:"Find max circular sum.", difficulty:2, topic:"Kadane", correctAnswer:"kadane" },

{ id:35, title:"Max Rectangle Sum", description:"Find max rectangle sum in matrix.", difficulty:3, topic:"Kadane", correctAnswer:"kadane" },



/* =========================
MATH / ARRAYS
========================= */

{ id:36, title:"Missing Number", description:"Input: [3,0,1]\nOutput: 2", difficulty:1, topic:"Math", correctAnswer:"math" },

{ id:37, title:"Rotate Array", description:"Input: [1,2,3,4], k=2\nOutput: [3,4,1,2]", difficulty:1, topic:"Math", correctAnswer:"math" },

{ id:38, title:"Set Matrix Zero", description:"Matrix zero propagation.", difficulty:2, topic:"Math", correctAnswer:"math" },

{ id:39, title:"Spiral Matrix", description:"Traverse matrix in spiral order.", difficulty:2, topic:"Math", correctAnswer:"math" },



/* =========================
STRING
========================= */

{ id:40, title:"Palindrome Check", description:"Input: 'racecar'\nOutput: true", difficulty:1, topic:"String Manipulation", correctAnswer:"string" },

{ id:41, title:"Reverse Words", description:"Input: 'hello world'\nOutput: 'world hello'", difficulty:1, topic:"String Manipulation", correctAnswer:"string" },

{ id:42, title:"Longest Common Prefix", description:"Input: ['flower','flow']\nOutput: 'fl'", difficulty:1, topic:"String Manipulation", correctAnswer:"string" },

{ id:43, title:"String Compression", description:"Compress repeated chars.", difficulty:2, topic:"String Manipulation", correctAnswer:"string" },



/* =========================
BIT
========================= */

{ id:44, title:"Single Number", description:"Input: [2,2,1]\nOutput: 1", difficulty:1, topic:"Bit Manipulation", correctAnswer:"bit" },

{ id:45, title:"Count Set Bits", description:"Input: 5\nOutput: 2", difficulty:1, topic:"Bit Manipulation", correctAnswer:"bit" },

{ id:46, title:"Power of Two", description:"Input: 16\nOutput: true", difficulty:1, topic:"Bit Manipulation", correctAnswer:"bit" },

{ id:47, title:"Missing Number XOR", description:"Use XOR to find missing number.", difficulty:2, topic:"Bit Manipulation", correctAnswer:"bit" }

];

const getQuestionsByDifficulty = (difficulty) => {
  return questions.filter(q => q.difficulty === difficulty);
};

module.exports = {
  getQuestionsByDifficulty
};