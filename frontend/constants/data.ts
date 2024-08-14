import images from "./images";
import icons from "@/constants/icons";

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

export const products = [
  {
    "id": "1",
    "cafeName": "Brewed Bliss",
    "closed": false,
    "rating": 4.5,
    "distance": "1.2 km",
    "items": {
      "burger": true,
      "pizza": false,
      "momos": true
    }
  },
  {
    "id": "2",
    "cafeName": "Java Junction",
    "closed": true,
    "rating": 3.8,
    "distance": "2.0 km",
    "items": {
      "burger": true,
      "pizza": true,
      "momos": false
    }
  },
  {
    "id": "3",
    "cafeName": "Espresso Express",
    "closed": false,
    "rating": 4.2,
    "distance": "0.5 km",
    "items": {
      "burger": false,
      "pizza": true,
      "momos": true
    }
  },
  {
    "id": "4",
    "cafeName": "Latte Land",
    "closed": false,
    "rating": 4.0,
    "distance": "1.8 km",
    "items": {
      "burger": true,
      "pizza": true,
      "momos": false
    }
  },
  {
    "id": "5",
    "cafeName": "Caffeine Haven",
    "closed": true,
    "rating": 4.8,
    "distance": "3.0 km",
    "items": {
      "burger": false,
      "pizza": true,
      "momos": true
    }
  },
  {
    "id": "6",
    "cafeName": "Mocha Manor",
    "closed": false,
    "rating": 3.5,
    "distance": "2.5 km",
    "items": {
      "burger": true,
      "pizza": false,
      "momos": true
    }
  },
  {
    "id": "7",
    "cafeName": "Café Central",
    "closed": false,
    "rating": 4.6,
    "distance": "1.0 km",
    "items": {
      "burger": true,
      "pizza": true,
      "momos": false
    }
  },
  {
    "id": "8",
    "cafeName": "Bean Bistro",
    "closed": true,
    "rating": 4.1,
    "distance": "0.8 km",
    "items": {
      "burger": false,
      "pizza": true,
      "momos": false
    }
  },
  {
    "id": "9",
    "cafeName": "Drip Delight",
    "closed": false,
    "rating": 4.7,
    "distance": "1.5 km",
    "items": {
      "burger": true,
      "pizza": true,
      "momos": true
    }
  },
  {
    "id": "10",
    "cafeName": "Brew Brothers",
    "closed": false,
    "rating": 4.3,
    "distance": "2.2 km",
    "items": {
      "burger": true,
      "pizza": false,
      "momos": true
    }
  }
]