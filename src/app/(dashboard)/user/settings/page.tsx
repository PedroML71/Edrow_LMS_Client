import SharedNotificationSettings from "@/components/SharedNotificationSettings";
import { FC } from "react";

const UserSettingsPage: FC = ({}) => {
  return (
    <div className="w-3/5">
      <SharedNotificationSettings
        title="User Settings"
        subtitle="Manage your user notification settings"
      />
    </div>
  );
};

export default UserSettingsPage;
