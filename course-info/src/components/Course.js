const Header = ({ name }) => {
  return <h2>{ name }</h2>;
};

const Content = ({ courses }) => {
  return (
    <div>
      { courses.map((course) => (
        <div key={ course.id }>
          <Header name={ course.name } />
          {course.parts.map((part) => (
            <Part key={ part.id } part={ part.name } exercise={ part.exercises } />
          )) }
          <Total parts={ course.parts } />
        </div>
      ))}
    </div>
  );
};

const Part = ({ part, exercise }) => {
  return (
    <p>
      { part } { exercise }
    </p>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0);
  return <h3>total of { total } exercises</h3>;
};

const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Header courses={ courses } />
      <Content courses={ courses } />
    </div>
  );
};

export default Course;