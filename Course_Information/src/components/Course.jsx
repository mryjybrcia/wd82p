import Part from "./Part";
import Total from "./Total";

function Course({ course }) {
  return (
    <article>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map((part) => (
          <Part parts={part.id} part={part} />
        ))}
      </ul>
      <Total parts={course.parts} />
    </article>
  );
}

export default Course;
