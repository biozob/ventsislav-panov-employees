import { useState } from 'react';
import Papa from 'papaparse';
import { formattedData } from '../helpers/data';
import { findOverlapDaysCount, sortListByProp } from '../helpers/sort';
import { prop, slice, groupBy } from 'ramda';

const UploadCsv = () => {
  const [tableData, setTableData] = useState([]);

  const uploadCsvHandler = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const formatted = formattedData(results);

        let filteredData = [];

        const result = groupBy(prop('ProjectID'))(formatted);

        Object.keys(result).map((projectID) => {
          const overlapCounts = findOverlapDaysCount(
            result[projectID],
            projectID
          );
          const sorted = slice(
            0,
            1,
            sortListByProp(overlapCounts, 'OverlapDays', 'DESC')
          );

          filteredData = filteredData.concat(sorted);
        });

        setTableData(filteredData);
      },
    });
  };

  return (
    <>
      <div className='csv__input'>
        <div>
          <input
            type='file'
            name='file'
            accept='.csv'
            onChange={uploadCsvHandler}
          />
        </div>
      </div>

      <div className='csv-table'>
        {tableData?.length ? (
          <table>
            <thead>
              <tr>
                <th>Employee ID #1</th>
                <th>Employee ID #2</th>
                <th>Project ID</th>
                <th>Days Worked</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((row, index) => (
                <tr key={index}>
                  <td>{row.EmpID1}</td>
                  <td>{row.EmpID2}</td>
                  <td>{row.projectId}</td>
                  <td>{row.OverlapDays}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </>
  );
};

export { UploadCsv };
