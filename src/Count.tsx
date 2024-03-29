type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  total: (num1: number, num2: number) => number;
};

export const Count = ({ count, setCount, total }: Props) => {
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <h1>{total(2, 10)}</h1>
    </div>
  );
};
