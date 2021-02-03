// 1: Get the node with the  main title
// ... your code here
const h1 = document.getElementsByTagName("h1")[0];
// console.log(h1);
// => <h1>Fruits and veggies</h1>
// ----------------------------------------------
// 2: Get the main title text
// ... your code here
const mainText = h1.innerHTML;
// console.log(mainText);
// => Fruits and veggies
// ----------------------------------------------
// 3: Get all the nodes with the fruit items
// ... your code here
// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
const fruitItems = document.getElementsByClassName("fruit-item");
// console.log(fruitItems);
// ----------------------------------------------
// 4: Get all the veggie items - the text
// ... your code here'
const veggieItems = document.getElementsByClassName("veggie-item");
console.log(veggieItems);
const veggieItemsArray = Array.from(veggieItems);

veggieItemsArray.forEach((veggie) => {
  const veggieText = veggie.innerHTML;
  console.log(veggieText);
});
// Broccoli Celery Potato Spinach
// ----------------------------------------------
// 5: Get the subtitle in the veggies section
// ... your code here
// => Veggies
// ----------------------------------------------
// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)
// ... your code here
// => fruit-title
// ----------------------------------------------
// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit
// ... your code here
// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------
// 8: Remove class 'veggies' from the unordered list of veggies
// ... your code here
// => <ul>...</ul>
// ----------------------------------------------
// 9: Add a class 'veggie-love' to all the veggies
// ... your code here
// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------
// 10: Remove class 'veggie-item' from 'spinach'
// ... your code here
// => ... <li class="veggie-love">Spinach</li>
