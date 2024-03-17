const Currentlycooking = ({ currentCooks }) => {
  return (
    <div>
      <div className='h-[15%]'>
        <h3 className='text-xl font-semibold border-b-2 mx-20 pb-6'>
          Currently : {currentCooks.length}
        </h3>
        <table className='table-auto mx-auto mt-6 space-x-96'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>calories</th>
            </tr>
          </thead>
          <tbody>
            {currentCooks.map((tdata, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{tdata.recipe_name}</td>
                  <td>{tdata.preparing_time}</td>
                  <td>{tdata.calories}</td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td>
                Total Time:
                {currentCooks.reduce(
                  (prev, curr) => prev + curr.preparing_time,
                  0
                )}
              </td>
              <td>
                {' '}
                Total Calories:
                {currentCooks.reduce((prev, curr) => prev + curr.calories, 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Currentlycooking;
