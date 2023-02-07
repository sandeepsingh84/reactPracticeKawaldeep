import React from "react";

const SimpleForm = () => {
   
  return (
    <div id="section" className="max-w-full h-vh flex justify-center">
      <div
        id="container"
        className="w-2/3 flex justify-center bg-gray-100 my-20 rounded border border-gray-200 "
      >
        <div className="flex py-20 justify-center">
          <div
            id="blue"
            className="w-2/6 text-white bg-indigo-700 pt-10 px-10 "
          >
            <p className="pb-5 font-semibold text-indigo-100">
              contact information
            </p>
            <p className="text-sm mb-5 text-indigo-200">
              Lorem ipsum, dolor amet consectetur adipisicing elit. A ratione
              qui molestiae alias explicabo officiis praesentium doloremque
              quas!
            </p>
            <div className="flex mb-5 ">
              <div className="mr-4 mt-1 ">
                <svg
                  className="text-indigo-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </div>
              <div className="text-sm text-indigo-200">+1 (555) 123 -4567</div>
            </div>
            <div className="flex mb-5 ">
              <div className="mr-4 mt-1">
                <svg
                  className="text-indigo-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              </div>
              <div className="text-sm text-indigo-200">
                support@workcation.com
              </div>
            </div>
            <div className="flex w-32 justify-between">
              <div>
                <svg
                  className="text-indigo-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </div>
              <div>
                <svg
                  className="text-indigo-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </div>
              <div>
                <svg
                  className="text-indigo-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-snapchat"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.943 11.526c-.111-.303-.323-.465-.564-.599a1.416 1.416 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.387 3.387 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.338.338 0 0 1 .097-.1c.129-.086.262-.173.352-.231.162-.104.289-.187.371-.245.309-.216.525-.446.66-.702a1.397 1.397 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.829 1.829 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139-.116-1.344-.587-2.048-1.077-2.61a4.294 4.294 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0c-.92 0-1.76.216-2.505.641-.412.232-.782.53-1.097.883-.49.562-.96 1.267-1.077 2.61-.033.382-.04.772-.036 1.138a1.83 1.83 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.398 1.398 0 0 0 .067 1.161c.136.256.352.486.66.701.082.058.21.14.371.246l.339.221a.38.38 0 0 1 .109.11c.026.053.027.11-.012.217a3.363 3.363 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472-.385.204-.786.34-.955.8-.128.348-.044.743.28 1.075.119.125.257.23.409.31a4.43 4.43 0 0 0 1 .4.66.66 0 0 1 .202.09c.118.104.102.26.259.488.079.118.18.22.296.3.33.229.701.243 1.095.258.355.014.758.03 1.217.18.19.064.389.186.618.328.55.338 1.305.802 2.566.802 1.262 0 2.02-.466 2.576-.806.227-.14.424-.26.609-.321.46-.152.863-.168 1.218-.181.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.625.625 0 0 1 .19-.087 4.446 4.446 0 0 0 1.014-.404c.16-.087.306-.2.429-.336l.004-.005c.304-.325.38-.709.256-1.047Zm-1.121.602c-.684.378-1.139.337-1.493.565-.3.193-.122.61-.34.76-.269.186-1.061-.012-2.085.326-.845.279-1.384 1.082-2.903 1.082-1.519 0-2.045-.801-2.904-1.084-1.022-.338-1.816-.14-2.084-.325-.218-.15-.041-.568-.341-.761-.354-.228-.809-.187-1.492-.563-.436-.24-.189-.39-.044-.46 2.478-1.199 2.873-3.05 2.89-3.188.022-.166.045-.297-.138-.466-.177-.164-.962-.65-1.18-.802-.36-.252-.52-.503-.402-.812.082-.214.281-.295.49-.295a.93.93 0 0 1 .197.022c.396.086.78.285 1.002.338.027.007.054.01.082.011.118 0 .16-.06.152-.195-.026-.433-.087-1.277-.019-2.066.094-1.084.444-1.622.859-2.097.2-.229 1.137-1.22 2.93-1.22 1.792 0 2.732.987 2.931 1.215.416.475.766 1.013.859 2.098.068.788.009 1.632-.019 2.065-.01.142.034.195.152.195a.35.35 0 0 0 .082-.01c.222-.054.607-.253 1.002-.338a.912.912 0 0 1 .197-.023c.21 0 .409.082.49.295.117.309-.04.56-.401.812-.218.152-1.003.638-1.18.802-.184.169-.16.3-.139.466.018.14.413 1.991 2.89 3.189.147.073.394.222-.041.464Z" />
                </svg>
              </div>
            </div>
          </div>

          <div id="white" className="w-3/5 bg-white px-10 pt-10 pb-10 text-gray-700">
            <p className="font-semibold ">Send us a message</p>
            <div className="mt-4 flex justify-between">
              <div className="">
                <label htmlFor="fname" className="text-xs font-semibold text-shadow-sm ">
                  First name
                </label>
                <br></br>
                <input
                  type="text"
                  id="fname"
                  className="border-gray-300 border rounded pr-20 py-2 "
                />
              </div>
              <div></div>

              <div>
                <div>
                  <label htmlFor="lname" className="text-xs font-semibold ">
                    Last name
                  </label>
                  <br></br>
                  <input
                    type="text"
                    id="lname"
                    className="border-gray-300 border rounded pr-20 py-2 "
                  />
                </div>
                <div></div>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="">
                <label htmlFor="mail" className="text-xs font-semibold ">
                  E-mail
                </label>
                <br></br>
                <input
                  type="text"
                  id="mail"
                  className="border-gray-300 border rounded pr-20 py-2 "
                />
              </div>
              <div></div>

              <div>
                <div>
                  <label htmlFor="Phone" className="text-xs font-semibold ">
                    Phone
                  </label>
                  <br></br>
                  <input
                    type="phone no."
                    id="Phone"
                    className="border-gray-300 border rounded pr-20 py-2  "
                  />
                </div>
                <div></div>
              </div>
            </div>

            <div className="mt-3 ">
              <label htmlFor="Subject" className="text-xs font-semibold ">
                Subject
              </label>
              <br></br>
              <input
                type="text"
                id="Subject"
                className="border-gray-300 border rounded  pt-2 pb-2 w-full"
              />
            </div>
            <div className="text-xs font-semibold mt-4">
              <div className="flex justify-between">
                <label htmlFor="msg">Message</label>
                <p className="text-gray-400 mr-2">Max. 500 Characters</p>
              </div>
              <input
                type="text"
                id="msg"
                className="border-gray-300 border rounded py-10  w-full"
              />
            </div>
            <div  className="   w-full">
            <button onClick={()=>{ alert("successfully!");
        
        }} className=" flex  justify-end bg-indigo-600 text-white mt-5 py-2 px-4 rounded text-indigo-50">
              Submit
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleForm;
