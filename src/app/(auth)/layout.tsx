import React, { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="auth-layout">
      <main className="auth-layout__main">{children}</main>
    </div>
  );
};

export default Layout;
