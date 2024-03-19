import React from "react";
import styled from "styled-components";

interface AssetClass {
  value: string;
  label: string;
}

interface AssetClassDropdownProps {
  assetClasses: AssetClass[];
  fetchCommitmentInfo: (assetClass: string) => void;
}

const DropdownSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-size: 16px;
`;

const DropdownOption = styled.option`
  padding: 8px 12px;
`;

const AssetClassDropdown: React.FC<AssetClassDropdownProps> = ({
  assetClasses,
  fetchCommitmentInfo,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const assetClass = event.target.value;
    if (assetClass) {
      fetchCommitmentInfo(assetClass);
    }
  };

  return (
    <DropdownSelect onChange={handleChange}>
      {assetClasses.map((assetClass) => (
        <DropdownOption key={assetClass.value} value={assetClass.value}>
          {assetClass.label}
        </DropdownOption>
      ))}
    </DropdownSelect>
  );
};

export default AssetClassDropdown;
