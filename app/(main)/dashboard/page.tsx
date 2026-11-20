export default function DashboardPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">ພາບລວມລະບົບ (Dashboard)</h1>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-gray-500">ຍອດຂາຍມື້ນີ້</p>
          <p className="mt-2 text-3xl font-bold">15,500,000 ກີບ</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-gray-500">ສິນຄ້າທັງໝົດ</p>
          <p className="mt-2 text-3xl font-bold">120 ລາຍການ</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-gray-500">ລູກຄ້າໃໝ່</p>
          <p className="mt-2 text-3xl font-bold">24 ຄົນ</p>
        </div>
      </div>
    </div>
  );
}