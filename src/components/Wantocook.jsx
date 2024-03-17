import Currentlycooking from './Currentlycooking';

const Wantocook = ({ tableData, tableDataDeleteFunction, currentCooks }) => {
  return (
    <div>
      <div className='h-[15%]'>
        <h3 className='text-xl font-semibold border-b-2 mx-20 pb-6'>
          Want to cock: {tableData.length}
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
            {tableData.map((tdata, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{tdata.recipe_name}</td>
                  <td>{tdata.preparing_time}</td>
                  <td>{tdata.calories}</td>
                  <td>
                    <button
                      onClick={() => tableDataDeleteFunction(tdata)}
                      className='btn bg-green-400 rounded-3xl'
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Currentlycooking currentCooks={currentCooks}></Currentlycooking>
    </div>
  );
};
export default Wantocook;
