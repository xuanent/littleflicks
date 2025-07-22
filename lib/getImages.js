import fs from "fs";
import path from "path";

export function getImagesByLocation() {
  const baseDir = path.join(process.cwd(), "public/images");

  const folders = fs.readdirSync(baseDir);
  const result = {};

  folders.forEach((folder) => {
    const folderPath = path.join(baseDir, folder);
    if (fs.lstatSync(folderPath).isDirectory()) {
      const files = fs
        .readdirSync(folderPath)
        .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));
      result[folder] = files.map((file) => `/images/${folder}/${file}`);
    }
  });

  return result;
}