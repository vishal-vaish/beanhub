import images from "@/utils/images";
import icons from "@/utils/icons";
import {Burger, ItemCardTypes, Momo, Pizza} from "@/utils/types";

export const COLOR = {
  iconColor: "#FFB800",
  greyColor: "#737373",
  whiteColor: "#FFFFFF",
}


export const onBoardingData = [
  {
    id: 1,
    title: "Choose and customize your Drinks",
    description: "Customize your own drink exactly how you like it by adding any topping you like!!!",
    icon: images.onBoarding_1,
  },
  {
    id: 2,
    title: "Choose and customize your Drinks",
    description: "Customize your own drink exactly how you like it by adding any topping you like!!!",
    icon: images.onBoarding_1,
  },
  {
    id: 3,
    title: "Get and Redeem Voucher",
    description: "Exciting prizes await you! Redeem yours by collecting all the points after purchase in the app!",
    icon: images.onBoarding_2,
  },
]

export const signProvider = [
  {
    id: 1,
    backgroundColor: "#F0F5FA",
    icon: icons.google
  },
  {
    id: 2,
    backgroundColor: "#395998",
    icon: icons.facebook
  },
  {
    id: 3,
    backgroundColor: "#1B1F2F",
    icon: icons.apple
  }
]

const mockedBurger:Burger[] = [
  {
    "id": "burger_001",
    "name": "Classic Beef Burger",
    "description": "A juicy grilled beef patty topped with fresh lettuce, tomato, onion, pickles, and our special house sauce. Served with a side of crispy fries.",
    "price": 9.99,
    "ingredients": [
      "beef patty",
      "lettuce",
      "tomato",
      "onion",
      "pickles",
      "house sauce",
      "burger bun"
    ],
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    "available": true,
    "customizations": {
      "cheese": {
        "type": "checkbox",
        "label": "Add Cheese",
        "price": 1.0
      },
      "bacon": {
        "type": "checkbox",
        "label": "Add Bacon",
        "price": 1.5
      },
      "patty_size": {
        "type": "select",
        "label": "Patty Size",
        "options": [
          {
            "label": "Regular",
            "price": 0.0
          },
          {
            "label": "Large",
            "price": 2.0
          }
        ]
      }
    }
  },
  {
    "id": "burger_002",
    "name": "Spicy Chicken Burger",
    "description": "Crispy fried chicken breast coated in a spicy batter, topped with lettuce, tomato, pickles, and spicy mayo. Served with a side of coleslaw.",
    "price": 8.49,
    "ingredients": [
      "chicken breast",
      "lettuce",
      "tomato",
      "pickles",
      "spicy mayo",
      "burger bun"
    ],
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1604152135912-04a752c25d9a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    "available": true,
    "customizations": {
      "extra_spice": {
        "type": "checkbox",
        "label": "Extra Spice",
        "price": 0.5
      },
      "sauce": {
        "type": "select",
        "label": "Choose Sauce",
        "options": [
          {
            "label": "Ranch",
            "price": 0.0
          },
          {
            "label": "Honey Mustard",
            "price": 0.5
          }
        ]
      }
    }
  },
  {
    "id": "burger_003",
    "name": "Veggie Delight Burger",
    "description": "A delicious grilled veggie patty topped with avocado, cucumber, tomato, lettuce, and vegan aioli. Served with a side of sweet potato fries.",
    "price": 7.99,
    "ingredients": [
      "veggie patty",
      "avocado",
      "cucumber",
      "tomato",
      "lettuce",
      "vegan aioli",
      "whole wheat bun"
    ],
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1603046891292-1c795c5ef3c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    "available": true,
    "customizations": {
      "extra_avocado": {
        "type": "checkbox",
        "label": "Extra Avocado",
        "price": 1.5
      },
      "bun_type": {
        "type": "select",
        "label": "Bun Type",
        "options": [
          {
            "label": "Whole Wheat",
            "price": 0.0
          },
          {
            "label": "Gluten-Free",
            "price": 1.0
          }
        ]
      }
    }
  }
]

