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
