exports.seed = function(knex) {
  return knex('experiences').del()
    .then(function () {
      return knex('experiences').insert([
        {
          title: "Picnic by the Ocean",
          description: "Spend an unforgettable day by the ocean, enjoying the fresh sea breeze and breathtaking views. A picnic by the ocean is the perfect way to relax and spend quality time with your loved one, listening to the sound of the waves and feeling the soft sand beneath your feet.",
          imageUrl: "https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png",
          included: JSON.stringify([
            "Cozy spot on the beach with a blanket and pillows",
            "Delicious snacks and refreshing drinks",
            "Portable speaker with romantic music",
            "Hats and sunscreen",
            "Beachside photo session (optional)"
          ]),
          extras: JSON.stringify([
            "Option to order seafood or fresh fruits",
            "Beach games and activities (frisbee, volleyball, etc.)",
            "Romantic dinner at sunset (available at an additional cost)"
          ]),
          location: "A beautiful and secluded beach, perfect for a romantic picnic and enjoying nature away from the hustle and bustle of the city.",
          price: 200,
          booking: "Fill out the form on our website or contact our manager at [phone number] to book and get more information.",
          details: JSON.stringify({
            thisMonthPrice: "200$",
            ordered: 117,
            duration: "2-2.5 hours",
            note: "(the package can be booked after sunset for 8.30 p.m. or 9 p.m.)"
          }),
          videos: JSON.stringify([
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
          ]),
          images: JSON.stringify([
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
          ]),
          categories: JSON.stringify(["Dates", "Surprises"])
        },
        {
          title: "Romantic Dinner",
          description: "Immerse yourself in an atmosphere of elegance and refined taste in an exquisite restaurant with soft candlelight, live music, and gastronomic masterpieces.",
          imageUrl: "https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/RomanticDinner_pnuoo1.png",
          included: JSON.stringify([
            "Table for two with candlelight",
            "Gourmet three-course meal",
            "Live music performance",
            "Personalized menu",
            "Photographer to capture moments (optional)"
          ]),
          extras: JSON.stringify([
            "Wine pairing",
            "Private musician for serenade",
            "Custom flower arrangement"
          ]),
          location: "A high-end restaurant with a romantic ambiance, perfect for a special dinner with your loved one.",
          price: 250,
          booking: "Fill out the form on our website or contact our manager at [phone number] to book and get more information.",
          details: JSON.stringify({
            thisMonthPrice: "250$",
            ordered: 89,
            duration: "2-3 hours",
            note: "(Special dietary requirements can be accommodated upon request)"
          }),
          videos: JSON.stringify([
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
          ]),
          images: JSON.stringify([
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
          ]),
          categories: JSON.stringify(["Dates"])
        },
        {
          title: "Romantic Boat Ride",
          description: "Embark on a romantic boat ride on calm waters, relishing snacks and drinks against the backdrop of a sunset and a starry sky.",
          imageUrl: "https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/RomanticBoatRide_foa2oq.png",
          included: JSON.stringify([
            "Private boat ride for two",
            "Complimentary snacks and drinks",
            "Sunset views",
            "Blankets and pillows for comfort",
            "Professional photography session (optional)"
          ]),
          extras: JSON.stringify([
            "Gourmet picnic basket",
            "Live music performance",
            "Personalized message in a bottle"
          ]),
          location: "A serene lake or bay, providing a perfect setting for a romantic boat ride.",
          price: 400,
          booking: "Fill out the form on our website or contact our manager at [phone number] to book and get more information.",
          details: JSON.stringify({
            thisMonthPrice: "400$",
            ordered: 74,
            duration: "2 hours",
            note: "(Available for evening and night rides)"
          }),
          videos: JSON.stringify([
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
          ]),
          images: JSON.stringify([
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
          ]),
          categories: JSON.stringify(["Dates", "Surprises"])
        },
        {
          title: "Kitsilano Beach",
          description: "Choose a sunset evening at Kitsilano Beach to propose against the backdrop of mountains, the ocean, and a setting sun.",
          imageUrl: "https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/KitsilanoBeach_srxwf7.png",
          included: JSON.stringify([
            "Reserved spot on the beach",
            "Decorative setup with flowers and candles",
            "Professional photographer",
            "Bottle of champagne",
            "Personalized proposal setup"
          ]),
          extras: JSON.stringify([
            "Live music performance",
            "Custom message in the sand",
            "Romantic dinner setup"
          ]),
          location: "Kitsilano Beach, offering stunning views of the mountains and ocean.",
          price: 150,
          booking: "Fill out the form on our website or contact our manager at [phone number] to book and get more information.",
          details: JSON.stringify({
            thisMonthPrice: "150$",
            ordered: 102,
            duration: "1-2 hours",
            note: "(Ideal for sunset proposals)"
          }),
          videos: JSON.stringify([
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
          ]),
          images: JSON.stringify([
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
          ]),
          categories: JSON.stringify(["Dates", "Marriage proposal"])
        },
        {
          title: "Capilano Suspension Bridge",
          description: "Propose on the Capilano Suspension Bridge, enjoying the breathtaking views of the canyon and ancient forest for an unforgettable moment.",
          imageUrl: "https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/CapilanoSuspensionBridge_t1gzbx.png",
          included: JSON.stringify([
            "Private access to the bridge",
            "Decorative setup with flowers and lights",
            "Professional photographer",
            "Champagne toast",
            "Personalized proposal message"
          ]),
          extras: JSON.stringify([
            "Live acoustic music",
            "Custom engraved lock for the bridge",
            "Romantic picnic setup nearby"
          ]),
          location: "Capilano Suspension Bridge, offering stunning views of the canyon and ancient forest.",
          price: 250,
          booking: "Fill out the form on our website or contact our manager at [phone number] to book and get more information.",
          details: JSON.stringify({
            thisMonthPrice: "250$",
            ordered: 95,
            duration: "1-2 hours",
            note: "(Available for sunrise and sunset proposals)"
          }),
          videos: JSON.stringify([
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
          ]),
          images: JSON.stringify([
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
          ]),
          categories: JSON.stringify(["Dates", "Marriage proposal"])
        },
        {
          title: "Vancouver Lookout",
          description: "Take your love to the top of the Vancouver Lookout and propose while enjoying panoramic views of the city, mountains, and ocean.",
          imageUrl: "https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/VancouverLookout_dbgpx8.png",
          included: JSON.stringify([
            "Exclusive access to the lookout",
            "Decorative setup with flowers and candles",
            "Professional photographer",
            "Champagne toast",
            "Personalized proposal message"
          ]),
          extras: JSON.stringify([
            "Private musician for serenade",
            "Custom engraved lock for the lookout",
            "Romantic dinner setup nearby"
          ]),
          location: "Vancouver Lookout, offering breathtaking views of the city and surrounding landscape.",
          price: 300,
          booking: "Fill out the form on our website or contact our manager at [phone number] to book and get more information.",
          details: JSON.stringify({
            thisMonthPrice: "300$",
            ordered: 110,
            duration: "1-2 hours",
            note: "(Available for evening proposals)"
          }),
          videos: JSON.stringify([
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
            'https://www.youtube.com/embed/qV3YKU5pRho?si=HdH3KwDKD_FWjj3C',
          ]),
          images: JSON.stringify([
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
            'https://res.cloudinary.com/dzytbkc5l/image/upload/v1717286681/DreamDate/PicnicbytheOcean_znt1jg.png',
          ]),
          categories: JSON.stringify(["Dates", "Marriage proposal"])
        }
      ]);
    });
};
