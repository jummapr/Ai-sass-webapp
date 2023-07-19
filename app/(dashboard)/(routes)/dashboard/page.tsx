import { FC } from "react";
import { UserButton } from "@clerk/nextjs";

interface DashboardPageProps {}

const DashboardPage: FC<DashboardPageProps> = ({}) => {
  return (
    <>
      <div>
        <p>Dashboard Page</p>
      </div>
    </>
  );
};

export default DashboardPage;
