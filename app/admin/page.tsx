import React from "react";

const AdminIndexPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store",
  });
  const data: any = await response.json();

  return (
    <div>
      {data.map((d: any, key: number) => {
        return <h1 key={key}>{d.title}</h1>;
      })}
    </div>
  );
};

export default AdminIndexPage;
