import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

const fetchInvestorCommitment = async (assetClass: string, firmId?: number) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/investor/commitment/${assetClass}/${firmId}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
};

export default fetchInvestorCommitment;
