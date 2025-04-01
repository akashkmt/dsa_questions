// You are given a string containing brackets. Your task is to determine whether the given string of brackets is valid or not.

const isValid = (str) => {
  const stack = [];
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let idx = 0; idx < str.length; idx += 1) {
    const char = str[idx];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (bracketMap[char]) {
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
