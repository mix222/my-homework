export default function ProductsPage() {
  const products = [
    { id: 1, name: "ກາເຟລາວ", price: "45,000 ກີບ", stock: 50 },
    { id: 2, name: "ຊາຂຽວ", price: "35,000 ກີບ", stock: 30 },
    { id: 3, name: "ເຂົ້າໜົມປັງ", price: "25,000 ກີບ", stock: 15 },
  ];

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">ຈັດການສິນຄ້າ (Products)</h1>
        <button className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700">
          + ເພີ່ມສິນຄ້າໃໝ່
        </button>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">ຊື່ສິນຄ້າ</th>
              <th className="p-4">ລາຄາ</th>
              <th className="p-4">ຈຳນວນໃນສາງ</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">{item.id}</td>
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4">{item.price}</td>
                <td className="p-4">{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}