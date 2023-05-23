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
    <div>
      {[...Array(5)].map((item, key) => {
        return (
          <React.Fragment key={key}>
            {key < rating ? (
              <span className="ml-[2px] lg:scale-[1.5] lg:ml-[5px] inline-block text-[#fbad39]">
                &#9733;
              </span>
            ) : (
              <span className="ml-[2px] lg:scale-[1.5] lg:ml-[5px] inline-block text-[#90A3BF]">
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