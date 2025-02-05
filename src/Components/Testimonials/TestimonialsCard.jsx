import React from "react";

const TestimonialsCard = ({ TestiImg, TestiName, TestiPara, isActive }) => {
  return (
    <div
      className={`${isActive? "after:bg-orange-400" : "testimonialcard"}`}
    >
      <div>
        <div>
          <img className="w-14 h-14 min-w-14" src={TestiImg} alt="" />
        </div>
      </div>
      <div>
        <h4 className="-text--theme-sm -text--theme-text-primary -font--theme-bold">
          {TestiName}
        </h4>
        <p>{TestiPara}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
