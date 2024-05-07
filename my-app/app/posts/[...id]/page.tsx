import path from "path";

import { convertSpaceToHyphen } from "@/app/util/string";
import { readFileSync } from "fs";

import PostContents from "@/app/components/Posts/Content";
import PostSummary from "@/app/components/Posts/Summary";
import PostTitle from "@/app/components/Posts/Title";
import { createMDX } from "@/app/util/mdx";

const components = {
  h1: (props: any) => {
    return (
      <>
        <h1 id={convertSpaceToHyphen(props.children)}>
          {props.children}
          <a href=""></a>
        </h1>
      </>
    );
  },
  h2: (props: any) => {
    return (
      <>
        <h2 id={convertSpaceToHyphen(props.children)}>
          {props.children}
          <a href=""></a>
        </h2>
      </>
    );
  },
};

const postPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const filePath = path.join(process.cwd(), "app", "asset", `${id}.md`);
  const file = readFileSync(filePath);

  const mdx = await createMDX(file, components);

  return (
    <div className="flex flex-col w-full max-w-[1000px]">
      <PostTitle mdx={mdx} />
      <article className="flex max-lg:flex-col">
        <PostSummary mdx={mdx} />
        <PostContents mdx={mdx} />
      </article>
    </div>
  );
};

export default postPage;
