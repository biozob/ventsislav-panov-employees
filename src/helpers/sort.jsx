import { ascend, descend, prop, sort } from 'ramda';
import moment from 'moment-timezone';

const sorter = (by, dir = 'DESC') =>
  (dir === 'DESC' ? descend : ascend)(prop(by));

const sortListByProp = (data, by, direction) =>
  sort(sorter(by, direction), data);

const getOverlapDaysCount = (dateFrom1, dateTo1, dateFrom2, dateTo2) => {
  const startDate1 = moment.tz(dateFrom1, 'UTC');
  const endDate1 =
    dateTo1 === 'Present' ? moment().tz('UTC') : moment.tz(dateTo1, 'UTC');
  const startDate2 = moment.tz(dateFrom2, 'UTC');
  const endDate2 =
    dateTo2 === 'Present' ? moment().tz('UTC') : moment.tz(dateTo2, 'UTC');

  const overlapStartDate = moment.max(startDate1, startDate2);
  const overlapEndDate = moment.min(endDate1, endDate2);

  if (overlapStartDate.isSameOrAfter(overlapEndDate)) {
    return 0; // No overlap
  }

  return overlapEndDate.diff(overlapStartDate, 'days') + 1; // Adding 1 to include both start and end dates
};

// Function to find overlap days count for each pair of objects
const findOverlapDaysCount = (objects, projectId) => {
  const overlapCounts = [];

  for (let i = 0; i < objects.length; i++) {
    for (let j = i + 1; j < objects.length; j++) {
      const overlap = getOverlapDaysCount(
        objects[i].DateFrom,
        objects[i].DateTo,
        objects[j].DateFrom,
        objects[j].DateTo
      );

      overlapCounts.push({
        EmpID1: objects[i].EmpID,
        EmpID2: objects[j].EmpID,
        OverlapDays: overlap,
        projectId,
      });
    }
  }

  return overlapCounts;
};

export { findOverlapDaysCount, sortListByProp };
