import { getData } from "../../utils/jsonData";

let data = getData();

export default function handler(req, res) {
  const { password } = JSON.parse(req.body);
  const storedPassword = data.user.password;
  if (storedPassword !== password)
    return res.status(403).json({ error: "Incorrect Password" });

  if (data.user.labTime <= 0)
    return res
      .status(403)
      .json({ message: "No Time Left", isLabAvailable: false, labTime: 0 });

  res.status(200).json({
    message: "Welcome to Lab",
    isLabAvailable: true,
    labTime: data.user.labTime,
  });
}
