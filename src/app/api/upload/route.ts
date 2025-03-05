import { NextResponse } from "next/server";
import cloudinary from "@/utils/cloudinary";

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const file = data.get("file") as Blob;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload image to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: "your-folder-name" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
