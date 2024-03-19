import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

const fetchInvestors = async (firmIds: number[]) => {
  const investors: any[] = [];
  for (const firmId of firmIds) {
    try {
      const response = await axios.get(`${API_URL}/api/investors`);
      investors.push(...response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return investors;
};

export default fetchInvestors;
