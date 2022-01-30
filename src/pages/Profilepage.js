import React, { useState } from "react";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import { GetMenu } from "../components/Constants/MenuItems";
import Footer from "components/footers/FiveColumnWithBackground.js";
import avatar from "../images/avatar.png";
import defaultAvatar from "../images/user-avatar.jpg";
import TabCardGrid from "components/cards/TabCardGrid";
// import ProfileCard from "./components/cards/ProfileCard";
import "../styles/profilepage.css";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import ShowSearchRole from "components/ProfileSeachCards/ShowSearchRole";
import ProfileCard from "components/cards/ProfileCard";
function Profilepage() {
  const Left = tw.div` w-3/12  p-12 `;
  const Mid = tw.div`w-9/12 border `;
  // const Right = tw.div`lg:w-3/12 border`;
  const Container = tw.div` flex border h-full `;
  const MenuBox = tw.div`flex-col mt-12`;
  const Label = tw.div`mt-5 border p-3 rounded-lg text-center shadow `;
  const Coverbody = tw.div`h-full`;
  const UserProfile = tw.div` lg:h-48  flex justify-center   items-center`;
  const Avatar = tw.img`border w-48 `;
  const UserDetail = tw.div` flex flex-wrap  h-full  py-4 items-start  `;
  const Edit = tw.div`border rounded-xl px-2 py-1 font-bold text-white text-center w-32 m-2 mr-10`;
  const EditPortion = tw.div` flex justify-end `;
  // console.log(MenuItems, "<<< menu");
  const { user, role_of_user } = useSelector((state) => state);
  const [search_field, setsearch_field] = useState("ok");
  console.log(user, "<<<<user");
  const changeNames = {
    "Full Name": `${user?.firstName} ${user?.lastName} `,
    // "Last Name": user.lastName,
    "User Name": user.userName,
    Email: user.email,
    Company: user.company,
    City: user.city,
    State: user.state,
    Country: user.country,
    "Postal Code": user.postalCode,
    "Bar Code": user.barStateAndNumber,
    Phone: user.phoneNumber,
    "Fax Number": user.faxNumber,
    Language: user.language,
    Education: user.graduation,
    Experience: user.experience,
  };
  return (
    <>
      <Coverbody>
        <Header />
        <Container>
          <Left style={{ backgroundColor: "#6415ff" }}>
            <UserProfile>
              <Avatar
                alt="this is image"
                src={user.avatar ? user.avatar : defaultAvatar}
                width="130px"
                height="130px"
              />
            </UserProfile>
            <Label
              style={{ backgroundColor: "white" }}
            >{`${user.firstName} ${user.lastName}`}</Label>
            <MenuBox>
              {GetMenu(role_of_user).map((item) => {
                {
                  /* {Object.keys(user)((item) => { */
                }
                return (
                  <Label style={{ backgroundColor: "white" }}>
                    <a href={item.url}>{item.label}</a>
                  </Label>
                );
              })}
            </MenuBox>
          </Left>
          <Route exact path="/profilepage">
            <Mid>
              <EditPortion>
                <Edit
                  style={{
                    backgroundColor: "#909090",
                    alignSelf: "end",
                    justifySelf: "end",
                  }}
                >
                  <a href="/profile">Edit Profile</a>
                </Edit>
              </EditPortion>

              <UserDetail>
                {Object.keys(changeNames).map((item) => {
                  if (item != "Experience") {
                    return (
                      <ProfileCard name={item} value={changeNames[item]} />
                    );
                  }
                })}
              </UserDetail>
              <textarea
                className="experience"
                value={changeNames["Experience"]}
              />
            </Mid>
          </Route>
          <Route exact path={`/profilepage/search/:role`}>
            <ShowSearchRole />
          </Route>

          {/* <Right>right</Right> */}
        </Container>
      </Coverbody>

      <Footer />
    </>
  );
}

export default Profilepage;
