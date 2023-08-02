import moment from 'moment-timezone';
// const data = [
//   {
//     EmpID: '217',
//     ProjectID: '18',
//     DateFrom: '2012-05-16',
//     DateTo: '2015-04-27',
//   },
//   {
//     EmpID: '51',
//     ProjectID: '18',
//     DateFrom: '2009-09-13',
//     DateTo: '2011-04-27',
//   },
//   {
//     EmpID: '214',
//     ProjectID: '18',
//     DateFrom: '2012-02-16',
//     DateTo: 'Present',
//   },
//   {
//     EmpID: '278',
//     ProjectID: '18',
//     DateFrom: '2014-07-30',
//     DateTo: '2016-06-28',
//   },
//   {
//     EmpID: '218',
//     ProjectID: '10',
//     DateFrom: '2012-12-16',
//     DateTo: 'Present',
//   },
//   {
//     EmpID: '59',
//     ProjectID: '15',
//     DateFrom: '2009-05-09',
//     DateTo: '2011-04-27',
//   },
//   {
//     EmpID: '141',
//     ProjectID: '12',
//     DateFrom: '2013-07-19',
//     DateTo: '2014-01-05',
//   },
//   {
//     EmpID: '211',
//     ProjectID: '19',
//     DateFrom: '2012-06-16',
//     DateTo: 'Present',
//   },
//   {
//     EmpID: '142',
//     ProjectID: '12',
//     DateFrom: '2013-11-29',
//     DateTo: '2015-08-05',
//   },
//   {
//     EmpID: '212',
//     ProjectID: '19',
//     DateFrom: '2016-04-22',
//     DateTo: 'Present',
//   },
//   {
//     EmpID: '52',
//     ProjectID: '15',
//     DateFrom: '2010-05-16',
//     DateTo: '2015-04-27',
//   },
//   {
//     EmpID: '144',
//     ProjectID: '12',
//     DateFrom: '2013-11-01',
//     DateTo: '2014-01-05',
//   },
//   {
//     EmpID: '54',
//     ProjectID: '10',
//     DateFrom: '2009-03-23',
//     DateTo: '2016-04-27',
//   },
//   {
//     EmpID: '145',
//     ProjectID: '14',
//     DateFrom: '2013-07-25',
//     DateTo: '2014-01-05',
//   },
//   {
//     EmpID: '55',
//     ProjectID: '15',
//     DateFrom: '2009-05-01',
//     DateTo: '2011-04-27',
//   },
//   {
//     EmpID: '146',
//     ProjectID: '12',
//     DateFrom: '2013-11-01',
//     DateTo: '2014-03-05',
//   },
//   {
//     EmpID: '215',
//     ProjectID: '10',
//     DateFrom: '2016-04-20',
//     DateTo: 'Present',
//   },
//   {
//     EmpID: '216',
//     ProjectID: '10',
//     DateFrom: '2015-05-16',
//     DateTo: 'Present',
//   },
//   {
//     EmpID: '143',
//     ProjectID: '19',
//     DateFrom: '2013-11-01',
//     DateTo: '2017-02-05',
//   },
//   {
//     EmpID: '56',
//     ProjectID: '10',
//     DateFrom: '2009-06-17',
//     DateTo: '2011-04-27',
//   },
//   {
//     EmpID: '147',
//     ProjectID: '14',
//     DateFrom: '2013-11-01',
//     DateTo: '2014-02-05',
//   },
//   {
//     EmpID: '57',
//     ProjectID: '15',
//     DateFrom: '2009-02-11',
//     DateTo: '2013-04-27',
//   },
// ];

