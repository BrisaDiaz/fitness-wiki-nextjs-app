export default function MealsSizeTable({ tableData }) {
  return (
    <>
      <legend className=" font-semibold text-xl   mb-4 text-gray-700 text-center">
        {tableData.title}
      </legend>
      <div className=" overflow-x-auto pt-3 px-1 mb-6">
        <table className="border mx-auto">
          <thead>
            <tr className="bg-green-600 text-white text-xl whitespace-nowrap">
              {tableData.columns.map((leyend) => (
                <th key={leyend} className="py-3 px-5 text-center min-w-max ">
                  {leyend}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.data.map((row, index) => (
              <tr key={index} className="border-b">
                {row.map((data) => (
                  <td className="text-center  py-2 capitalize" key={data}>
                    {data}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
