SELECT cohorts.name as cohort, count(students.*) as student_count
FROM students
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohort
HAVING count(students.*) >= 18
ORDER BY student_count