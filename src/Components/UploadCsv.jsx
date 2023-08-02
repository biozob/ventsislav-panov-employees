import { useState } from 'react';
import Papa from 'papaparse';
import {
  formatResultsByDate,
  getOverlapDaysByProjectId,
} from '../helpers/data';

const UploadCsv = () => {
  const [tableData, setTableData] = useState([]);

  const uploadCsvHandler = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (csvData) => {
        const formattedResults = formatResultsByDate(csvData);
        const overlapList = getOverlapDaysByProjectId(formattedResults);

        setTableData(overlapList);
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

      <div className='csv__table'>
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
