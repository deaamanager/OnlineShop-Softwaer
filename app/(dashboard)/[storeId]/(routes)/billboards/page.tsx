import BillboardClient from "./components/BillboardClient";

const BillboardsPage = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-x-4 p-8 pt-6">
        <BillboardClient />
      </div>
    </div>
  );
};

export default BillboardsPage;
