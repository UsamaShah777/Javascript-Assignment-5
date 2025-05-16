var products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 102,
      title: "Mobile",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 103,
      title: "Bike",
      variations: [
        { id: 1, color: "black", price: 55000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 3.0,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
      ],
    },
  ];


//   QUESTION 1
  let titles = products.map(product => product.title);
  console.log(titles);
 

//   QUESTION 2
let blackColorProducts = products.filter(product =>
    product.variations.some(variation => variation.color === "black")
  );
  console.log(blackColorProducts);


//   QUESTION 3
let totalStock = products.reduce((acc, product) => {
    return acc + product.variations.reduce((sum, variation) => sum + variation.quantity, 0);
  }, 0);
  console.log(totalStock);


//   QUESTION 4
let averageRatings = products.map(product => {
    const validReviews = product.reviews.filter(review => review.status);
    const totalRating = validReviews.reduce((sum, review) => sum + review.rating, 0);
    const average = validReviews.length ? totalRating / validReviews.length : 0;
    return {
      title: product.title,
      averageRating: parseFloat(average.toFixed(1))
    };
  });
  console.log(averageRatings);


//   QUESTION 5
let fiveStarProducts = products.filter(product =>
    product.reviews.some(review => review.rating === 5.0)
  );
  console.log(fiveStarProducts);
  
// QUESTION 6
let formattedVariations = products.map(product => ({
    title: product.title,
    variations: product.variations.map(({ color, price, quantity }) => ({
      color,
      price,
      quantity
    }))
  }));
  console.log(formattedVariations);
  

  
// QUESTION 7

let totalRevenue = products.reduce((total, product) => {
    return total + product.variations.reduce((sum, variation) => {
      return sum + (variation.price * variation.quantity);
    }, 0);
  }, 0);
  console.log(totalRevenue);
  // Output: 1635000
  
  

  
// QUESTION 8
var moreThanFive = products.filter(product =>
    product.variations.some(variation => variation.quantity > 5)
  );
  console.log(moreThanFive);

  
  
// QUESTION 9
var summary = products.map(product => ({
    title: product.title,
    totalVariations: product.variations.length,
    totalReviews: product.reviews.length
  }));
  console.log(summary);

  
// QUESTION 10
var highestStockProduct = products.reduce((max, product) => {
    const total = product.variations.reduce((sum, v) => sum + v.quantity, 0);
    return total > max.totalStock ? { title: product.title, totalStock: total } : max;
  }, { title: "", totalStock: 0 });
  console.log(highestStockProduct);