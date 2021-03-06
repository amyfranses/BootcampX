SELECT DISTINCT teachers.name AS teacher, cohorts.name as cohort, count(assistance_requests.*) AS total_assistances
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
JOIN teachers ON teachers.id = teacher_id
WHERE cohorts.name = 'JUL02'
GROUP BY teacher, cohort
ORDER BY total_assistances DESC;
