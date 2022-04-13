const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

pool.query(`

SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
JOIN teachers ON teachers.id = teacher_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
ORDER BY teacher;
`
  )
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.cohort}: ${user.teacher}`)
    })
    })
  .catch(err => console.error('query error', err.stack));
  