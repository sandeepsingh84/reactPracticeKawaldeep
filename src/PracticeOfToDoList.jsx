import React, { useState } from "react";
const PracticeOfToDoList = () => {
  const [currentItem, setcurrentItem] = useState();
  const [itemList, setdateItemList] = useState([""]);

  return (
    <div
      style={{
        width: "full",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      
      <div
        style={{
          width: "35%",
          backgroundImage:
            "url(https://www.myfreetextures.com/wp-content/uploads/2014/11/blue-abstract-background-texture.jpg)",
          marginTop: "50px",
          marginBottom: "50px",
          border: "2px solid #2d6aba",
          borderRadius: "20px",
          boxShadow: "inset 8px 8px 8px #2d6aba, inset -8px -8px 8px #2d6aba",
        }}
      >
        <div>
          <h1
            style={{
              color: "#2d6aba",
              fontFamily: "cursive",
              paddingTop: "20px",
              fontSize: "50px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              textShadow: "2px 2px 8px #056ef7",
            }}
          >
            TASK LIST 2022
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            marginTop: "35px",

          }}
        >
          <input
            style={{
              paddingLeft:'10px',
              border:'2px solid #1767b3',
              width: "330px",
              padding: "10px 0px 10px 0px",
              marginRight: "40px",
              borderRadius: "25px",
              caretColor: "blue",
              color: "#2d6aba",
              fontFamily: "cursive",
              fontWeight: "bold",
              boxShadow: "inset 8px 8px 8px #2d6aba, -8px -8px 8px #fff",
            }}
            type="text"
            value={currentItem}
                       onChange={(kk) => setcurrentItem(kk.target.value)}
          />
          <button
            style={{
              borderRadius: "25px",
              boxShadow: "-10px -10px 15px #2d6aba,10px 10px 15px #2d6aba ",
              padding: "5px 20px 5px 20px",
              color: "#2d6aba",
              cursor: "auto",
              fontStyle: "italic",
              fontSize: "20px",
              fontWeight: "bold",
              textShadow: "2px 2px 3px #056ef7",
              backgroundColor: "white",
            }}
            onClick={() => {
              setdateItemList([...itemList, currentItem]);
              setcurrentItem(" ");
            }}
          >
            ADD
          </button>
        </div>
        <div style={{
            display: "flex",}}>
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            width: " 430px",
            alignItem: "center",
            marginTop: "80px",
            height: "400px",
            marginLeft: "50px",
            borderRadius: "30px",
            paddingTop: "20px",
            boxShadow: "inset 8px 8px 8px #2d6aba, 8px 8px 8px #fff",
            overflow:'hidden',
            
          }}
        >
          <div style={{width:'100%'}}>
            {itemList.map((ee) => (
              <div
                style={{
                    lineHeight:' 1.7',
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "cursive",
                  fontSize: "20px",
                  marginLeft: "30px",
                  textShadow: "2px 2px 13px #056ef7",
                  backgroundColor:'#487dd9',
                  marginTop:'3px',
                  borderRadius:'50px',
                  
                  paddingLeft:'10px',
                  marginRight: "30px",
                  
}
                }
              >
                {ee}
              </div>
            ))}
          </div>
          <div style={{color:'red',display:'flex',justifyContent:'center',alignContent:'center',}} >
          <svg style={{width:'20px',height:'20px',}}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
          </div>
        </div>

        </div>
        <div style={{ display:'flex',
              justifyContent:'center',
              alignContent:'center',
              width:'100%'}}>
        <button
            style={{
              display:'flex',
              justifyContent:'center',
              alignContent:'center',
              width:'30%',
              marginTop:'30px',
              borderRadius: "25px",
              boxShadow: " -10px -10px 15px #2d6aba, 10px 10px 15px #fff ",
              padding: "5px 20px 5px 20px",
              color: "#2d6aba",
              cursor: "auto",
              fontStyle: "italic",
              fontSize: "20px",
              fontWeight: "bold",
              textShadow: "2px 2px 3px #056ef7",
              backgroundColor: "white",
            }}
            onClick={() => {
              
          
            }}
          >
            Clear All
          </button>
          </div>
      </div>

    </div>
  );
};
export default PracticeOfToDoList;
