const Recipe = ({ recipe, handletableData }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  // console.log(recipes);

  return (
    <div>
      <div className='card w-[379px] h-[700px] bg-base-100 shadow-xl'>
        <figure className='h-72'>
          <img
            className='p-4 w-[331px] h-[200px] rounded-[35px]  '
            src={recipe_image}
            alt={recipe_name}
          />
        </figure>
        <div className='space-y-4 p-8'>
          <h2 className='card-title'>{recipe_name}</h2>
          <p className='border-b-2 pb-6  text-[#878787]'>{short_description}</p>
          <h3 className='text-lg font-semibold'>
            Ingredients: {ingredients.length}
          </h3>
          <div className='border-b-2 pb-4 text-[#878787]'>
            {ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </div>
          <div className='inline-flex  space-x-10'>
            <span>{preparing_time}</span>
            <span>{calories} calories</span>
          </div>
          <div className=''>
            <button
              onClick={() => handletableData(recipe)}
              className='btn bg-green-400 rounded-3xl  text-base mt-6'
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recipe;
