import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Food() {
  const route = useRouter();
  const { id } = route.query;
  console.log();

  const [food, setFood] = useState();

  // axios.get("").then((res) => setFood(res.data.result));

  return <div>Food</div>;
}