const mockedPizza: Pizza[] = [
  {
    "id": "pizza_001",
    "name": "Margherita Pizza",
    "description": "A classic Margherita with fresh mozzarella, ripe tomatoes, and fragrant basil leaves, drizzled with extra virgin olive oil.",
    "price": 11.99,
    "ingredients": [
      "mozzarella",
      "tomato sauce",
      "basil",
      "olive oil",
      "pizza dough"
    ],
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1564936281658-4b529c5ef3c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    "available": true,
    "customizations": {
      "extra_cheese": {
        "type": "checkbox",
        "label": "Extra Cheese",
        "price": 2.0
      },
      "crust_type": {
        "type": "select",
        "label": "Crust Type",
        "options": [
          {
            "label": "Thin Crust",
            "price": 0.0
          },
          {
            "label": "Stuffed Crust",
            "price": 3.0
          }
        ]
      }
    }
  },
  {
    "id": "pizza_002",
    "name": "Pepperoni Pizza",
    "description": "A savory pizza loaded with spicy pepperoni slices, mozzarella cheese, and tangy tomato sauce on a crispy crust.",
    "price": 13.49,
    "ingredients": [
      "pepperoni",
      "mozzarella",
      "tomato sauce",
      "pizza dough"
    ],
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1601924759538-f35af7c02efb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    "available": true,
    "customizations": {
      "extra_pepperoni": {
        "type": "checkbox",
        "label": "Extra Pepperoni",
        "price": 2.5
      },
      "spice_level": {
        "type": "select",
        "label": "Spice Level",
        "options": [
          {
            "label": "Mild",
            "price": 0.0
          },
          {
            "label": "Spicy",
            "price": 0.5
          }
        ]
      }
    }
  },
  {
    "id": "pizza_003",
    "name": "Veggie Supreme Pizza",
    "description": "A delightful combination of bell peppers, onions, mushrooms, olives, and tomatoes on a bed of mozzarella and tomato sauce.",
    "price": 12.49,
    "ingredients": [
      "bell peppers",
      "onions",
      "mushrooms",
      "olives",
      "tomatoes",
      "mozzarella",
      "tomato sauce",
      "pizza dough"
    ],
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1594007659757-1c795c5ef3c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    "available": true,
    "customizations": {
      "extra_veggies": {
        "type": "checkbox",
        "label": "Extra Veggies",
        "price": 2.0
      },
      "cheese_type": {
        "type": "select",
        "label": "Cheese Type",
        "options": [
          {
            "label": "Mozzarella",
            "price": 0.0
          },
          {
            "label": "Vegan Cheese",
            "price": 2.0
          }
        ]
      }
    }
  }
]

const mockedMomos:Momo[] = [
  {
    "id": "momo_001",
    "name": "Chicken Momos",
    "description": "Steamed dumplings filled with minced chicken, herbs, and spices, served with a tangy chili dipping sauce.",
    "price": 6.99,
    "ingredients": [
      "minced chicken",
      "onion",
      "garlic",
      "ginger",
      "coriander",
      "chili flakes",
      "flour"
    ],
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1605473401121-bff3dd500f9d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    "available": true,
    "customizations": {
      "spice_level": {
        "type": "select",
        "label": "Spice Level",
        "options": [
          {
            "label": "Mild",
            "price": 0.0
          },
          {
            "label": "Medium",
            "price": 0.5
          },
          {
            "label": "Spicy",
            "price": 1.0
          }
        ]
      },
      "cooking_style": {
        "type": "select",
        "label": "Cooking Style",
        "options": [
          {
            "label": "Steamed",
            "price": 0.0
          },
          {
            "label": "Fried",
            "price": 1.5
          }
        ]
      }
    }
  },
  {
    "id": "momo_002",
    "name": "Veggie Momos",
    "description": "Steamed dumplings filled with a mix of finely chopped vegetables, herbs, and spices, served with a spicy tomato chutney.",
    "price": 5.99,
    "ingredients": [
      "cabbage",
      "carrot",
      "onion",
      "garlic",
      "ginger",
      "coriander",
      "flour"
    ],
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1581579187779-976bd8d8736c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    "available": true,
    "customizations": {
      "extra_sauce": {
        "type": "checkbox",
        "label": "Extra Sauce",
        "price": 0.5
      },
      "serving_style": {
        "type": "select",
        "label": "Serving Style",
        "options": [
          {
            "label": "Steamed",
            "price": 0.0
          },
          {
            "label": "Pan-Fried",
            "price": 1.5
          }
        ]
      }
    }
  }
]


export const products:ItemCardTypes[] = [
  {
    "id": "1",
    "cafeName": "Brewed Bliss",
    "closed": false,
    "rating": 4.5,
    "distance": "1.2 km",
    "items": {
      "burger": mockedBurger,
      "pizza": mockedPizza,
      "momos": mockedMomos
    },
    "images":[
     "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
  },
  {
    "id": "2",
    "cafeName": "Java Junction",
    "closed": true,
    "rating": 3.8,
    "distance": "2.0 km",
    "items": {
      "burger": mockedBurger,
      "momos": mockedMomos
    },
    "images":[
      "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
  },
  {
    "id": "3",
    "cafeName": "Espresso Express",
    "closed": false,
    "rating": 4.2,
    "distance": "0.5 km",
    "items": {
      "burger": mockedBurger,
      "pizza": mockedPizza,
      "momos": mockedMomos
    },
    "images":[
      "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
  },
  {
    "id": "4",
    "cafeName": "Latte Land",
    "closed": false,
    "rating": 4.0,
    "distance": "1.8 km",
    "items": {
      "burger": mockedBurger,
      "pizza": mockedPizza,
      "momos": mockedMomos
    },
    "images":[
      "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
  },
  {
    "id": "5",
    "cafeName": "Caffeine Haven",
    "closed": true,
    "rating": 4.8,
    "distance": "3.0 km",
    "items": {
      "burger": mockedBurger,
      "pizza": mockedPizza,
    },
    "images":[
      "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
  },
]
