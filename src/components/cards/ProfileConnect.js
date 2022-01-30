import React from "react";
import tw from "twin.macro";
import avatar from "../../images/user-avatar.jpg";
import "./profilecontent.css";
function ProfileConnect({ data }) {
  const Cardout = tw.div`border rounded w-56 `;
  const Avatar = tw.img`border w-full h-56`;
  const Description = tw.div``;
  const Label = tw.div` p-1`;
  const Message = tw.button`rounded border p-2 w-full  text-white`;

  return (
    <div>
      <Cardout>
        <Avatar src={data.avatar ? data.avatar : avatar} />
        <Description>
          <Label>
            {data.firstName} {data.lastName}
          </Label>
          <Label>Name</Label>
        </Description>
        <Message style={{ backgroundColor: "#6415ff" }}>Message</Message>
      </Cardout>
    </div>
  );
}

export default ProfileConnect;
