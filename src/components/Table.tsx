import React from 'react';

interface TableBody {
  headers: string[];
  data: {
    [key: string]: string | number;
  }[];
}

interface TableProps {
    props: TableBody;
}

const Table: React.FC<TableProps> = ({ props }) => {
  return (
    <table className="table-auto w-full border-collapse">
      <thead>
        <tr>
          {props.headers.map(header => (
            <th
              key={header}
              className="px-4 py-2 border bg-slate-300 text-gray-600 font-medium center"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row, index) => (
          <tr key={index} >
            {props.headers.map(header => (
              <td
                key={header}
                className="px-4 py-2 border text-center"
              >
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
