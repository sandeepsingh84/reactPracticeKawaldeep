import React ,{useEffect} from 'react'

const StudentsList = ({studentArray , getStudentData}) => {
    useEffect(() => {
        getStudentData();
        
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
          {studentArray?.map((items) => (
            <td>{items.id}</td>
          ))}
        </table>
      </div>
    </div>
  )
}

export default StudentsList;