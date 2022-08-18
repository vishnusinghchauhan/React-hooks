import useFetch from "./useFetch";

const CustomHook = () => {
  const [todos] = useFetch("https://jsonplaceholder.typicode.com/todos");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      {users &&
        users.map((item) => {
          return <p key={item.name}>{item.name}</p>;
        })}

      <hr />
      {todos &&
        todos.map((item) => {
          return <p key={item.title}>{item.title}</p>;
        })}
    </>
  );
};

export default CustomHook;
