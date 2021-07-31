let arr_1: number[] = [1, 5, 22];
let arr_2: number[] = [10, 533, -22];

function max_num(arr: number[]) {
   return console.log(Math.max.apply(null, arr));
   }

max_num(arr_1)
max_num(arr_2)

