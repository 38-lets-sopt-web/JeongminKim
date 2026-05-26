function solution(num_list) {
  var odd = "",
    eve = "";
  num_list.forEach((n) => (n % 2 == 0 ? (eve += n) : (odd += n)));
  return Number(odd) + Number(eve);
}
