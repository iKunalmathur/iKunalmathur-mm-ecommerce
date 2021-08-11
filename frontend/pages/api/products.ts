import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../../services/handleApi";

type Data = {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    publish: boolean;
    createdAt: string;
    updatedAt: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const path = "/products";
  const data = await getData(path);
  res.status(200).json(data);
}
