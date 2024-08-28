import Data from "./components/Data";
import users from "./script/doc";

function App() {
  return (
    <div>
      <Data />
      <div className="header" >
        {users.map((user) => {
        const { id, name, age, email } = user;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h2 >Age: {age}</h2>
            <h3 className="title">Email: {email}</h3>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default App;
