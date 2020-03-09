const categories = [
  {
    id: "1",
    name: "Paracetamol 200 mg sp",
    tags: ["medicaments", "en attente"],
    count: 147,
    image: require("../assets/icons/plants.png")
  },
  {
    id: "2",
    name: "Cefalexine sp, 125mg/5ml, 100ml",
    tags: ["medicaments", "deja servi"],
    count: 16,
    image: require("../assets/icons/seeds.png")
  },
  {
    id: "3",
    name: "Spéctinomycine 2g",
    tags: ["medicaments", "en attente"],
    count: 68,
    image: require("../assets/icons/flowers.png")
  },
  {
    id: "4",
    name:"Amoxicilline SP 125mg/5ml, 100ml",
    tags: ["medicaments", "deja servi"],
    count: 17,
    image: require("../assets/icons/sprayers.png")
  },
  {
    id: "5",
    name: "Ampicilline  1g, fl",
    tags: ["medicaments", "deja servi"],
    count: 47,
    image: require("../assets/icons/pots.png")
  },
  {
    id: "6",
    name: "Fucidate sodique 250mg",
    tags: ["medicaments", "deja servi"],
    count: 47,
    image: require("../assets/icons/fertilizers.png")
  },
  {
    id: "7",
    name: "Oxacilline 250mg/5ml",
    tags: ["medicaments", "en attente"],
    count: 47,
    image: require("../assets/icons/pots.png")
  },
  {
    id: "8",
    name: "Cefixime 100mg/5ml",
    tags: ["medicaments", "deja servi"],
    count: 47,
    image: require("../assets/icons/fertilizers.png")
  },
  {
    id: "9",
    name: "Pénicilline benzathine  2,4 MUI, fl",
    tags: ["medicaments", "en attente"],
    count: 47,
    image: require("../assets/icons/flowers.png")
  },
  {
    id: "10",
    name: "PénicillineV,  phénoxyméthyle pénicilline 125mg/5ml, 100ml",
    tags: ["medicaments", "deja servi"],
    count: 47,
    image: require("../assets/icons/fertilizers.png")
  }
];

const medicaments = [
  {
    id: 1,
    name: "PénicillineV,  phénoxyméthyle pénicilline 125mg/5ml, 100ml",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "react-ui-kit",
  location: "Europe",
  email: "contact@react-ui-kit.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

export { categories, explore, medicaments, profile };
