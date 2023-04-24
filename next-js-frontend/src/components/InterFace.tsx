export interface IRestaurant {
  _id: string;
  restaurantName: string;
  address: {
    district: string;
    street: string;
    building: string;
    address: string;
    location: {
      type: string;
      coordinates: number[];
    };
  };
  restaurantRate: [
    {
      rateType: string;
      userId: string;
      score: number;
      comment: string;
    }
  ];
  cuisineType: string[];
  contact: {
    phone: number;
    facebook: string;
    Instagram: string;
    link: string;
  };
  email: string;
  img: string[];
  logoImg: string | null;
  schedule: {
    weekday: { open: number; close: number };
    weekend: { open: number; close: number };
  };
}

export interface Ifoods {
  foodId: string;
  food: {
    _id: string;
    foodName: string;
    restaurantId: string;
    price: number;
    foodType: string;
    img: [string];
    ingredients: [string];
  };
  restaurantName: string;
  avg_rate: number;
  count: number;
}

export interface IFood {
  _id: string;
  foodName: string;
  restaurantId: string;
  price: number;
  foodType: string;
  img: string[];
  ingredients: string[];
}

export interface originFood {
  _id: string;
  foodName: string;
  restaurantId: string;
  price: number;
  foodType: string;
  img: [string];
  ingredients: [string];
}

export interface search {
  food: {
    rowCountOfFood: number;
    food: [
      {
        _id: string;
        foodName: string;
        restaurantId: string;
        price: number;
        foodType: string;
        img: [string];
        ingredients: [string];
      }
    ];
  };
  restaurant: {
    rowCountOfRes: 1;
    restaurant: [
      {
        address: {};
        contact: {
          phone: 70007020;
          facebook: "https://www.facebook.com/ArigAnya";
          Instagram: "none";
          link: "none";
        };
        schedule: {
          weekday: {
            open: 10;
            close: 22;
          };
          weekend: {
            open: 10;
            close: 20;
          };
        };
        _id: "643f9573a24b9b9f3858494c";
        restaurantName: "Arig Anya Shangrila";
        restaurantRate: [
          {
            rateType: "interierDesign";
            userId: "643f8fa621ab90c3bf31dda1";
            score: 5;
            comment: "anhnii comment shuu hool goy";
            _id: "643f9573a24b9b9f3858494d";
          }
        ];
        cuisineType: ["Mongolia"];
        email: "ariganya@gmail.com";
        img: [
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"
        ];
        logoImg: "url here";
      }
    ];
  };
}
