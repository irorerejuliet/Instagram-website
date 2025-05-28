import { useState } from "react";

import { useAuth } from "../context/AuthContext";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../Lib/supabase";

const UploadPost = () => {
  const { user } = useAuth();
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file || !user) return;

    setUploading(true);

    const fileExt = file.name.split(".").pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `${user.id}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("media")
      .upload(filePath, file);

    if (uploadError) {
      console.error("Upload error:", uploadError);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from("media").getPublicUrl(filePath);
    const media_url = data.publicUrl;

    const media_type = file.type.startsWith("image") ? "image" : "video";

    const { error: dbError } = await supabase.from("posts").insert([
      {
        user_id: user.id,
        caption,
        media_url,
        media_type,
      },
    ]);

    if (dbError) {
      console.error("DB error:", dbError);
    }

    setCaption("");
    setFile(null);
    setUploading(false);
  };

  return (
    <div className="bg-zinc-800 p-4 rounded-xl">
      <input
        type="file"
        accept="image/*,video/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-2"
      />
      <textarea
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="w-full mb-2 p-2 rounded bg-zinc-700"
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded"
      >
        {uploading ? "Uploading..." : "Post"}
      </button>
    </div>
  );
};

export default UploadPost;
