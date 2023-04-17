interface myProps {
    topUser: {
      name: string;
      userName: string;
      email: string;
      phone: number;
      password: string;
      point: number[];
      userType: string;
      img: string[];
    };
    RecentComment: {
      _id: string;
      restaurantId: string;
      foodId: string;
      userId: string;
      comment: string | null;
      rate: number | null;
    };
  }