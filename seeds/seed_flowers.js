exports.seed = function(knex) {
  return knex('flowers').del()
    .then(function () {
      return knex('flowers').insert([
        { name: "Peperomia", price: 25, rating: 5.0, reviews: 10, img: "https://bloomex.ca/components/com_virtuemart/shop_image/product/lf1012c2.jpg" },
        { name: "Snake Plant", price: 29, rating: 4.9, reviews: 59, img: "https://bloomex.ca/components/com_virtuemart/shop_image/product/lf1155c_reg.png" },
        { name: "Fiddle Leaf Fig", price: 30, rating: 4.5, reviews: 42, img: "https://bloomex.ca/components/com_virtuemart/shop_image/product/six_sweetheart_roses_0.png" },
        { name: "Ponytail Palm", price: 49, rating: 4.7, reviews: 7, img: "https://bloomex.ca/components/com_virtuemart/shop_image/product/LF11-92/36-Long-Stemmed-Yellow-Roses.jpg" },
        { name: "Philodendron", price: 39, rating: 4.9, reviews: 21, img: "https://bloomex.ca/components/com_virtuemart/shop_image/product/24_long_stem_red_roses_0.jpg" },
        { name: "Aloe Vera", price: 20, rating: 4.1, reviews: 15, img: "https://bloomex.ca/components/com_virtuemart/shop_image/product/LF212-50/Sweetheart-Bouquet.png" },
        { name: "ZZ Plant", price: 40, rating: 4.2, reviews: 17, img: "https://bloomex.ca/components/com_virtuemart/shop_image/product/lf1180w.jpg" },
        { name: "Jade Pothos", price: 35, rating: 4.6, reviews: 13, img: "https://bloomex.ca/components/com_virtuemart/shop_image/product/LM-499/The-Love-Machine.jpg" }
      ]);
    });
};
