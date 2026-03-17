const patternHints = {

"Two Pointer": {
  useWhen: "Use when you can solve the problem by moving two indices in a controlled manner across the data.",

  coreIdea: "Instead of checking all combinations (O(n²)), use structure (like sorting or linked traversal) to converge toward the answer using two moving references.",

  signals: [
    "Array is sorted or can be sorted",
    "Looking for pair / triplet relationships",
    "Need to reduce nested loops to linear time",
    "Opposite direction movement (left ↔ right)",
    "Fast and slow pointer in linked structures",
    "Finding middle, detecting cycle, merging sequences"
  ],

  patternsInside: [
    "Opposite direction pointers (left/right)",
    "Fast & slow pointer (linked list problems)",
    "Expand + contract pointer logic",
    "Merging from ends"
  ],

  whenNotToUse: [
    "Array is unsorted AND no sorting allowed",
    "Need random access lookup → use HashMap",
    "Problem is not about pairs/traversal relationships"
  ],

  mistakes: [
    "Forgetting to sort when needed",
    "Moving both pointers incorrectly",
    "Not handling duplicates properly",
    "Using brute force instead"
  ]
},



"HashMap": {
  useWhen: "Use when you need constant-time lookup, counting, or tracking previously seen elements.",

  coreIdea: "Trade space for time by storing information so you don’t recompute or search repeatedly.",

  signals: [
    "Need fast lookup (O(1))",
    "Frequency counting",
    "Detect duplicates or repeats",
    "Check if element exists before",
    "Mapping values to indices or counts"
  ],

  patternsInside: [
    "Value → index mapping",
    "Frequency map",
    "Visited tracking",
    "Pair complement lookup"
  ],

  whenNotToUse: [
    "Problem depends on order → use Two Pointer / Sliding Window",
    "Memory constraints are strict",
    "No repeated lookups needed"
  ],

  mistakes: [
    "Using nested loops instead of map",
    "Not handling collisions logically",
    "Overusing map where simple logic works"
  ]
},



"Prefix Sum": {
  useWhen: "Use when multiple range-based computations depend on cumulative values.",

  coreIdea: "Precompute cumulative results once so repeated queries become constant time.",

  signals: [
    "Range sum queries",
    "Subarray sum problems",
    "Repeated sum computations",
    "Need fast query after preprocessing"
  ],

  patternsInside: [
    "1D prefix sum array",
    "2D prefix matrix",
    "Prefix + HashMap combo",
    "Difference array trick"
  ],

  whenNotToUse: [
    "Only single query → overhead unnecessary",
    "Non-additive problems"
  ],

  mistakes: [
    "Recomputing sums repeatedly",
    "Incorrect index handling",
    "Not using prefix subtraction correctly"
  ]
},



"Sliding Window": {
  useWhen: "Use when dealing with contiguous segments where window size grows or shrinks dynamically.",

  coreIdea: "Instead of recalculating every subarray, maintain a moving window that updates incrementally.",

  signals: [
    "Subarray / substring problems",
    "Contiguous segments",
    "Window expands and shrinks",
    "Max/min within a range",
    "Constraints like 'at most k'"
  ],

  patternsInside: [
    "Fixed window size",
    "Variable window size",
    "Two pointer + window combo",
    "Frequency map inside window"
  ],

  whenNotToUse: [
    "Non-contiguous problems",
    "Random access needed"
  ],

  mistakes: [
    "Not shrinking window properly",
    "Losing track of constraints",
    "Resetting window unnecessarily"
  ]
},



"Kadane": {
  useWhen: "Use when finding maximum or minimum sum over contiguous segments.",

  coreIdea: "Drop negative contributions and keep extending profitable segments.",

  signals: [
    "Maximum subarray problems",
    "Contiguous segment optimization",
    "Running sum logic",
    "Global max tracking"
  ],

  patternsInside: [
    "Classic Kadane",
    "Max + Min tracking (product)",
    "Circular Kadane",
    "2D Kadane"
  ],

  whenNotToUse: [
    "Non-contiguous selection",
    "Multiple disjoint segments needed"
  ],

  mistakes: [
    "Trying all subarrays",
    "Not resetting sum when negative",
    "Missing edge cases (all negatives)"
  ]
},



"Math": {
  useWhen: "Use when direct computation, observation, or formula simplifies the problem.",

  coreIdea: "Recognize patterns or properties to avoid simulation.",

  signals: [
    "Number properties",
    "Index-based transformations",
    "Modulo / cyclic patterns",
    "Mathematical relationships"
  ],

  patternsInside: [
    "Arithmetic simplification",
    "Greedy math logic",
    "Index mapping",
    "Cycle detection via math"
  ],

  whenNotToUse: [
    "Complex state tracking needed",
    "Requires dynamic memory structures"
  ],

  mistakes: [
    "Overcomplicating simple math problems",
    "Ignoring patterns in numbers"
  ]
},



"String Manipulation": {
  useWhen: "Use when directly transforming or analyzing characters in strings.",

  coreIdea: "Treat strings as arrays and apply transformations efficiently.",

  signals: [
    "Character-level operations",
    "Palindrome checks",
    "Reversal / transformation",
    "Pattern comparison"
  ],

  patternsInside: [
    "Two pointer on strings",
    "Frequency-based logic",
    "Substring handling",
    "Character mapping"
  ],

  whenNotToUse: [
    "Heavy numeric or structural problems",
    "Requires graph/tree logic"
  ],

  mistakes: [
    "Using extra space unnecessarily",
    "Ignoring edge cases (empty, single char)"
  ]
},



"Bit Manipulation": {
  useWhen: "Use when binary representation simplifies computation or reduces complexity.",

  coreIdea: "Exploit properties of bits (XOR, AND, shifts) to eliminate loops or extra memory.",

  signals: [
    "XOR tricks",
    "Power of two checks",
    "Unique element detection",
    "Binary flags or masks"
  ],

  patternsInside: [
    "XOR cancellation",
    "Bit masking",
    "Shift operations",
    "Set bit counting"
  ],

  whenNotToUse: [
    "Readable solution needed (overkill)",
    "Problem doesn’t benefit from binary ops"
  ],

  mistakes: [
    "Not understanding XOR properties",
    "Confusing bit operations",
    "Using brute force instead"
  ]
}

};


const getHintForTopic = (topic) => {
  return patternHints[topic] || null;
};

module.exports = {
  getHintForTopic
};