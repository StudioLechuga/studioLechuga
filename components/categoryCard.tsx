import React from "react";

interface IProps {
  category: string;
  color: string;
}
const CategoryCard = (props: IProps) => {
  return (
    <span className=" w-auto rounded-full px-2 bg-white flex items-center justify-between">
      <span className="w-[12px] h-[12px] bg-blue-700 rounded-full"></span>
      <span className="">{props.category}</span>
    </span>
  );
};
export default CategoryCard;
