import { randomUUID } from "node:crypto";
import {  resolve } from "node:path";
import {createWriteStream } from 'node:fs'
import {Duplex, pipeline} from 'node:stream'
import { promisify } from "node:util";

const pump = promisify(pipeline);

export default defineEventHandler(async (event) => {
  const data = await readMultipartFormData(event);
  if(!data) {
    return { message: "No file uploaded" };
  }
  const file = data[0];
  if(!file?.name) {
    return {
      message: "No file uploaded",
    }
  }

  const fileId = randomUUID();
  const extension =  file.filename.split('.').pop();
  const fileName = `${fileId}.${extension}`;

  const writeStream =  createWriteStream(
    resolve("./uploads", fileName)
  );

  const b = Buffer.from(file.data)
  const read = new Duplex();
  read.push(b);
  read.push(null);

  pump(read, writeStream);


  const fileUrl = new URL(fileName, "http://localhost:3000").toString();

  return {
    message: "File uploaded successfully",
    fileUrl,
  };
});
