function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (
      j < prefix.length &&
      j < strs[i].length &&
      prefix.charAt(j) === strs[i].charAt(j)
    ) {
      j++;
    }
    prefix = prefix.substring(0, j);
  }
  return prefix;
}
