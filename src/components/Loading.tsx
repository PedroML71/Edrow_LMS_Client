import { Loader2 } from "lucide-react";
import { FC } from "react";

const Loading: FC = ({}) => {
  return (
    <div className="loading">
      <Loader2 className="loading__spinner" />
      <span className="loading__text">Loading...</span>
    </div>
  );
};

export default Loading;
