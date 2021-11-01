const arrOfObj = [
  {
    nama: "smith",
    hobi: "Self Service",
  },
  {
    nama: "dio",
    hobi: "design grafis",
  },
  {
    nama: "agung",
    hobi: "bermain bola",
  },
];

const generateResult = () => {
  arrOfObj.map((item, index) => {
    const name = Object.values(item);
    const hobi = Object.values(item);
    hobi.shift();
    name.pop();

    const valRandom = name[Math.floor(Math.random() * name.length)];
    const valRandom2 = hobi[Math.floor(Math.random() * hobi.length)];
    if (index < 1) {
      console.log({
        result: {
          nama: valRandom,
          hobi: valRandom2,
        },
      });
    }
  });
};
generateResult();
