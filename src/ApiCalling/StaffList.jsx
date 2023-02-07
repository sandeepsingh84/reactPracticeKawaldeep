import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const StaffList = ({ array, getData }) => {
  useEffect(() => {
    getData();
    
  }, []);
  return (
    <div>
      {" "}
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
        className="mx-20 my-10"
      >
        <table className="w-full border rounded-md shadow-md overflow-hidden p-0">
          <tr className="border-b bg-gray-100 m-0">
            <th className="pl-4 py-2 text-left">Sr no.</th>
            <th className="text-left">Name</th>
            <th className="text-left">Email</th>
            <th className="text-left">City</th>
            <th className="text-left">Actions</th>
          </tr>
          {array?.map((items) => (
            <tr  className="border-b even:bg-blue-100">
              <td className="pl-4 py-2.5">{items.id}</td>
              <td className="">{items?.name}</td>
              <td className="text-left">{items?.email}</td>
              <td className="">{items?.address?.city}</td>
              <td className="text-blue-600 font-semibold cursor-pointer">
                <Link to={`/profile/${items?.id}`}>Veiw</Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default StaffList;
