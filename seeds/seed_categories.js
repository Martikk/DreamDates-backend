exports.seed = function(knex) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        { src: "https://res.cloudinary.com/dzytbkc5l/image/upload/v1717288558/DreamDate/Marriageproposal_v1kmvp.png", caption: "Marriage proposal", link: "/marriage-proposal" },
        { src: "https://res.cloudinary.com/dzytbkc5l/image/upload/v1717288558/DreamDate/Dates_gejk3u.png", caption: "Dates", link: "/dates" },
        { src: "https://res.cloudinary.com/dzytbkc5l/image/upload/v1717288558/DreamDate/Surprises_ztz8m4.png", caption: "Surprises", link: "/surprises" },
        { src: "https://res.cloudinary.com/dzytbkc5l/image/upload/v1717288557/DreamDate/Flowers_lqf0d5.png", caption: "Flowers", link: "/flowers" }
      ]);
    });
};
