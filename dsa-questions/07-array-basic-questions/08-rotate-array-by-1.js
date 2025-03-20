function leftRotateByOne(arr) {
  // // Using Inbuilt Methods
  // let newArray = arr.slice(1).concat(arr.slice(0, 1));
  // for (let i in newArray) arr[i] = newArray[i];
  // return arr;

  // // Without Using Inbuilt Methods
  let save = arr[0];
  for (let i = 0; i < arr.length - 1; i++) arr[i] = arr[i + 1];
  arr[arr.length - 1] = save;
  return arr;
}

module.exports = { leftRotateByOne };
