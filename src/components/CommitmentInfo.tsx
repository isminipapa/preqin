import React, { useState } from "react";

interface CommitmentInfoProps {
  commitmentInfo: string;
}

const CommitmentInfo: React.FC<CommitmentInfoProps> = ({ commitmentInfo }) => {
  return (
    <div>
      <h2>Commitment Information</h2>
      <p>{commitmentInfo}</p>
    </div>
  );
};

export default CommitmentInfo;
