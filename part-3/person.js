function Person({ name, age, hobbies }) {

  return <div>
    <p>Learn some information about {name.length < 8? name : name.substring(0,6)}</p>
    <h3> {age > 18 ? "please go vote!": "you must be 18"}</h3>
    <ul>
      {hobbies.map(h => <li>{h}</li>)}
    </ul>
  </div>;
}