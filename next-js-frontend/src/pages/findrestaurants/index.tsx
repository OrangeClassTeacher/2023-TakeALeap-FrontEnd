// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";

// export default function Search() {
//   const route = useRouter();
//   const { search } = route.query;
//   const [movie, setMovie] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .post("http://localhost:8000/api/restaurant/search", {
//         searchText: search,
//         pageSize: 1,
//       })
//       .then((res) => {
//         setMovie(res.data.result);
//         setLoading(false);
//       })
//       .catch((err) => console.log(err));
//   }, [search]);

//   if (loading) {
//     return (
//       <div className="h-screen">
//         <div className="text-3xl ml-10 mt-10">Loading...</div>
//       </div>
//     );
//   } else {
//     if (movie.length > 0) {
//       return (
//         <div className="">
//           <div className="text-3xl ml-10 mt-10">
//             Search Result for: {search}
//           </div>
//           <div className="ml-10 mt-5">
//             <p className="bg-slate-300 text-center w-24 p-2">
//               All {movie.length}
//             </p>
//           </div>
//           <div className="grid grid-cols-4 gap-4 m-12">
//             {movie &&
//               movie.map((item, ind) => {
//                 return <MoviesCard item={item} key={ind} />;
//               })}
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div className="h-screen">
//           <div className="text-3xl ml-10 mt-10">
//             Search Result for: {search}
//           </div>
//           <div className="ml-10 mt-5">
//             <p className="bg-slate-300 text-center w-24 p-2">
//               All {movie.length}
//             </p>
//           </div>
//           <div>
//             <h1 className="text-2xl text-red-600 ml-10">Not Found</h1>
//           </div>
//         </div>
//       );
//     }
//   }
// }
