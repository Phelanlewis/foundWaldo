function actionWhenFound(i) {
  console.log('Found Waldo at index ' + i +'!');
}

function findWaldo(arr, found) {
  arr.forEach(function(entry, i) {
	if (entry === "Waldo"){
    found(i);
    }
  });
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
