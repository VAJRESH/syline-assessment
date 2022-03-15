import { getData, saveData } from "../../utils/jsonData";

let data = getData();

export default function handler(req, res) {
  const { timeLeft } = JSON.parse(req.body);

  data.user.labTime = timeLeft;
  saveData(data);
  res.status(200).json({ message: "Thank You for Using Our Labs" });
}
