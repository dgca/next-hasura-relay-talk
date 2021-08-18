import type { NextApiRequest, NextApiResponse } from "next";

export default async function timestamp(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).send({
      now: new Date().valueOf(),
    });
  } catch (error) {
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
}
