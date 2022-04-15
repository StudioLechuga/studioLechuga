import React from 'react';

interface IProps {
  category: string;
  color: string;
}
const CategoryCard = (props: IProps) => {
  return (
    <div className="w-auto rounded-full px-2 flex items-center bg-white ">
      <span className="w-[12px] h-[12px] bg-blue-700 rounded-full"></span>
      <span className=" ml-2">{props.category}</span>
    </div>
  );
};
export default CategoryCard;
