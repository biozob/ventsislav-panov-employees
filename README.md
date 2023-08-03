# Ventsislav Panov Employees

### This is a presentation task.

## Run Locally

Clone the project

```bash
  git clone https://github.com/biozob/ventsislav-panov-employees.git
```

Go to the project directory

```bash
  cd ventsislav-panov-employees
```

Run with Docker

```bash
  docker-compose up
```

## Documentation

1. **Most of the pairs that worked most hour per project are with different formats in the CSV file:**

- MM/DD/YYYY
- DD/MM/YYYY
- YY/MM/DD
- MMMM D, YYYY
- M/D/YYYY
- M/D/YY
- MMM D, YYYY
- MMMDDYY
- MMDDYY
- YYYY-MM-DD
- YYYYMMDD
- YYYY/MM/DD
- M/D/YYYY
- MMMDDYYYY
- MMDDYYYY

2. **Edge cases:**

- employee worked in couple of projects: There is such in the csv file
- pairs of employee worked same hours as other pairs. (Currently not handled, but it can be easily handled if needed, depends on the business logic, eg: for such cases display multiple pairs per project)

3. **Libraries and approaches used:**

- **moment** for dates even if its not the best choice in production app (as it is obsolete and there are better alternatives), but for such task will do the job. Preferably to be used: dayjs
- **papaparse**: csv parser with a lot of popularity and maintained well at the moment, also does not have external dependencies.
- **ramda**: alternative to lodash, but popular because of the functional approach, also tree shaking is also a plus for such libraries. Both libraries will do the job anyway.
- **dockerize**: make sure to be easily run on different OS platforms
- **nvmrc**: useful for real world projects, that will be worked by multiple dev's
