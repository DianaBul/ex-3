const num = [4, 6, 8, 9, 0];
num.sort();
num.splice(3, 4, num[4], num[3]);
    console.log(num);