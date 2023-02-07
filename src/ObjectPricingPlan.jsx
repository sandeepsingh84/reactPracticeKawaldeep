import React, { useState } from "react";
import ModelPricingPlan from "./ModelPricingPlan";
import PricingPlanCards from "./PricingPlanCards";
// import PricingPlanCards2 from "./PricingPlanCards2";
import ModelPricingPlan2 from "./ModelPricingPlan2";
const object1 =[{
  first:'Potenti felis in cars at at ligula numcs.',
  second:'orci neque eget pellentesque.',
}]
const Array = [
  {
    cardName: "Hobby",
    paragraph: "All the basics for set a new bussiness.",
    price: 12,
    button: "Buy Hobbies",
    term: [
      "Potenti felis in cars at at ligula numcs.",
      "orci neque eget pellentesque.",
    ],
  },
  {
    cardName: "Freelancer",
    paragraph: "All the basics for set a new bussiness.",
    price: 24,
    button: "Buy Hobbies",
    term: [
      "Potenti felis in cars at at ligula numcs.",
      "orci neque eget pellentesque.",
      "Docnec mauris sit in ui tincident etiam.",
    ],
  },
  {
    cardName: "Startup",
    paragraph: "All the basics for set a new bussiness.",
    price: 32,
    button: "Buy Hobbies",
    term: [
      "Potenti felis in cars at at ligula numcs.",
      "orci neque eget pellentesque.",
      "Docnec mauris sit in ui tincident etiam.",
      "Facuibus valult mangna",
    ],
  },
  {
    cardName: "Enterprises",
    paragraph: "All the basics for set a new bussiness.",
    price: 24,
    button: "Buy Hobbies",
    term: [
      "Potenti felis in cars at at ligula numcs.",
      "orci neque eget pellentesque.",
      "Docnec mauris sit in ui tincident etiam.,Facuibus valult mangna.",
      " Risus egestas facuibus.",
      "Resus curses ullamcorper",
      " Risus egestas facuibus.",
    ],
  },
];

