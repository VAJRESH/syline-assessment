import { getData } from "../../utils/jsonData";

export default function handler(req, res) {
  res.status(200).json({
    labTime: getData().user.labTime,
  });
}
