import React, { useEffect, useState } from "react";
import AssetClassDropdown from "../components/AssetClassDropdown";
import CommitmentInfo from "../components/CommitmentInfo";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import fetchInvestorCommitment from "../fetchInvestorCommitment";

const assetClasses = [
  { value: "PE", label: "Private Equity" },
  { value: "PD", label: "Private Debt" },
  { value: "RE", label: "Real Estate" },
  { value: "INF", label: "Infrastructure" },
  { value: "NR", label: "Natural Resources" },
  { value: "HF", label: "Hedge Funds" },
];

const InvestorsDetailsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

// Title for the investor details section
const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InvestorDetailsPage = () => {
  const { firmId } = useParams<{ firmId: string }>();
  const [commitmentInfo, setCommitmentInfo] = useState<string>("");

  useEffect(() => {
    // Fetch initial commitment info
    if (firmId && assetClasses.length > 0) {
      fetchCommitmentInfo(assetClasses[0].value); // Fetch for the first asset class by default
    }
  }, [firmId, assetClasses]);

  const fetchCommitmentInfo = async (assetClass: string) => {
    try {
      if (firmId) {
        const response = await fetchInvestorCommitment(
          assetClass,
          parseInt(firmId)
        );
        const comitmentInfo = response.data
          ? response.data
          : `Asset class ${assetClass} does not exist`;
        setCommitmentInfo(comitmentInfo);
      }
    } catch (error) {
      console.error("Error fetching commitment information:", error);
      setCommitmentInfo("Error fetching commitment information");
    }
  };

  const handleFetchCommitmentInfo = (assetClass: string) => {
    fetchCommitmentInfo(assetClass);
  };

  return (
    <InvestorsDetailsPageContainer>
      <Title>Investor Details</Title>
      <AssetClassDropdown
        assetClasses={assetClasses}
        fetchCommitmentInfo={(assetClasses) => {
          handleFetchCommitmentInfo(assetClasses);
        }}
      />
      <CommitmentInfo commitmentInfo={commitmentInfo} />
    </InvestorsDetailsPageContainer>
  );
};

export default InvestorDetailsPage;
