const isSubSequence = (small, big) => {
  small = small.toLowerCase().split(" ");
  big = big.toLowerCase().split(" ");

  if (small.length > big.length) return false;

  let isMatched = true;

  for (let i = 0; i < small.length; i++) {
    let innerIsMatched = false;
    for (let j = i; j < big.length; j++) {
      if (big[j].startsWith(small[i])) {
        innerIsMatched = true;
        break;
      }
    }
    if (!innerIsMatched) {
      isMatched = false;
      break;
    }
  }
  return isMatched;
};

export default isSubSequence;
