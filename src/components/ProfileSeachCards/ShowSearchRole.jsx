import ProfileConnect from "components/cards/ProfileConnect";
import TabCardGrid from "components/cards/TabCardGrid";
import { getAllUser } from "Config/Service/Users";
import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import "../../styles/profilepage.css";
import defaultImage from "../../images/user-avatar.jpg";
import { useParams } from "react-router-dom";
import PortfolioTwoCardsWithImage from "../../components/cards/PortfolioTwoCardsWithImage";
import ProfileCard from "components/cards/ProfileCard";
import ShowViewProfileLabel from "components/cards/ShowProfileLabels";
const CardsCover = tw.div`flex p-2 flex-wrap justify-center gap-6`;
const ViewProfile = tw.div`lg:w-96  transition ease-in-out delay-150`;
const ProfileContent = tw.div` shadow-lg mt-4 justify-center items-center  `;
const Avatar = tw.img` w-64 shadow-xl`;
const OtherDetail = tw.div`mt-10 flex justify-center flex-wrap `;
const Close = tw.button`border px-2 w-24 ml-2 mt-2 rounded-xl text-center `;
const Message = tw.button`border shadow-inner w-32 p-3 rounded-xl`;
function ShowSearchRole() {
  const { role } = useParams();
  // console.log(params, "<<<<<<<<<<<<<<params");

  const [AllSearchRole, setAllSearchRole] = useState([]);
  const [showProfileView, setShowProfileView] = useState({
    show: false,
    data: {},
  });
  const [selectedRole, setSelectedRole] = useState({});
  const convertedData = (data) => {
    console.log(data);
    const tempObj = {
      Email: data.email,
      Name: `${data.firstName} ${data.lastName}`,
      Role: data.category,
      Avatar: data.avatar,
    };
    setShowProfileView({ show: true, data: tempObj });
  };

  useEffect(() => {
    getAllUser(role, (res) => {
      setAllSearchRole(res.user);
      {
      }
    });
  }, []);

  return (
    <>
      <CardsCover>
        {AllSearchRole.map((item) => {
          return (
            <div onClick={() => convertedData(item)}>
              <ProfileConnect data={item} />
            </div>
          );
        })}
      </CardsCover>
      <ViewProfile
        className="viewProfile"
        style={{ display: showProfileView.show ? "block" : "none" }}
      >
        <Close
          style={{ backgroundColor: "grey", color: "white" }}
          onClick={() =>
            setShowProfileView({ ...showProfileView, show: false })
          }
        >
          Close
        </Close>
        <ProfileContent className="" >
          <Avatar
            src={
              showProfileView.data.Avatar
                ? showProfileView.data.Avatar
                : defaultImage
            }
            style={{ margin: "auto" }}
          />
          <OtherDetail className="">
            {Object.keys(showProfileView.data).map((item) => {
              if (item != "Avatar")
                return (
                  <ShowViewProfileLabel
                    name={item}
                    value={showProfileView.data[item]}
                  />
                );
            })}
            <Message style={{ backgroundColor: "#909090", color: "white" }}>
              Message
            </Message>
          </OtherDetail>
        </ProfileContent>
      </ViewProfile>
    </>
  );
}

export default ShowSearchRole;
