import { Storage } from "@google-cloud/storage";
import { v4 as uuidv4 } from "uuid";

const projectId = "gchoi";
const keyFilename = "../../../storagekey.json";
const storage = new Storage({ projectId, keyFilename });
export async function uploadFile(file: File) {
  const extension = file.name.split(".")[file.name.split(".").length - 1];
  const newFileName = uuidv4().replace(/-/gi, "").concat(".", extension);
  try {
    const result = await storage.bucket("cucutoo-dev-res").upload(file, {
      destination: newFileName,
    });
    return {
      _id: newFileName,
      url: "freeboard-gchoi/" + newFileName,
      size: Number(result[0].metadata.size),
    };
  } catch (err: any) {
    console.log(err.message);
    return { url: "" };
  }
}
