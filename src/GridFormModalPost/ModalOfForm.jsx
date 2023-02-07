import React from "react";

const ModalOfForm = ({
  modalVisible,
  createCard,
  setAddInfo,
  addInfo,
  setModalVisible,
  updateCard,
}) => {
  // this function is resetting the addInfo state according to every input onchange
  const handleChange = (e) => {
    // console.log("e", e);

    //below line of code is destructuring the event's target and getting name of input fields and their values in value
    const { name, value } = e.target;
    setAddInfo({ ...addInfo, [name]: value });
  };

  return (
    modalVisible && (
      <div
        onClick={() => {
          setModalVisible(false);
          setAddInfo({
            first_name: "",
            last_name: "",
            email: "",
          });
        }}
        className="absolute  w-full h-screen top-0 backdrop-blur-sm bg-black/70 flex justify-center flex-none items-center overflow-hidden"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className=" w-1/3 py-4 px-5 bg-white rounded flex justify-center flex-col"
        >
          <h1 className="mb-2 font-bold border-b">Personal Info</h1>
          <div>
            <div className="my-1">
              <p className="font-semibold text-gray-800 " htmlFor="fname">
                First name
              </p>
              <input
                type="text"
                value={addInfo?.first_name}
                name="first_name"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-500 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                onChange={handleChange}
                placeholder="Enter first name"
              />
            </div>

            <div className="mb-2 mt-2">
              <label className="font-semibold text-gray-800" htmlFor="lname">
                Last name:
              </label>{" "}
              <br></br>
              <input
                type="text"
                onChange={handleChange}
                value={addInfo?.last_name}
                name="last_name"
                placeholder="Enter last name"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-500 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </div>
            <div className="mb-2">
              <label className="font-semibold text-gray-800  " htmlFor="email">
                Email:
              </label>
              <input
                type="text"
                value={addInfo?.email}
                onChange={handleChange}
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
                required
              />
            </div>
          </div>
          <div className="w-full flex justify-center mt-2 ">
            {modalVisible === "create" ? (
              <button
                className="bg-black text-white pt-1 pb-1 pr-3 pl-3 rounded-md "
                onClick={() => {
                  createCard(addInfo);
                  // alert('enter valid email address')
                  // console.log('updateCard', updateCard)
                }}
              >
                Create
              </button>
            ) : (
              <button
                className="bg-black text-white pt-1 pb-1 pr-3 pl-3 rounded-md "
                onClick={() => {
                  updateCard(addInfo?.id, addInfo);
                }}
              >
                Update
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default ModalOfForm;
