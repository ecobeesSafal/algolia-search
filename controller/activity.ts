import { prisma } from "../config/db";
import { RequestHandler } from "express";
import { Activity } from "./types";

export const createActivity: RequestHandler = async (req, res, next) => {
  const { name, price, description }: Activity = req.body;
  try {
    const data = await prisma.activity.create({
      data: {
        name,
        price,
        description,
      },
    });

    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

export const getAllActivity: RequestHandler = async (req, res, next) => {
  try {
    const data = await prisma.activity.findMany();
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};
