// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
export const mapper = (
  current: number,
  range: { start: number; end: number },
  newRange: { start: number; end: number }
): number => {
  return (
    ((current - range.start) * (newRange.end - newRange.start)) /
      (range.end - range.start) +
    newRange.start
  );
};

export function removeDuplicates(array: any) {
  return array.filter((obj: any, index: number, arr: any) => {
    return (
      arr.map((mapObj: any) => mapObj.record).indexOf(obj.record) === index
    );
  });
}
