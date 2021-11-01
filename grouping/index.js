const produk = [
  {
    id_product: 1,
    nama_produk: "Huawei P30 pro",
  },
  {
    id_product: 2,
    nama_produk: "Huawei Nuva ST",
  },
];
const stok_produk = [
  {
    id_product: 1,
    qty: 15,
  },
  {
    id_product: 2,
    qty: 6,
  },
  {
    id_product: 2,
    qty: 4,
  },
  {
    id_product: 2,
    qty: 18,
  },
];
const grouping = () => {
  let arr = [];

  produk.forEach((item) => {
    let filt = stok_produk.filter((num) => num.id_product === item.id_product);
    let sum = filt.reduce((n, { qty }) => n + qty, 0);
    arr.push({
      nama: item.nama_produk,
      total_stock: sum,
    });
  });
  return { hasil: arr };
};
console.log(grouping());
