// 1.From you understanding of array create an array with 15 items inside.
const a = ["Cheese", "Cream", "Chicken", "Potatos", "Tomato", "Onion", "Garlic", "Soy sauce", "Pasta", "Salt", "Herbs", "Parpika", "Chili powder", "Siracha", "Parsley"]
console.log(a);
console.log("This array has", a.length, "item");
// 2.From the array just created in the above question remove the last item in the array. You cannot alter the original array.
a.pop(); 
console.log(a);
console.log("this array after pop has", a.length, "items");
//3.Add an item to the end of the list. Cannot alter the original array.
a.push ("jalapenos"); 
console.log(a);
console.log("This array after push has", a.length, "items");
// 4.Find the position of the first item, middle item and last item of the list and print them off separately.
// 5.Modify 3 items in the array and print them off.
var firstitem = a[0]; 
var lastitem = a[a.length-1];
var middleitem = a[(a.length +1)/2 - 1];
console.log ("the first item is", firstitem);
console.log ("the last item is", lastitem);
console.log ("the middle item is", middleitem);
a[0] = "Eggs";
a[a.length-1] = "Bread Crumbs";
a[(a.length +1)/2 -1] = "Mayo";
// 6.Using string interpolation combine 5 different variables together.
const point = ["Abdiaziz", "28", "UK", "Finland", "Basketball"]
console.log(point[0], "is", point[1], "he lives in the", point[2], "was born in",point[3], "and he loves", point[4]);
// 7. Delete the 2 items in the array
point.splice(0,2);
console.log(point);
// 8. Remove the first item from the array.


