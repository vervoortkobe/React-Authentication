import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { getDbConnection } from "../db";

export const updateUserInfoRoute = {
  path: "/api/users/:userId",
  method: "put",
  handler: async (req, res) => {
    const { authorization } = req.headers;
    const { userId } = req.params;

    const updates = ({ favoriteFood, hairColor, bio }) =>
      ({ favoriteFood, hairColor, bio }(req.body));

    if (!authorization) {
      res.status(401).json({ message: "No authorization header sent" });
    }

    const token = authorization.split(" ")[1];
  },
};
