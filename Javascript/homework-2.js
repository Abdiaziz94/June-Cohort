
const a = ["Cheese", "Cream", "Chicken", "Potatos", "Tomato", "Onion", "Garlic", "Soy sauce", "Pasta", "Salt", "Herbs", "Parpika", "Chili powder", "Siracha", "Parsley"]
console.log(a);
console.log("This array has", a.length, "item");

a.pop(); 
console.log(a);
console.log("this array after pop has", a.length, "items");

a.push ("jalapenos"); 
console.log(a);
console.log("This array after push has", a.length, "items");

var firstitem = a[0]; 
var lastitem = a[a.length-1];
var middleitem = a[(a.length +1)/2 - 1];
console.log ("the first item is", firstitem);
console.log ("the last item is", lastitem);
console.log ("the middle item is", middleitem);
a[0] = "Eggs";
a[a.length-1] = "Bread Crumbs";
a[(a.length +1)/2 -1] = "Mayo";

const point = ["Abdiaziz", "28", "UK", "Finland", "Basketball"]
console.log(point[0], "is", point[1], "he lives in the", point[2], "was born in",point[3], "and he loves", point[4]);

point.splice(0,2);
console.log(point);




