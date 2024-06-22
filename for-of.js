let restaurant = ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'pizza', 'Pasta', 'Risotto'];
for (let item of restaurant.entries()){
    console.log(item);
}
//[ 0, 'Focaccia' ][ 1, 'Bruschetta' ][ 2, 'Garlic Bread' ][ 3, 'Caprese Salad' ][ 4, 'pizza' ][ 5, 'Pasta' ][ 6, 'Risotto' ];

for (let [i, el] of restaurant.entries()){
    console.log(`${i + 1}: ${el}`);
}