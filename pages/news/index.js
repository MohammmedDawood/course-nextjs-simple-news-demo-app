// our-domain.com/news

import React from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <div>NewsPage</div>;
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS Is A Great Framework
          </Link>
        </li>
        <li>
          <Link href="/news/something-important">Something Important</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
