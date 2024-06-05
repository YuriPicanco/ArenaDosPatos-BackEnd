const mongoose = require("mongoose");
const FieldsModel = require("../models/Fields.js");

uri = "http://localhost:5000/fields/";

const reqPost = async (datum) => {
  await fetch(uri, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(datum),
  });
};

const data = [
  {
    name: "Campo 1",
    location: "Localização 1",
    size: "Pequeno",
    type: "grama",
  },
  {
    name: "Campo 2",
    location: "Localização 2",
    size: "Grande",
    type: "areia",
  },
  {
    name: "Campo 3",
    location: "Localização 3",
    size: "Médio",
    type: "artificial",
  },
];

data.forEach(async (datum) => {
  await reqPost(datum);
  console.log(reqPost);
});

// seedDB();
