import React, { useEffect, useState } from "react";
import fetchInvestors from "../fetchInvestors";
import InvestorTable from "../components/InvestorTable";
import Investor from "../schemas/types";

const Investors = () => {
  const [investors, setInvestors] = useState<Investor[]>([]);

  useEffect(() => {
    const fetchInvestorData = async () => {
      try {
        const investorsData = await fetchInvestors();
        setInvestors(investorsData);
      } catch (error) {
        console.error("Error fetching investor data:", error);
      }
    };

    fetchInvestorData();
  }, []);

  return <InvestorTable investors={investors} />;
};

export default Investors;
