import delve from "dlv";
import "github-markdown-css";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "../../../../utils";
import Container from "../../../shared/Container";

const gfm = require("remark-gfm");

const ArticleContent = ({ attributes }) => {
  const title = delve(attributes, "title");
  const image = delve(attributes, "image");
  const content = delve(attributes, "content");
  const author = delve(attributes, "author");
  const locale = delve(attributes, "locale");
  return (
    <Container>
      <section className="text-gray-600 body-font py-24">
        <div className="container px-5 py-2 mx-auto flex flex-col justify-center items-center">
          <h1 className="font-black sm:text-5xl text-4xl  mb-4 text-gray-900 text-center">
            {title}
            <h1>hello</h1>
          </h1>

          <div className="lg:w-4/6 mx-auto mt-10">
            <div className="shadow-lg rounded-lg overflow-hidden">
              <img
                alt={delve(image, "data.attributes.alternativeText")}
                className="object-cover object-center h-full w-full"
                src={getStrapiMedia(delve(image, "data.attributes.url"))}
              />
            </div>
          </div>
          
          <div className="markdown-body shadow-lg rounded-xl lg:w-3/6 w-full md:p-12 p-6 mt-2 bg-white">
            <ReactMarkdown
              children={content}
              remarkPlugins={[gfm]}
              linkTarget="_blank"
              components={{
                img: ({ node, ...props }) => (
                  <img src={getStrapiMedia(delve(props, "src"))} />
                ),
              }}
            ></ReactMarkdown>
          </div>
          <Link href={`/blog?lang=${locale}`}>
            <button
              type="button"
              className="ml-2 py-4 mt-8 px-6 bg-secondary hover:bg-secondary-darker text-white w-1/8 text-center text-base font-semibold shadow-sm rounded-md"
            >
              Back to articles
            </button>
          </Link>
        </div>
      </section>
    </Container>
  );
};

ArticleContent.defaultProps = {};

export default ArticleContent;
