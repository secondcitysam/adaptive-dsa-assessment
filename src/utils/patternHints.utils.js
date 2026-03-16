const patternHints = {
  "Two Pointer": {
    signals: [
      "Array is sorted",
      "Looking for pair/triplet relationships",
      "Optimize from O(n²) to O(n)",
      "Left/right movement over array"
    ],
    useWhen: "Use when two indices move toward/away from each other on ordered data."
  },

  "HashMap": {
    signals: [
      "Need fast lookup",
      "Frequency counting",
      "Detect duplicates",
      "Track elements seen before"
    ],
    useWhen: "Use when constant-time lookup or counting elements is required."
  },

  "Prefix Sum": {
    signals: [
      "Range sum queries",
      "Subarray sums",
      "Cumulative totals",
      "Transform repeated sum computation"
    ],
    useWhen: "Use when multiple range calculations depend on cumulative values."
  },

  "Sliding Window": {
    signals: [
      "Subarray or substring problems",
      "Window size grows/shrinks",
      "Max/min within range",
      "Continuous segment constraints"
    ],
    useWhen: "Use when maintaining a dynamic window over contiguous data."
  },

  "Kadane": {
    signals: [
      "Maximum subarray",
      "Best contiguous segment",
      "Reset running sum when negative"
    ],
    useWhen: "Use when finding maximum sum over contiguous segments."
  },

  "Math": {
    signals: [
      "Number properties",
      "Index patterns",
      "Modulo or arithmetic tricks"
    ],
    useWhen: "Use when arithmetic observations simplify computation."
  },

  "String Manipulation": {
    signals: [
      "Transform characters",
      "Palindrome checks",
      "Pattern comparison"
    ],
    useWhen: "Use when directly transforming or analyzing characters."
  },

  "Bit Manipulation": {
    signals: [
      "XOR tricks",
      "Power of two checks",
      "Binary flags"
    ],
    useWhen: "Use when bit-level operations simplify state tracking."
  },

  "Linked List": {
    signals: [
      "Fast/slow pointer",
      "Reversal operations",
      "Node traversal problems"
    ],
    useWhen: "Use when working with sequential node structures."
  }
};

const getHintForTopic = (topic) => {
  return patternHints[topic] || null;
};

module.exports = {
  getHintForTopic
};