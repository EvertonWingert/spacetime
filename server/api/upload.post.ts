import { randomUUID } from "node:crypto";
import { createWriteStream, existsSync, mkdirSync } from 'node:fs';
import { resolve } from "node:path";
import { Duplex, pipeline } from 'node:stream';
import { promisify } from "node:util";

const pump = promisify(pipeline);

export default defineEventHandler(async (event) => {
  const user = useValidateJwt(event);

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

  if (!existsSync(resolve(`./uploads/${user.id}/`))) {
    mkdirSync(resolve(`./uploads/${user.id}/`));
  }

  const writeStream = createWriteStream(
    resolve(`./uploads/${user.id}/`, fileName)
  );

  const b = Buffer.from(file.data)
  const read = new Duplex();
  read.push(b);
  read.push(null);

  pump(read, writeStream);

  const fileUrl = `http://localhost:3000/${user.id}/${fileName}`;

  return {
    message: "File uploaded successfully",
    fileUrl,
  };
});
