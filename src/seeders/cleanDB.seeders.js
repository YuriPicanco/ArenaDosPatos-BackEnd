const uris = ["user", "scheduling", "fields"];

const reqDel = async (url) => {
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
};

uris.forEach((registerTable) => {
  const url = `http://localhost:5000/${registerTable}/`;
  reqDel(url);
});
