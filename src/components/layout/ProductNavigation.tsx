import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase";
import { useEffect, useState } from "react";
import { ProductNav } from "./style";
import { useDispatch } from "react-redux";
import { productActions } from "../../redux/slice/productSlice";

const ProductNavigation = () => {
  const dispatch = useDispatch();
  const categoryRef = collection(database, "Categories");
  const [currData, setCurrData] = useState<any>([]);
  const products: any = [];

  const getAllCategories = async () => {
    const querySnapshot = await getDocs(categoryRef);
    querySnapshot.forEach((doc) => {
      const data = { document_name: doc.id, document_id: doc.data().parent_id };
      products.push(data);
    });
    setCurrData([...products]);
  };

  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <ProductNav>
      <ul>
        {Object.values(currData).map((item: any) => {
          return (
            <li
              onClick={() =>
                dispatch(productActions.setCategoriesValue(item.document_id))
              }
            >
              {item.document_name}
            </li>
          );
        })}
      </ul>
    </ProductNav>
  );
};

export default ProductNavigation;
