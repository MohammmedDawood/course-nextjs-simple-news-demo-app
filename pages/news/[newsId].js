// our-domain.com/news/something-important

import { useRouter } from "next/router";
import React from "react";

function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetch the news item with newsId

  return (
    <>
      <div>DetailPage</div>
      <p>{newsId}</p>
    </>
  );
}

export default DetailPage;
