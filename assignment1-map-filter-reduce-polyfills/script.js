// ------------------ PolyFill For Reduce ----------------------------------

 let arr = [1, 2, 3, 4, 5, 6];

 function reducePolyFill(arr, cb) {
   let sum = arr[0];
   for (let i = 1; i < arr.length; i++) {
     sum = cb(sum,arr[i]);
   }
   return sum;
 }

 function cb(acc,x) {
   return (acc+x);
 }

 console.log(reducePolyFill(arr,cb));

// --------------------- PolyFill For Filter ----------------------------

// let arr = [1, 2, 3, 4, 5, 6];

 function filterPolyFill(arr, cb) {
   let newarr = [];
   for (let i = 0; i < arr.length; i++) {
     if (cb(arr[i])) {
       newarr.push(arr[i]);
     }
   }
   return newarr;
 }

 function cb(x) {
     if (x%2!=0) {
         return x;
     }
 }

 console.log(filterPolyFill(arr,cb));

// ----------------------- PolyFill For Map -----------------------------

 function mapPolyFill(arr,cb) {
     let newarr= [];
     for (let i = 0; i < arr.length; i++) {
         newarr.push(cb(arr[i]));
     }
     return newarr;
 }
 function square(x) {
     return x*x;
  }

  console.log(mapPolyFill(arr,square));

