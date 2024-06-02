exports.seed = function(knex) {
  return knex('social_links').del()
    .then(function () {
      return knex('social_links').insert([
        { href: "https://github.com/Martikk", imgSrc: "https://res.cloudinary.com/dzytbkc5l/image/upload/v1717294988/DreamDate/social/skill-icons_instagram_imiuuo.png", alt: "messege" },
        { href: "https://github.com/Martikk", imgSrc: "https://res.cloudinary.com/dzytbkc5l/image/upload/v1717294987/DreamDate/social/twitter_tucrwe.png", alt: "instagramm" },
        { href: "https://github.com/Martikk", imgSrc: "https://res.cloudinary.com/dzytbkc5l/image/upload/v1717294986/DreamDate/social/logos_facebook_zabmai.png", alt: "facebook" },
        { href: "https://github.com/Martikk", imgSrc: "https://res.cloudinary.com/dzytbkc5l/image/upload/v1717294987/DreamDate/social/logos_whatsapp-icon_fak6fz.png", alt: "WhatsApp" },
        { href: "https://github.com/Martikk", imgSrc: "https://res.cloudinary.com/dzytbkc5l/image/upload/v1717294987/DreamDate/social/twitter_tucrwe.png", alt: "Twitter" }
      ]);
    });
};
