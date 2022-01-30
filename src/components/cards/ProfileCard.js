import React from "react";
import tw from "twin.macro";

function ProfileCard({ name, value }) {
  const Box = tw.div`  shadow rounded-xl flex  w-96 border ml-20  my-0 `;
  const Label = tw.div` w-1/3  rounded-xl text-white py-2 pl-2`;
  const Value = tw.div` w-2/3 py-2 text-black px-3`;

  return (
    <div style={{ marginBottom: "2rem" }}>
      <Box style={{ backgroundColor: "white" }}>
        <Label style={{ backgroundColor: "#6415ff" }}>{name}</Label>
        <Value
          style={{
            backgroundColor: "white",
            color: value ? "black" : "#C6C6C6",
          }}
        >
          {" "}
          {value ? value : "edit profile"}
        </Value>
      </Box>
    </div>
  );
}

export default ProfileCard;
