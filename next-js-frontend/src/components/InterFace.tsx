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
    instagram: string;
    link: string;
  };
  email: string;
  img: string[];
  logoImg: string | null;
  schedule: {
    weekday: { open: number; close: number };
    weekend: { open: number; close: number };
  };
  description: string;
}
export interface IFood {
  _id: string;
  foodName: string;
  restaurantId: string;
  price: number;
  foodType: string;
  img: string[];
  ingredients: string[];
  description: string;
}
export interface IComment {
  _id: string;
  restaurantId: string;
  foodId: string;
  userId: {
    _id: string;
    name: string;
    userName: string;
    email: string;
    phone: number;
    point: [number];
    userType: string;
    img: [string];
  };
  comment: string;
  rate: number;
  createdAt: string;
}

export interface IUser {
  name: string;
  userName: string;
  email: string;
  phone: number;
  password: string;
  point: number[];
  userType: string;
  img: string[];
  createdAt: string;
}

export interface ITopFoods {
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

export interface ISearch {
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
        address: { district?: string };
        contact: {
          phone: number;
          facebook: string;
          Instagram: string;
          link: string;
        };
        schedule: {
          weekday: {
            open: number;
            close: number;
          };
          weekend: {
            open: number;
            close: number;
          };
        };
        _id: string;
        restaurantName: string;
        restaurantRate: [
          {
            rateType: string;
            userId: string;
            score: number;
            comment: string;
            _id: string;
          }
        ];
        cuisineType: [string];
        email: string;
        img: [string];
        logoImg: string;
      }
    ];
  };
}

export interface Props {
  user: IUser;
}

export interface IExplore {
  restaurant: [
    {
      _id: string;
      avg: number;
      count: number;
      restaurantDetail: IRestaurant[];
    }
  ];
  food: [
    {
      _id: string;
      avg: number;
      count: number;
      foodDetail: IFood[];
    }
  ];
}

export interface ITopRestaurant {
  _id: {
    restaurantId: string;
  };
  count: number;
  restaurant: [IRestaurant];
  avg_score: number;
}
export interface IAllSearchFood {
  rowCount: [
    {
      foods: number;
    }
  ];
  result: [
    {
      _id: string;
      avg_score: number;
      foods: IFood;
    }
  ];
}

export interface IAllSearchRestaurant {
  rowCount: [
    {
      restaurant: number;
    }
  ];
  result: [
    {
      _id: string;
      avg_score: number;
      restaurant: [IRestaurant];
    }
  ];
}
