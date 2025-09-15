const gradingStudents = (grades: number[]): number[] => {
  const roundedGrades = grades.map((grade) => {
    if (grade < 38) return grade;
    const next = Math.floor(grade / 5 + 1) * 5;
    return next - grade < 3 ? next : grade;
  });
  return roundedGrades;
};

const grades = [73, 67, 38, 33];
console.log(gradingStudents(grades));
