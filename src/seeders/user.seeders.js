const data = [
  {
    password: "senha123",
    email: "usuario1@example.com",
    phone: "123456789",
    imageUrl: "https://example.com/avatar1.jpg",
    name: "Usuário 1",
  },
  {
    password: "outrasenha456",
    email: "usuario2@example.com",
    phone: "987654321",
    imageUrl: "https://example.com/avatar2.jpg",
    name: "Usuário 2",
  },
];

uri = "http://localhost:5000/user/";

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
