import React, { useState, useEffect } from "react";

import LeftNortTask from "./LeftNorthTask";
import PracticeOfToDoList from "./OnlyPracticeList";
import RightNorthTask from "./RightNorthTask";

const array2 = [
  {
    icon2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-easel2"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"
        />
      </svg>
    ),
    explanation2: "Take rest at 12 noon",
    buttonName2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
      </svg>
    ),
  },
  {
    icon2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-battery-full"
        viewBox="0 0 16 16"
      >
        <path d="M2 6h10v4H2V6z" />
        <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
      </svg>
    ),
    explanation2: "Take meal at 1 pm",
    buttonName2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
      </svg>
    ),
  },
  {
    icon2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-basket3-fill"
        viewBox="0 0 16 16"
      >
        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
      </svg>
    ),
    explanation2: "Come back at 3:00 pm",
    buttonName2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
      </svg>
    ),
  },
  {
    icon2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-three-dots"
        viewBox="0 0 16 16"
      >
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
      </svg>
    ),
    explanation2: "Take rest for one day",
    buttonName2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
      </svg>
    ),
  },
  {
    icon2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-emoji-smile-upside-down-fill"
        viewBox="0 0 16 16"
      >
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5zM4.285 6.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM10 8c-.552 0-1 .672-1 1.5s.448 1.5 1 1.5 1-.672 1-1.5S10.552 8 10 8z" />
      </svg>
    ),
    explanation2: "continue daily routine",
    buttonName2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
      </svg>
    ),
  },
];
const array = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-bookmark-check"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
        />
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
      </svg>
    ),
    explanation: "Getup early morning at 5:00 AM",
    buttonName: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-cup-fill"
        viewBox="0 0 16 16"
      >
        <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z" />
      </svg>
    ),
    explanation: "Take your energy drink",
    buttonName: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-alarm-fill"
        viewBox="0 0 16 16"
      >
        <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
      </svg>
    ),
    explanation: "Heads toward north",
    buttonName: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-emoji-smile-fill"
        viewBox="0 0 16 16"
      >
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
      </svg>
    ),
    explanation: "Start the ride",
    buttonName: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-badge-3d-fill"
        viewBox="0 0 16 16"
      >
        <path d="M10.157 5.968h-.844v4.06h.844c1.116 0 1.621-.667 1.621-2.02 0-1.354-.51-2.04-1.621-2.04z" />
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm5.184 4.368c.646 0 1.055.378 1.06.9.008.537-.427.919-1.086.919-.598-.004-1.037-.325-1.068-.756H3c.03.914.791 1.688 2.153 1.688 1.24 0 2.285-.66 2.272-1.798-.013-.953-.747-1.38-1.292-1.432v-.062c.44-.07 1.125-.527 1.108-1.375-.013-.906-.8-1.57-2.053-1.565-1.31.005-2.043.734-2.074 1.67h1.103c.022-.391.383-.751.936-.751.532 0 .928.33.928.813.004.479-.383.835-.928.835h-.632v.914h.663zM8.126 11h2.189C12.125 11 13 9.893 13 7.985c0-1.894-.861-2.984-2.685-2.984H8.126V11z" />
      </svg>
    ),
    explanation: "Reach the destination",
    buttonName: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
      </svg>
    ),
  },
];

