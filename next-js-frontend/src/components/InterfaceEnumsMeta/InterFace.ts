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

export interface IDetailFood {
  _id: string;
  foodName: string;
  restaurantId: IRestaurant;
  price: number;
  foodType: string;
  img: string[];
  ingredients: string[];
  description: string;
}
export interface IBeverage {
  _id: string;
  beverageName: string;
  restaurantId: string;
  price: number;
  beverageType: string;
  img: string[];
  ingredients: string;
  description: string;
}
export interface IComment {
  _id: string;
  restaurantId: IRestaurant;
  foodId: IFood;
  userId?: {
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
  token?: string | null;
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
        cuisineType: [string];
        email: string;
        img: [string];
        logoImg: string;
      }
    ];
  };
  beverage: {
    rowCountOfBev: number;
    beverage: [
      {
        _id: string | null;
        beverageName: string;
        restaurantId: string;
        price: number;
        beverageType: string;
        img: string[];
        ingredients: string | null;
        description: string | null;
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
  _id: string;
  avg: number;
  count: number;
  restaurant: [IRestaurant];
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
  result: [
    {
      _id: string;
      count: number;
      avg_score: number;
      restaurant: IRestaurant;
    }
  ];
  rowCount: [
    {
      restaurant: number;
    }
  ];
}

export interface IDetailRest {
  _id: string;
  count: number;
  avg: number;
  restaurant: IRestaurant[];
}
export interface ITopComment {
  _id: string;
  restaurantId: IRestaurant;
  foodId: IFood;
  userId?: IUser | undefined;
  comment: string;
  rate: number;
  createdAt: string;
}

export interface IUserPoint {
  _id: {
    _id: string;
    username: string;
    img: [string];
  };
  points: number;
}
