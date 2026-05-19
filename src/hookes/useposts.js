import { useEffect, useState } from "react";
import { supabase } from "../Lib/supabase";


const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error.message);
    } else {
      setPosts(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading };
};

export default usePosts;
