import algoliasearch from "algoliasearch";
import { prisma } from "./db";
import records from "../data.json";
import { Request, Response } from "express";

const client = algoliasearch("OS5DO28FMX", "7de32acb15b43f5440b139449f12e5b5");

export const index = client.initIndex("activity");

export const save = async () => {
  await index.saveObjects(records).then(({ objectIDs }) => {
    console.log(objectIDs);
  });
};

export const search = async (req: Request, res: Response) => {
  const searchField = req.query.searchField;
  if (!searchField) {
    return res.status(404).json("not found");
  }
  try {
    const result = await index.search(searchField as any);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const send = async () => {
  const prismaData = await prisma.activity.findMany();

  const algoliaResponse = await index.saveObjects(prismaData);

  console.log(algoliaResponse);
};