const Array2 = [
  {
    cardName: "Freelancer",
    paragraph: "lorem hgty fire fit gyjh fred gyhtuh ff .",
    price: 45,
    button: "Sell Hobbies",
    term: [
      " Risus egestas facuibus.",
      "Potenti felis in cars at at ligula numcs.",
      "orci neque eget pellentesque.",
    ],
  },
  {
    cardName: "Startup",
    paragraph: "All the basics for set a new bussiness.",
    price: 42,
    button: "Sell Hobbies",
    term: [
      "Potenti felis in cars at at ligula numcs.",
      "orci neque eget pellentesque.",
      "Docnec mauris sit in ui tincident etiam.",
    ],
  },
  {
    cardName: "Enterprises",
    paragraph: "Business new a set gor bacic teg lla.",
    price: 84,
    button: "Sell Hobbies",
    term: [
      "Potenti felis in cars at at ligula numcs.",
      "orci neque eget pellentesque.",
      "Docnec mauris sit in ui tincident etiam.",
      "Facuibus valult mangna",
    ],
  },
  {
    cardName: "Hobbies",
    paragraph: "All the basics for set a new bussiness.",
    price: 92,
    button: "Sell Hobbies",
    term: [
      "Potenti felis in cars at at ligula numcs.",
      "orci neque eget pellentesque.",
      "Docnec mauris sit in ui tincident etiam.,Facuibus valult mangna.",
      " Risus egestas facuibus.",
      "Resus curses ullamcorper",
      " Risus egestas facuibus.",
    ],
  },
];
const ObjectPricingPlan = () => {
  const [monthButton, setMonthButton] = useState("month");
  const [cardsData, setCardsData] = useState(Array);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [singleCardDetail, setSingleCardDetail] = useState({});
  // console.log("singleCardDetail", singleCardDetail);
  
  // const [showModel,setShowModal]=useState(false);

  return (
    <>
      <div className="w-full bg-slate-50 flex flex-col justify-center items-center">
        <div
          id="main"
          className="w-3/4 bg-white flex flex-col justify-center items-center rounded-lg border-inherit border mt-8 pt-10 pb-10"
        >
          <div
            id="first"
            className="w-full flex flex-col justify-center items-center  "
          >
            <div
              id="ff"
              className="w-full flex flex-col justify-center items-center "
            >
              <h1 className="text-5xl font-bold mb-5 ">Pricing Plans</h1>
              <p className="text-gray-500 font-medium mb-5">
                Start building for free , then add a site plan to go live.
                Account plan unlock additional features.
              </p>
            </div>

            <div className="w-full flex justify-center mb-7">
             <div className="flex w-32 bg-gray-200 rounded-md justify-between items-center">  
               <button onClick={() => {
                    //console.log("monthButton", monthButton);
                    setMonthButton("month");
                    // if (monthButton === true) {
                    //   setMonthButton(true);
                    // } else {
                    //   setYearButton(true);
                    // }
                    setCardsData(Array);
                  }}
                  className={`text-xs bg-grey-200 py-2 px-4 " ${
                    monthButton === "month"
                      ? "bg-white rounded-lg  border"
                      : null
                  } `}>Monthly</button>
             <button onClick={() => {
                    //console.log("yearButton", yearButton);

                    // setYearButton(true);
                    setMonthButton("year");
                    setCardsData(Array2);

                    // if (yearButton === true) {
                    //   setYearButton(true);
                    // } else {
                    //   setMonthButton(false);
                    // }
                  }}
                  className={`text-xs bg-grey-200 py-2 px-4  ${
                    monthButton === "year"
                      ? "bg-white rounded-lg border"
                      : null
                  } `}>Yearly</button>
             </div>
            </div>
            {/* <div
              id="button"
              className="w-56 bg-gray-200 flex  justify-between items-center mb-14 rounded-lg border "
            >
              <div id="month" className="flex justify-center items-center">
                <p
                  onClick={() => {
                    //console.log("monthButton", monthButton);
                    setMonthButton("month");
                    // if (monthButton === true) {
                    //   setMonthButton(true);
                    // } else {
                    //   setYearButton(true);
                    // }
                    setCardsData(Array);
                  }}
                  className={`text-xs bg-grey-200 pt-2 pl-4 pr-4 pb-2" ${
                    monthButton === "month"
                      ? "bg-white rounded-lg  border"
                      : null
                  } `}
                >
                  Monthly billing
                </p>
              </div>
              <div id="yrs" className="flex justify-center items-center">
                <p
                  onClick={() => {
                    //console.log("yearButton", yearButton);

                    // setYearButton(true);
                    setMonthButton("year");
                    setCardsData(Array2);

                    // if (yearButton === true) {
                    //   setYearButton(true);
                    // } else {
                    //   setMonthButton(false);
                    // }
                  }}
                  className={`text-xs bg-grey-200 pt-2 pl-4 pr-4 pb-2 ${
                    monthButton === "year"
                      ? "bg-white rounded-lg border"
                      : null
                  } `}
                >
                  Yearly billing
                </p>
              </div>
            </div> */}
          </div>
          {/* {monthButton === "month" ? <PricingPlanCards /> : <PricingPlanCards2 />} */}
          <PricingPlanCards
            data={cardsData}
            planType={monthButton}
            setIsModalVisible={setIsModalVisible}
            setSingleCardDetail={setSingleCardDetail}
          />
        </div>
      </div>
      <ModelPricingPlan visible={isModalVisible} onCancel={setIsModalVisible} />
      <ModelPricingPlan2
        visible={isModalVisible}
        onCancel={setIsModalVisible}
        data1={'heloo'}
        data2={'thalle vali line'}
      />
    </>
  );
};

export default ObjectPricingPlan;