// const mostDateFormats = [
//   {
//     EmpID: '217',
//     ProjectID: '18',
//     DateFrom: '05/16/2012',
//     DateTo: '04/27/2015',
//   }, // MM/DD/YY
//   {
//     EmpID: '51',
//     ProjectID: '18',
//     DateFrom: '13/09/2009',
//     DateTo: '27/04/2011',
//   }, //	DD/MM/YY
//   {
//     EmpID: '214',
//     ProjectID: '18',
//     DateFrom: '2012/02/16',
//     DateTo: 'Present',
//   }, // YY/MM/DD
//   {
//     EmpID: '278',
//     ProjectID: '18',
//     DateFrom: 'July 30, 2014',
//     DateTo: 'June 28, 2016',
//   }, // Month D, Yr
//   {
//     EmpID: '218',
//     ProjectID: '10',
//     DateFrom: '12/16/2012',
//     DateTo: 'Present',
//   },
//   {
//     EmpID: '59',
//     ProjectID: '15',
//     DateFrom: '5/9/2009',
//     DateTo: '4/27/2011',
//   }, // M/D/YY
//   {
//     EmpID: '141',
//     ProjectID: '12',
//     DateFrom: ' 7/19/2013',
//     DateTo: ' 1/ 5/2014',
//   }, // bM/bD/YY
//   {
//     EmpID: '211',
//     ProjectID: '19',
//     DateFrom: 'Jun162012',
//     DateTo: 'Present',
//   }, // MonDDYY
//   {
//     EmpID: '142',
//     ProjectID: '12',
//     DateFrom: '11292013',
//     DateTo: '08052015',
//   }, // MMDDYY
//   {
//     EmpID: '212',
//     ProjectID: '19',
//     DateFrom: '20160422',
//     DateTo: 'Present',
//   },
//   {
//     EmpID: '52',
//     ProjectID: '15',
//     DateFrom: '16052010',
//     DateTo: '27042015',
//   }, // DDMMYY
//   {
//     EmpID: '144',
//     ProjectID: '12',
//     DateFrom: 'Nov012013',
//     DateTo: 'Jan052014',
//   }, // MonDDYY
//   {
//     EmpID: '54',
//     ProjectID: '10',
//     DateFrom: '2009-03-23',
//     DateTo: '2016-04-27',
//   },
//   {
//     EmpID: '145',
//     ProjectID: '14',
//     DateFrom: '2013-07-25',
//     DateTo: '2014-01-05',
//   },
//   {
//     EmpID: '55',
//     ProjectID: '15',
//     DateFrom: '2009-05-01',
//     DateTo: '2011-04-27',
//   },
//   {
//     EmpID: '146',
//     ProjectID: '12',
//     DateFrom: '2013-11-01',
//     DateTo: '2014-03-05',
//   },
//   {
//     EmpID: '215',
//     ProjectID: '10',
//     DateFrom: '2016-04-20',
//     DateTo: 'Present',
//   },
//   {
//     EmpID: '216',
//     ProjectID: '10',
//     DateFrom: '2015-05-16',
//     DateTo: 'Present',
//   },
//   {
//     EmpID: '143',
//     ProjectID: '19',
//     DateFrom: '2013-11-01',
//     DateTo: '2017-02-05',
//   },
//   {
//     EmpID: '56',
//     ProjectID: '10',
//     DateFrom: '2009-06-17',
//     DateTo: '2011-04-27',
//   },
//   {
//     EmpID: '147',
//     ProjectID: '14',
//     DateFrom: '2013-11-01',
//     DateTo: '2014-02-05',
//   },
//   {
//     EmpID: '57',
//     ProjectID: '15',
//     DateFrom: '2009-02-11',
//     DateTo: '2013-04-27',
//   },
// ];

// Custom date parsing function to handle different formats

function parseDate(dateString) {
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
}

const formattedData = ({ data }) => {
  return data.map((row) => {
    const dateFrom = parseDate(row.DateFrom);
    const dateTo = row.DateTo !== 'Present' ? parseDate(row.DateTo) : moment();

    return {
      ...row,
      DateFrom: dateFrom.isValid()
        ? dateFrom.format('YYYY-MM-DD')
        : 'Invalid Date',
      DateTo:
        row.DateTo !== 'Present' && dateTo.isValid()
          ? dateTo.format('YYYY-MM-DD')
          : 'Present',
    };
  });
};

export { formattedData };
