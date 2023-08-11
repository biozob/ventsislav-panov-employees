import moment from 'moment-timezone';
import { findOverlapDaysCount, sortListByProp } from '../helpers/sort';
import { prop, slice, groupBy } from 'ramda';

const parseDate = (dateString) => {
  const formats = [
    'MM/DD/YYYY',
    'DD/MM/YYYY',
    'YY/MM/DD',
    'MMMM D, YYYY',
    'M/D/YYYY',
    'M/D/YY',
    'MMM D, YYYY',
    'MMMDDYY',
    'MMDDYY',
    'YYYY-MM-DD',
    'YYYYMMDD',
    'YYYY/MM/DD',
    'M/D/YYYY',
    'MMMDDYYYY',
    'MMDDYYYY',
  ];

  return moment(dateString, formats, true);
};

const validateDate = (date) => {
  return date.isValid() ? date.format('YYYY-MM-DD') : 'Invalid Date';
};

const formatResultsByDate = ({ data }) => {
  return data.map((row) => {
    const dateFrom = parseDate(row.DateFrom);
    const dateTo = row.DateTo !== 'NULL' ? parseDate(row.DateTo) : moment();

    return {
      ...row,
      DateFrom: validateDate(dateFrom),
      DateTo: validateDate(dateTo),
    };
  });
};

const getOverlapDaysByProjectId = (data) => {
  let filteredData = [];

  const result = groupBy(prop('ProjectID'))(data);

  Object.keys(result).map((projectID) => {
    const overlapCounts = findOverlapDaysCount(result[projectID], projectID);
    const sorted = slice(
      0,
      1,
      sortListByProp(overlapCounts, 'OverlapDays', 'DESC')
    );

    filteredData = filteredData.concat(sorted);
  });

  return filteredData;
};

export { formatResultsByDate, getOverlapDaysByProjectId };
