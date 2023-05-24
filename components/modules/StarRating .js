import React from "react";

const StarRating = ({ rating }) => {
  //   const stars = [];

  //   for (let i = 0; i < 5 - rating; i++) {
  //     stars.push(<span className="text-[#90A3BF]">&#9733;</span>);
  //   }

  //   for (let i = 0; i < rating; i++) {
  //     stars.push(
  //       <span key={i} className="text-[#fbad39]">
  //         &#9733;
  //       </span>
  //     );
  //   }

  return (
    <div className="flex flex-row-reverse justify-between items-center">
      {[...Array(5)].map((item, key) => {
        return (
          <React.Fragment key={key}>
            {key < rating ? (
              <span className="mr-[2px] scale-[1.2] lg:scale-[1.8] lg:ml-[5px] inline-block text-warning-light">
                &#9733;
              </span>
            ) : (
              <span className="mr-[2px] scale-[1.2] lg:scale-[1.8]  lg:ml-[5px] inline-block text-warning-light">
                &#9734;
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StarRating;

// const Rating = ({ totle, filled }) => {
//     return (
//       <div>
//         {
//           [...Array(totle)].map((item, key) => {
//             return <span style={{ backgroundColor: key < filled ? "yellow" : null }}> star icon </span>;
//           })
//         }
//       </div>
//     );
//   };