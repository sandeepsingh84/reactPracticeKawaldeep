import React from "react";
const FooterSection = () => {
  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <div
        id="main"
        className=" bg-indigo-700 text-indigo-200 w-5/6  pb-20 mt-11 rounded-lg flex flex-col justify-center  "
      >
        <div id="upperpart" className="pl-14 pt-20">
          <h1 className="text-3xl font-bold mb-5 text-white ">
            Input support build for efficiency
          </h1>
          <p className="mb-4 text-xl ">
            AC tincident sapein vehicula erat auctor pellensque rhoncus. Et
            magna sit morbi loborties
          </p>
          <p className="text-xl mb-4">
            Blandit aliqum sit nisl euistmid mattis in.
          </p>
        </div>

        <div id="main2" className="pl-14 w-full">
          <div
            id="first"
            className="w-full flex justify-between items-center mt-16"
          >
            <div id="inbox" className="w-1/5">
              <div
                id="icon11"
                className=" pt-3 pr-3 pb-3 pl-3 bg-indigo-500 rounded-md mb-6  w-12 flex justify-center item-center text-white "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-inbox"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z" />
                </svg>
              </div>
              <div>
                <p className="text-xl text-white mb-3">Unlimited Inboxes</p>
              </div>
              <div>
                <p>
                  AC tincident sapein vehicula erat auctor pellensque rhoncus.
                  Et magna sit morbi loborties.
                </p>
              </div>
            </div>

            <div id="manage" className="w-1/5">
              <div
                id="icon12"
                className=" pt-3 pr-3 pb-3 pl-3 bg-indigo-500 rounded-md mb-6  w-12 flex justify-center item-center text-white "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-people"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
              </div>
              <div>
                <p className="text-xl text-white mb-3">Manage Team Members</p>
              </div>
              <div>
                <p>
                  AC tincident sapein vehicula erat auctor pellensque rhoncus.
                  Et magna sit morbi loborties.
                </p>
              </div>
            </div>

            <div id="span" className="w-1/5">
              <div
                id="icon13"
                className=" pt-3 pr-3 pb-3 pl-3 bg-indigo-500 rounded-md mb-6  w-12 flex justify-center item-center text-white "
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
              <div>
                <p className="text-xl text-white mb-3">Span Reports</p>
              </div>
              <div>
                <p>
                  AC tincident sapein vehicula erat auctor pellensque rhoncus.
                  Et magna sit morbi loborties.
                </p>
              </div>
            </div>

            <div id="compose" className="w-1/5">
              <div
                id="icon14"
                className=" pt-3 pr-3 pb-3 pl-3 bg-indigo-500 rounded-md mb-6  w-12 flex justify-center item-center text-white "
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
              <div>
                <p className="text-xl text-white mb-3">Compose In Markdown</p>
              </div>
              <div>
                <p>
                  AC tincident sapein vehicula erat auctor pellensque rhoncus.
                  Et magna sit morbi loborties.
                </p>
              </div>
            </div>
          </div>

          <div
            id="second"
            className="w-full flex justify-between items-center mt-16"
          >
            <div id="team" className="w-1/5">
              <div
                id="icon21"
                className=" pt-3 pr-3 pb-3 pl-3 bg-indigo-500 rounded-md mb-6  w-12 flex justify-center item-center text-white "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-sd-card"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.25 3.5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2z" />
                  <path
                    fill-rule="evenodd"
                    d="M5.914 0H12.5A1.5 1.5 0 0 1 14 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5V3.914c0-.398.158-.78.44-1.06L4.853.439A1.5 1.5 0 0 1 5.914 0zM13 1.5a.5.5 0 0 0-.5-.5H5.914a.5.5 0 0 0-.353.146L3.146 3.561A.5.5 0 0 0 3 3.914V14.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-13z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl text-white mb-3">Team Reporting</p>
              </div>
              <div>
                <p>
                  AC tincident sapein vehicula erat auctor pellensque rhoncus.
                  Et magna sit morbi loborties.
                </p>
              </div>
            </div>

            <div id="email" className="w-1/5">
              <div
                id="icon22"
                className=" pt-3 pr-3 pb-3 pl-3 bg-indigo-500 rounded-md mb-6  w-12 flex justify-center item-center text-white "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-reply-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                </svg>
              </div>
              <div>
                <p className="text-xl text-white mb-3">Saved Replies</p>
              </div>
              <div>
                <p>
                  AC tincident sapein vehicula erat auctor pellensque rhoncus.
                  Et magna sit morbi loborties.
                </p>
              </div>
            </div>

            <div id="save" className="w-1/5">
              <div
                id="icon23"
                className=" pt-3 pr-3 pb-3 pl-3 bg-indigo-500 rounded-md mb-6  w-12 flex justify-center item-center text-white "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope-open-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z" />
                </svg>
              </div>
              <div>
                <p className="text-xl text-white mb-3">Email Commenting</p>
              </div>
              <div>
                <p>
                  AC tincident sapein vehicula erat auctor pellensque rhoncus.
                  Et magna sit morbi loborties.
                </p>
              </div>
            </div>

            <div id="connect" className="w-1/5">
              <div
                id="icon24"
                className=" pt-3 pr-3 pb-3 pl-3 bg-indigo-500 rounded-md mb-6  w-12 flex justify-center item-center text-white "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </div>
              <div>
                <p className="text-xl text-white mb-3">
                  Connect With Customers
                </p>
              </div>
              <div>
                <p>
                  AC tincident sapein vehicula erat auctor pellensque rhoncus.
                  Et magna sit morbi loborties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterSection;