const NorthTask = () => {
  const [list1, setList1State] = useState(0);
  const [list2, setList2State] = useState(0);
  const [list3, setList3State] = useState(0);
  const [total, setTotalState] = useState(list1 + list2 + list3);
  const [name, setNameState] = useState(["kawal"]);
  const [itemList, setdateItemList] = useState([]);
  const [dailtRoutine, setDailyRoutine] = useState(array);
  const [routineNoon, setRoutineNoon] = useState(array2);

  const checkGreaterIncrease = () => {
    if (list1 === 20) {
      alert(",jhdghgfshgdf");
    } else {
      setList1State(list1 + 5);
    }
  };

  useEffect(() => {
    if (list1 > 5) {
      //console.log('2000', 2000)
      setList1State(list1 + 5);
    }
  }, [list1]);

  //   const showAlert=()=>{
  //       console.log('200', 200)
  //     alert('Congratulations your number is increased')
  // }

  return (
    <>
      <div className="w-full flex flex-col justify-center bg-gray-100 pb-28">
        <div className="w-full bg-pink-500  justify-between flex">
          <div id="left-part w-4/5  justify-between ">
            <h1 className="text-3xl text-white font-bold py-5 pl-3">
              Heads Toward North
            </h1>
          </div>

          <div
            id="right-part"
            className=" flex justify-evenly items-center w-1/5 text-white text-lg font-semibold"
          >
            <div>
              <p>{name}</p>
            </div>
            <div>
              <button
                className="text-white text-lg font-semibold"
                onClick={() => {
                  if (name === "kawal") {
                    setNameState("Aman");
                  } else {
                    setNameState("kawal");
                  }
                  setDailyRoutine(array);
                  setRoutineNoon(array2);
                  setTotalState(0);
                  setList1State(0);
                  setList2State(0);
                  setList3State(0);
                  // switch (name) {
                  //     case 'sandeep':
                  //         setnameState('sandeep')
                  //         break;

                  //         case 'kawal':
                  //         setnameState('kawal')
                  //         break;

                  //     default:
                  //         setnameState('sandeep')
                  //         break;
                  // }
                }}
              >
                Change Rider
              </button>
            </div>
            <div className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-bicycle"
                viewBox="0 0 16 16"
              >
                <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
              </svg>
            </div>
          </div>
        </div>

        <div
          id="main-second"
          className="flex mt-20 max-w-full justify-evenly items-center "
        >
          <div
            id="left-second"
            className="w-96 flex flex-col justify-center items-center  bg-pink-100 pt-14 pb-14  rounded-full border-pink-400 border shadow-pink-500/70 shadow"
            onClick={() => checkGreaterIncrease()}
          >
            <div id="left-para" className=" mb-5">
              <p className="font-bold text-3xl text-pink-600">North</p>
            </div>

            <div id="left-icon" className="mb-5 text-2xl  text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                />
              </svg>
            </div>
            <div
              id="left-button"
              className="flex justify-center items-center text-pink-500"
            >
              <button className="border rounded-md  px-3 py-2 bg-white ">
                {" "}
                {list1} km North
              </button>
            </div>
          </div>

          <div
            id="center-second"
            className="w-96 flex flex-col justify-center items-center  bg-pink-100 pt-14 pb-14  rounded-full border-pink-400 border shadow-pink-500/70 shadow"
            onClick={() => setList2State(list2 + 5)}
          >
            <div id="center-para" className="mb-5">
              <p className="font-bold text-3xl  text-pink-600">Turn Left</p>
            </div>

            <div id="center-icon" className="mb-5 text-2xl  text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-90deg-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"
                />
              </svg>
            </div>
            <div id="center-button">
              <button className="border rounded-md px-3 py-2 bg-white  text-pink-500 ">
                {" "}
                {list2} km left
              </button>
            </div>
          </div>

          <div
            id="right-second"
            className="w-96 flex flex-col justify-center items-center  bg-pink-100 pt-14 pb-14  rounded-full border-pink-400 border shadow-pink-500/70 shadow"
            onClick={() => setList3State(list3 + 5)}
          >
            <div id="right-para" className="mb-5">
              <p className="font-bold text-3xl  text-pink-600"> Turn Right</p>
            </div>

            <div id="right-icon" className="mb-5 text-2xl  text-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-90deg-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"
                />
              </svg>
            </div>
            <div id="right-button">
              <button className="border rounded-md px-3 py-2 bg-white  text-pink-500 ">
                {" "}
                {list3} km left
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full  mt-20 justify-evenly">
          {/* <div className="w-2/6">
          {routineNoon?.map((noonItems) => (
            <div className="flex  bg-white  items-center  px-3 py-2 mr-8 rounded-md mb-2">
              <div className="text-pink-600 mr-4">{noonItems.icon2}</div>
              <div>{noonItems.explanation2}</div>
              <button
                onClick={() => {
                  //console.log('routineNoon', routineNoon);
                  const resultFilter2 = routineNoon?.filter(
                    (noonDetails) =>
                      noonDetails?.explanation2 !== noonItems.explanation2
                  );
                  console.log("resultFilter2", resultFilter2);
                  setRoutineNoon(resultFilter2);
                }}
              >
                {noonItems.buttonName2}
              </button>
            </div>
          ))}
        </div> */}
          {/* <LeftNortTask routineNoon={routineNoon} setRoutineNoon={setRoutineNoon} /> */}
          <RightNorthTask
            dailtRoutine={dailtRoutine}
            setDailyRoutine={setDailyRoutine}
          />
          <div
            id="total"
            className="w-96 flex flex-col justify-center items-center  bg-pink-100 pt-14 pb-14  rounded-full border-pink-400 border shadow-pink-500/70 shadow"
            onClick={() => {
              setTotalState(list1 + list2 + list3);
              // setList1State(0);
              // setList2State(0);
              // setList3State(0);
            }}
          >
            <div id="total-para" className="mb-5">
              <p className="font-bold text-3xl  text-pink-600"> Total Ride</p>
            </div>

            <div id="total-icon" className="mb-5 text-2xl  text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-bicycle"
                viewBox="0 0 16 16"
              >
                <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
              </svg>
            </div>
            <div id="total-button">
              <button className="border rounded-md px-3 py-2 bg-white  text-pink-500">
                {" "}
                {total} kms
              </button>
            </div>
          </div>
          {/* <div className="w-2/6">
          {dailtRoutine?.map((dailyRoutine) => (
            <div
              id="list-left-main"
              className="flex  bg-white  items-center w-full px-3 py-2 mr-8 rounded-md mb-2"
            >
              <div id="icon" className="text-pink-600 mr-4 w-1/10">{dailyRoutine?.icon}</div>
              <div id="exp" className="w-4/5 text-pink-700">{dailyRoutine?.explanation}</div>
              <button
                id="button"
                onClick={() => {
                  //console.log('dailyRoutine', dailyRoutine)
                  const resultFilter = dailtRoutine?.filter(
                    (item) => item?.explanation !== dailyRoutine?.explanation
                  );
                  console.log("resultFilter", resultFilter);
                  setDailyRoutine(resultFilter);
                }}
                style={{
                  width:'10%',
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "50px",
                  color:'white',
                  backgroundColor:'red',
                  padding:'5px 4px 4px 1px'
                }}
              >
                {dailyRoutine?.buttonName}
              </button>
            </div>
          ))}
        </div> */}
          {/* <RightNorthTask dailtRoutine={dailtRoutine} setDailyRoutine={setDailyRoutine}/> */}
          <LeftNortTask
            routineNoon={routineNoon}
            setRoutineNoon={setRoutineNoon}
          />
        </div>
      </div>
      <PracticeOfToDoList
        itemList={itemList}
        setdateItemList={setdateItemList}
      />
    </>
  );
};
export default NorthTask;
