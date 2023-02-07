import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalOfForm from "./ModalOfForm";

const IndexGridPost = () => {
  const [currentData, setCurrentData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState();

  const [up, setUp] = useState([]);
  console.log("up", up);
  const [addInfo, setAddInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    id: "",
  });

  // console.log("addInfo", addInfo);

  //console.log('currentData', currentData)
  const personalInfo = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => setCurrentData(response?.data?.data))
      .catch((error) => error(console.log("error", error)));
  };
  useEffect(() => {
    personalInfo();
  }, []);
  const createCard = (data) => {
    // console.log("data", data);
    axios.post(`https://reqres.in/api/users`, data).then((response) => {
      setCurrentData([...currentData, response?.data]);
      setModalVisible(true);
    });
  };
  const deleteUser = (id) => {
    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        // setCurrentData((prv) => [...prv, response?.data]);
        // setModalVisible(false);
        if (response?.status === 204) {
          setCurrentData(currentData?.filter((item) => item?.id !== id));
        }
        // console.log("response", response);
      })
      .catch((error) => alert("Something went wrong "));
  };

  // useEffect(() => {
  // setTimeout (1000)
  //   alert('hello')
  // }, [])

  const updateCard = (id, data) => {
    // createCard(addInfo);
    // setAddInfo("");
    // console.log('createCard', createCard)
    // let selectedItem = currentData[index]
    // console.log('selectedItem', selectedItem)

    // setCurrentData((prev) => {
    //   prev.map((data, i) => (i !== index ? data : addInfo));
    // });

    // console.log('newArr', newArr)
    // setCurrentData(currentData?.map((item,idx) => {
    //   let newItem = {};
    //   newItem[index]={
    //     ...item,
    //     addInfo
    //   }
    // }))
    axios
      .put(`https://reqres.in/api/users/${id}`, data)
      .then((res) => {
        setUp(res?.data);
        console.log("res", res);
        setModalVisible("");
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <div className=" relative ">
      <div className="flex w-full justify-center">
        <div className="w-4/5  justify-center mt-20  pt-10 pb-20 pl-20 pr-20 bg-gray-100">
          <div className="grid grid-cols-3 gap-x-8 gap-y-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 ">
            {currentData?.map((getData, index) => (
              <div className="flex bg-white px-5 py-5  border border-gray-300 rounded-md shadow-gray-400">
                {(getData?.avatar && (
                  <img
                    className="w-8 flex justify-center items-center rounded-full mr-5"
                    src={getData?.avatar}
                    alt=""
                  />
                )) || (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                )}

                <div>
                  <div className="text-xs text-gray-700 font-semibold">
                    {getData?.first_name} {getData?.last_name}
                  </div>
                  <div className="text-xs text-gray-500">{getData?.email}</div>
                </div>
                <div className=" flex justify-end items-center  w-full gap-7">
                  <div
                    className="text-green-700 cursor-pointer"
                    onClick={() => {
                      setModalVisible("update");
                      setAddInfo({
                        first_name: getData?.first_name,
                        last_name: getData?.last_name,
                        email: getData?.email,
                        id: getData?.id,
                      });
                      setIndex(index);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </div>
                  <div
                    onClick={() => {
                      deleteUser(getData?.id);
                    }}
                    className="text-red-500 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center  mt-14 ">
            <button
              className="py-1 px-3 border rounded-md border-gray-500 text-gray-800 font-semibold  bg-white hover:bg-black hover:text-white"
              onClick={() => setModalVisible("create")}
            >
              Create
            </button>
          </div>
        </div>
      </div>
      <ModalOfForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setAddInfo={setAddInfo}
        addInfo={addInfo}
        createCard={createCard}
        updateCard={updateCard}
      />
    </div>
  );
};

export default IndexGridPost;
