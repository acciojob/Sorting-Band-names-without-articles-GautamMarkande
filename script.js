//your code here
let list = document.getElementsByTagName("ul")[0];
//ul.id = "band";
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

//let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Pink Floyd', 'The Beatles', 'Metallica', 'Nirvana'];

// Function to remove articles from band names
function removeArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

// Sort the band names without articles in lexicographic order
touristSpots.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Create the list of band names
//let list = document.createElement('ul');
list.id = 'band';

// Add band names as list items to the list
touristSpots.forEach(name => {
  let listItem = document.createElement('li');
	listItem.style.color = "white";
  listItem.textContent = name;
  list.appendChild(listItem);
});

// Add the list to the document
//document.body.appendChild(list);

