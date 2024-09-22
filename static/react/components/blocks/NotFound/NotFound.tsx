import React, { FC } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

interface INotFoundProps {}

const NotFound: FC<INotFoundProps> = (props: INotFoundProps) => {
  const {} = props;

  return (
    <div data-cy="not-found" className="content-container">
      <div className="content-title-group not-found">
        <div data-cy="exclamation">
          <FaExclamationTriangle />
        </div>
        &nbsp;
        <span className="title">These aren't the bits you're looking for</span>
      </div>
    </div>
  );
};

export default NotFound;
