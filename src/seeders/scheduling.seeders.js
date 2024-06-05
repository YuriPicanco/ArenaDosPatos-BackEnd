const data = [
  {
    dataTime: new Date("2024-04-15T10:00:00"),
    location: "Campo 1",
    field: "nome_do_campo",
    nameOfUser: "info_do_usuario",
  },
  {
    dataTime: new Date("2024-04-16T14:00:00"),
    location: "Campo 2",
    field: "nome_do_campo",
    nameOfUser: "info_do_usuario",
  },
  {
    dataTime: new Date("2024-04-17T16:00:00"),
    location: "Campo 3",
    field: "nome_do_campo",
    nameOfUser: "info_do_usuario",
  },
];

uri = "http://localhost:5000/scheduling/";

const reqPost = async (datum) => {
  await fetch(uri, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(datum),
  });
};

data.forEach(async (datum) => {
  await reqPost(datum);
  console.log(reqPost);
});
