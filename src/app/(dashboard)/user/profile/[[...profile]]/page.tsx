import Header from "@/components/Header";
import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { FC } from "react";

const UserProfilePage: FC = ({}) => {
  return (
    <>
      <Header title="Profile" subtitle="View your profile" />
      <UserProfile
        path="/user/profile"
        routing="path"
        appearance={{
          theme: dark,
          elements: {
            scrollBox: "bg-customgreys-darkGrey",
            navbar: {
              "& > div:nth-child(1)": {
                background: "none",
              },
            },
          },
        }}
      />
    </>
  );
};

export default UserProfilePage;
