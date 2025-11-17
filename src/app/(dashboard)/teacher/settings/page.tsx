import SharedNotificationSettings from "@/components/SharedNotificationSettings";
import { FC } from "react";

const TeacherSettingsPage: FC = ({}) => {
  return (
    <div className="w-3/5">
      <SharedNotificationSettings
        title="Teacher Settings"
        subtitle="Manage your teacher notification settings"
      />
    </div>
  );
};

export default TeacherSettingsPage;
