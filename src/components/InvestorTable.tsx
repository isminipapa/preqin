import React from "react";
import Investor from "../schemas/types";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface InvestorTableProps {
  investors: Investor[];
}

const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 18px;
  text-align: center;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableData = styled.td`
  padding: 15px 10px;
  text-align: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007c25;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: #005709;
  }
`;

const InvestorTable: React.FC<InvestorTableProps> = ({ investors }) => {
  return (
    <TableContainer>
      <h1>Investor Table</h1>

      <Table>
        <thead>
          <TableRow>
            <TableHeader>FirmId</TableHeader>
            <TableHeader>FirmName</TableHeader>
            <TableHeader>Type</TableHeader>
            <TableHeader>DateAdded</TableHeader>
            <TableHeader>Address</TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {investors.map((investor, index) => (
            <TableRow key={index}>
              <TableData>{investor.firm_id}</TableData>
              <TableData>{investor.firm_name}</TableData>
              <TableData>{investor.firm_type}</TableData>
              <TableData>
                {dayjs(investor.date_added).format("d MMM YY")}
              </TableData>
              <TableData>{investor.address}</TableData>
              <TableData>
                <Button as={Link} to={`/investors/${investor.firm_id}`}>
                  View Details
                </Button>
                {/* <Link to={`/investors/${investor.firm_id}`}>View Details</Link> */}
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default InvestorTable;
