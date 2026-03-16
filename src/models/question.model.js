const questions = [

/* =========================
TWO POINTER
========================= */

{ id:1, title:"Pair Difference in Sorted Array", description:"Array is sorted. Find two numbers whose difference equals K in O(n). Which approach?", difficulty:1, topic:"Two Pointer", correctAnswer:"two-pointer" },
{ id:2, title:"Two Sum Sorted Constraint", description:"Given sorted array find pair that sums to target using O(1) space.", difficulty:1, topic:"Two Pointer", correctAnswer:"two-pointer" },
{ id:3, title:"Remove Duplicates In Place", description:"Remove duplicates from sorted array without extra space.", difficulty:1, topic:"Two Pointer", correctAnswer:"two-pointer" },
{ id:4, title:"Container Water Optimization", description:"Maximize container water area using linear scan from both ends.", difficulty:2, topic:"Two Pointer", correctAnswer:"two-pointer" },
{ id:5, title:"3 Sum Efficient", description:"Find triplets summing to zero in sorted array efficiently.", difficulty:2, topic:"Two Pointer", correctAnswer:"two-pointer" },
{ id:6, title:"Trapping Rain Water Optimized", description:"Compute trapped rainwater with constant space using left/right pointers.", difficulty:3, topic:"Two Pointer", correctAnswer:"two-pointer" },
{ id:7, title:"Closest Pair Sum", description:"Find pair with sum closest to target in sorted array.", difficulty:2, topic:"Two Pointer", correctAnswer:"two-pointer" },
{ id:8, title:"Merge Sorted Arrays In Place", description:"Merge two sorted arrays efficiently from end pointers.", difficulty:2, topic:"Two Pointer", correctAnswer:"two-pointer" },

/* =========================
HASHMAP
========================= */

{ id:9, title:"Two Sum Unsorted", description:"Find pair summing to target in unsorted array efficiently.", difficulty:1, topic:"HashMap", correctAnswer:"hashmap" },
{ id:10, title:"Element Frequency Counting", description:"Count occurrences of each number efficiently.", difficulty:1, topic:"HashMap", correctAnswer:"hashmap" },
{ id:11, title:"First Non Repeating Character", description:"Find first character that appears once in string.", difficulty:1, topic:"HashMap", correctAnswer:"hashmap" },
{ id:12, title:"Longest Consecutive Sequence", description:"Find longest consecutive elements sequence in O(n).", difficulty:2, topic:"HashMap", correctAnswer:"hashmap" },
{ id:13, title:"Group Anagrams", description:"Group words that are anagrams efficiently.", difficulty:2, topic:"HashMap", correctAnswer:"hashmap" },
{ id:14, title:"Minimum Window Character Tracking", description:"Track character frequency dynamically while shrinking window.", difficulty:3, topic:"HashMap", correctAnswer:"hashmap" },
{ id:15, title:"Detect Duplicate Numbers", description:"Check if array contains duplicates quickly.", difficulty:1, topic:"HashMap", correctAnswer:"hashmap" },
{ id:16, title:"Majority Element Tracking", description:"Track element frequency to detect majority element.", difficulty:1, topic:"HashMap", correctAnswer:"hashmap" },

/* =========================
PREFIX SUM
========================= */

{ id:17, title:"Range Sum Query", description:"Compute sum between indices quickly after preprocessing.", difficulty:1, topic:"Prefix Sum", correctAnswer:"prefix-sum" },
{ id:18, title:"Running Sum Array", description:"Build cumulative sum array for efficient queries.", difficulty:1, topic:"Prefix Sum", correctAnswer:"prefix-sum" },
{ id:19, title:"Subarray Sum Equals K", description:"Find number of subarrays with sum K.", difficulty:2, topic:"Prefix Sum", correctAnswer:"prefix-sum" },
{ id:20, title:"Equal 0 and 1 Subarray", description:"Find longest subarray with equal 0 and 1 values.", difficulty:2, topic:"Prefix Sum", correctAnswer:"prefix-sum" },
{ id:21, title:"2D Matrix Region Sum", description:"Compute submatrix sums quickly using preprocessing.", difficulty:3, topic:"Prefix Sum", correctAnswer:"prefix-sum" },
{ id:22, title:"Continuous Subarray Check", description:"Check if any subarray equals target sum.", difficulty:1, topic:"Prefix Sum", correctAnswer:"prefix-sum" },

/* =========================
SLIDING WINDOW
========================= */

{ id:23, title:"Maximum Sum Subarray Size K", description:"Find maximum sum of subarray with fixed size K.", difficulty:1, topic:"Sliding Window", correctAnswer:"sliding-window" },
{ id:24, title:"First Negative In Window", description:"For each window find first negative number.", difficulty:1, topic:"Sliding Window", correctAnswer:"sliding-window" },
{ id:25, title:"Longest Unique Substring", description:"Find longest substring without repeating characters.", difficulty:2, topic:"Sliding Window", correctAnswer:"sliding-window" },
{ id:26, title:"Minimum Window Substring", description:"Find smallest substring containing given pattern.", difficulty:2, topic:"Sliding Window", correctAnswer:"sliding-window" },
{ id:27, title:"Sliding Window Median", description:"Maintain median for each window.", difficulty:3, topic:"Sliding Window", correctAnswer:"sliding-window" },
{ id:28, title:"Longest Repeating Replacement", description:"Replace characters to maximize repeating substring.", difficulty:2, topic:"Sliding Window", correctAnswer:"sliding-window" },

/* =========================
KADANE
========================= */

{ id:29, title:"Maximum Subarray", description:"Find maximum sum contiguous subarray.", difficulty:1, topic:"Kadane", correctAnswer:"kadane" },
{ id:30, title:"Maximum Profit From Stock", description:"Find maximum profit from price array.", difficulty:1, topic:"Kadane", correctAnswer:"kadane" },
{ id:31, title:"Maximum Product Subarray", description:"Track max and min products dynamically.", difficulty:2, topic:"Kadane", correctAnswer:"kadane" },
{ id:32, title:"Circular Maximum Subarray", description:"Find maximum circular subarray sum.", difficulty:2, topic:"Kadane", correctAnswer:"kadane" },
{ id:33, title:"Maximum Sum Rectangle", description:"Find maximum sum rectangle in matrix.", difficulty:3, topic:"Kadane", correctAnswer:"kadane" },

/* =========================
MATH / ARRAYS
========================= */

{ id:34, title:"Missing Number In Array", description:"Find missing number from range 1..n efficiently.", difficulty:1, topic:"Math", correctAnswer:"math" },
{ id:35, title:"Find Duplicate Number", description:"Array contains one duplicate number detect it efficiently.", difficulty:1, topic:"Math", correctAnswer:"math" },
{ id:36, title:"Rotate Array By K", description:"Rotate array by K steps efficiently.", difficulty:1, topic:"Math", correctAnswer:"math" },
{ id:37, title:"Set Matrix Zeroes", description:"Set entire row and column to zero when element is zero.", difficulty:2, topic:"Math", correctAnswer:"math" },
{ id:38, title:"Spiral Matrix Traversal", description:"Traverse matrix in spiral order.", difficulty:2, topic:"Math", correctAnswer:"math" },

/* =========================
STRING MANIPULATION
========================= */

{ id:39, title:"Reverse Words In Sentence", description:"Reverse order of words in sentence.", difficulty:1, topic:"String Manipulation", correctAnswer:"string" },
{ id:40, title:"Check Palindrome String", description:"Check if string reads same forward and backward.", difficulty:1, topic:"String Manipulation", correctAnswer:"string" },
{ id:41, title:"Longest Common Prefix", description:"Find longest common prefix among strings.", difficulty:1, topic:"String Manipulation", correctAnswer:"string" },
{ id:42, title:"String Compression", description:"Compress repeated characters efficiently.", difficulty:2, topic:"String Manipulation", correctAnswer:"string" },

/* =========================
BIT MANIPULATION
========================= */

{ id:43, title:"Single Number", description:"Every element appears twice except one.", difficulty:1, topic:"Bit Manipulation", correctAnswer:"bit" },
{ id:44, title:"Count Set Bits", description:"Count number of 1 bits in integer.", difficulty:1, topic:"Bit Manipulation", correctAnswer:"bit" },
{ id:45, title:"Power Of Two", description:"Check if number is power of two.", difficulty:1, topic:"Bit Manipulation", correctAnswer:"bit" },
{ id:46, title:"Find Missing Number XOR", description:"Find missing number using XOR trick.", difficulty:2, topic:"Bit Manipulation", correctAnswer:"bit" },

/* =========================
LINKED LIST
========================= */

{ id:47, title:"Detect Cycle", description:"Detect if linked list contains cycle.", difficulty:1, topic:"Linked List", correctAnswer:"linked-list" },
{ id:48, title:"Find Middle Node", description:"Find middle element of linked list.", difficulty:1, topic:"Linked List", correctAnswer:"linked-list" },
{ id:49, title:"Reverse Linked List", description:"Reverse singly linked list.", difficulty:1, topic:"Linked List", correctAnswer:"linked-list" },
{ id:50, title:"Merge Two Sorted Lists", description:"Merge two sorted linked lists.", difficulty:2, topic:"Linked List", correctAnswer:"linked-list" }

];

const getQuestionsByDifficulty = (difficulty) => {
  return questions.filter(
    q => q.difficulty === difficulty
  );
};

module.exports = {
  getQuestionsByDifficulty
};