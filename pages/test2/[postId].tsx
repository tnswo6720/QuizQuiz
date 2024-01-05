// pages/test2/[postId].tsx

import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Post } from "../../types";
import { PostContainer } from "./postcontainer"; // 스타일 컴포넌트 임포트

interface PostDetailPageProps {
  post: Post | null;
}

const PostDetailPage: NextPage<PostDetailPageProps> = ({ post }) => {
  if (!post) {
    return <div>게시글을 불러올 수 없습니다.</div>;
  }

  return (
    <PostContainer>
      <h1>{post.title}</h1>
      {post.imageUrl && (
        <img src={post.imageUrl} alt={`게시글 ${post.id}의 이미지`} />
      )}
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </PostContainer>
  );
};

export const getServerSideProps: GetServerSideProps<
  PostDetailPageProps
> = async (context) => {
  const { postId } = context.params ?? {};

  if (!postId) {
    return { props: { post: null } };
  }

  // 데이터 페칭 로직 (임시 하드코딩된 데이터 사용)
  const post: Post = {
    id: postId as string,
    title: `게시글 ${postId}`,
    content: `<p>게시글 ${postId}의 내용입니다...</p>`,
    imageUrl: "https://example.com/image.jpg", // 이미지 URL (예시)
  };

  return { props: { post } };
};

export default PostDetailPage;
