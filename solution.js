// your solution should go here
// for demo purposes use the console for any out you will need.

//code to satisfy 1st problem
var myRecipe = {
    "title": "Muffins",
    "servings": 7,
    "ingredients": ["10 Eggs", "1/4mls Vanilla Essence", "500g Wheat Bran", "1 tab Margarine","500mls Milk", "2 tbsp Icing Sugar"]
};

console.log(myRecipe.title);
console.log("Servings: " + myRecipe.servings);
console.log("Ingredients:");
for (var x = 0; x < myRecipe.ingredients.length; x++) {
    console.log(myRecipe.ingredients[x]);
}

//code to satisfy 2nd problem statement
var myBooks = [
  {title: 'The Da Vinci Code',
   author: 'Dan Brown',
   alreadyRead: false
  },
  {title: 'A Short History of Nearly Everything',
  author: 'Bill Bryson',
  alreadyRead: true
  },
  {title: 'Digital Fortress',
  author: 'Dan Brown',
  alreadyRead: true
  },
  {title: 'New Moon',
  author: 'Stephanie Meyer',
  alreadyRead: false
  },
  {title: 'Life of Pi',
  author: 'Yann Martel',
  alreadyRead: false
  }];

for (var i = 0; i < myBooks.length; i++) {
  var book = myBooks[i];
  var bookInfo = book.title + '" by ' + book.author;
  if (book.alreadyRead) {
    console.log('You already read "' + bookInfo);
  } else {
    console.log('You still need to read "' + bookInfo);
  }
}
