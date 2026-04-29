function solution(num_list) {
  var answer =
    num_list.length > 10
      ? num_list.reduce((acc, n) => acc + n, 0)
      : num_list.reduce((acc, n) => acc * n, 1);
  return answer;
}
