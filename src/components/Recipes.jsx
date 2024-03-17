import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import Recipe from './Recipe';
import Wantocook from './Wantocook';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [currentCooks, setCurrentCooks] = useState([]);
  useEffect(() => {
    fetch('recipes.json')
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handletableData = (tabeldataRec) => {
    const isExist = tableData.find(
      (singleTableData) => singleTableData.recipe_id == tabeldataRec.recipe_id
    );
    if (!isExist) {
      setTableData([...tableData, tabeldataRec]);
    } else {
      toast('already added!');
    }
  };

  const tableDataDeleteFunction = (removeTdata) => {
    setCurrentCooks([...currentCooks, removeTdata]);

    const removeTableData = tableData.filter(
      (singleTableData) => singleTableData.recipe_id != removeTdata.recipe_id
    );
    setTableData(removeTableData);
  };

  console.log(tableData);

  return (
    <div>
      <div className='text-center mt-12 space-y-6'>
        <h2 className='text-4xl font-bold'> Our Recipes</h2>
        <p className='text-[#150B2B]'>
          Delicious dishes await in our recipe collection, spanning from
          comforting classics to innovative <br /> creations, perfect for every
          palate and occasion.
        </p>
      </div>
      <div className='flex justify-around container mx-auto mt-14'>
        <div className='grid grid-cols-2 gap-5  '>
          {recipes.map((recipes) => (
            <Recipe
              key={recipes.recipe_id}
              handletableData={handletableData}
              recipe={recipes}
            ></Recipe>
          ))}
        </div>
        <div className=' border rounded-3xl w-[40%] text-center flex flex-col'>
          <div className='h-[15%] mt-10 '>
            <Wantocook
              currentCooks={currentCooks}
              tableDataDeleteFunction={tableDataDeleteFunction}
              tableData={tableData}
            ></Wantocook>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Recipes;
