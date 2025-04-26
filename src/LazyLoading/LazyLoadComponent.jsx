import React, { Suspense } from "react";
import Loader from "./Loader";
const Lorem = React.lazy(() => import("./Lorem"));

export default function LazyLoadComponent() {
  return (
    <div>
      <h1>Home</h1>
      <br />
      <Suspense fallback={<Loader />}>
        <Lorem />
      </Suspense>
    </div>
  );
}
