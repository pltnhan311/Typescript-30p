import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Count } from "./Count";

// type People = {
//   name: string;
//   age: number;
//   location?: string;
// };

// type Employee = People & {
//   jobTitle: string;
//   degree: string;
// };

// type ApiResponse = {
//   data: { id: string; name: string };
//   status: "success" | "error";
// };

// type BookResponse = {
//   data: { id: string; bookName: string };
//   status: "success" | "error";
// };

type ApiResponse<DataType> = {
  data: DataType;
  status: "success" | "error";
};
interface IPeople {
  name: string;
  age: number;
  location?: string;
}

enum Degree {
  ASSOCIATES = "ASSOCIATES",
  BACHELORS = "BACHELORS",
  MASTERS = "MASTERS",
  DOCTORATE = "DOCTORATE",
  PROFESSIONAL = "PROFESSIONAL",
}

interface IEmployee extends IPeople {
  jobTitle: string;
  degree: Degree;
  level?: string | number | Degree;
}

function App() {
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState<IPeople>();

  const employee: IEmployee = {
    name: "Alice",
    age: 31,
    jobTitle: "Accountant",
    degree: Degree.DOCTORATE,
    level: "3",
  };

  const userResponse: ApiResponse<{ id: string, name: string }> = {
    data: { id: "1", name: "Bob" },
    status: "success",
  };

  const bookResponse: ApiResponse<{ id: string, bookName: string }> = {
    data: { id: "1", bookName: "The Great Gatsby" },
    status: "error",
  };

  function total(num1: number, num2: number): number {
    return num1 + num2;
  }

  useEffect(() => {
    setPeople({
      name: "John",
      age: 22,
      location: "HCM",
    });
  }, []);

  console.log(people);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Count count={count} setCount={setCount} total={total} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h2>{people?.name}</h2>
      <h2>{employee?.degree}</h2>
      <h2>{employee?.level}</h2>
      <h2>{userResponse.data.name}</h2>
      <h2>{bookResponse.data.bookName}</h2>
    </>
  );
}

export default App;
