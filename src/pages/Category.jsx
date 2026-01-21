import { useParams } from "react-router-dom";

const Category = () => {
  const { type } = useParams();  // stores dynamic url data 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold capitalize">
        {type} Category
      </h1>
    </div>
  );
};

export default Category;
