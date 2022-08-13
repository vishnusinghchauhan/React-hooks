import useFetch from "./useFetch";

const CustomHook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}

      <hr></hr>
      {users &&
        users.map((item) => {
          return <p key={item.name}>{item.name}</p>;
        })}
    </>
  );
};

export default CustomHook;
