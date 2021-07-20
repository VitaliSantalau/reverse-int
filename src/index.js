module.exports = function reverse (n) {
  n = n < 0 ? -n : n;
  return  `${n}`
    .split('')
    .reduce((acc, _elem, i , arr) => {
      acc[i] = arr[(arr.length - 1) - i];
      return acc;
    }, [])
    .join('');
}