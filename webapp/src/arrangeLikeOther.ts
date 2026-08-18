export default function arrangeLikeOther(
  ruleArrayToSort: string[][],
  ruleArrayToMatch: string[][],
) {
  const arrayToReturn = ruleArrayToMatch.map((value) => {
    return ruleArrayToSort.filter((item) => {
      return (
        item[0] === value[0] && item[1] === value[1] && item[2] === value[2]
      );
    })[0];
  });
  for (const rule of ruleArrayToSort) {
    if (!arrayToReturn.includes(rule)) {
      arrayToReturn.push(rule)
    }
  }
  return arrayToReturn.filter(Boolean); // if truthy
}
