import React from 'react';
import tw from "twin.macro";

function LoaderTail({showLoader}) {
const Loader = tw.div` justify-center items-center`;

  return <div>
         <Loader style={{ display: showLoader ? "flex" : "none" }}>
                    <div className="loader"></div>
                  </Loader>
  </div>;
}

export default LoaderTail;
