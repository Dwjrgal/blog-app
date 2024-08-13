import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ArticleDetail = () => {
  const { query } = useRouter();
  console.log("QR", query.id);
  const [articleDetail, setArticleDetail] = useState(null);

  const getArticleById = async (id) => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    setArticleDetail(data);
  };

  useEffect(() => {
    getArticleById(query.id);
  }, []);

  return (
    <div className="p-10">
      <div className="flex ml-40">
        <img
          className="w-8 h-8 rounded-full"
          src={articleDetail?.user?.profile_image}
          alt=""
        />
        <div className="text-[11px] flex gap-2 items-center ml-2">
          <h2>Name</h2>
          <p>2024</p>
        </div>
      </div>
      <div
        className="blog-detail"
        dangerouslySetInnerHTML={{ __html: articleDetail?.body_html }}
      ></div>
    </div>
  );
};

export default ArticleDetail;
