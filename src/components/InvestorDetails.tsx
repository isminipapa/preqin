import React from "react";

interface Investor {
  FirmId: number;
  FirmName: string;
  Type: string;
  DateAdded: string;
  Address: string;
}

interface InvestorTableProps {
  investors: Investor[];
}

const InvestorDetails: React.FC<InvestorTableProps> = ({ investors }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>FirmId</th>
          <th>FirmName</th>
          <th>Type</th>
          <th>DateAdded</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {investors.map((investor, index) => (
          <tr key={index}>
            <td>{investor.FirmId}</td>
            <td>{investor.FirmName}</td>
            <td>{investor.Type}</td>
            <td>{investor.DateAdded}</td>
            <td>{investor.Address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvestorDetails;
