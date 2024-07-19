import {Profile} from "@/lib/profiles";
import clsx from "clsx";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";
import remarkGemoji from "remark-gemoji";

export default function ProfileCardAbout({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col flex-1 gap-y-2 justify-between">
      <Markdown
        className={clsx(
          "prose prose-sm dark:prose-invert",
          "prose-h1:text-xl prose-h1:font-bold prose-h1:mb-2 prose-h1:mt-0",
          "prose-h2:font-semibold prose-h2:text-lg prose-h2:mb-1.5 prose-h2:mt-0",
          "prose-h3:font-medium prose-h3:text-base prose-h3:mb-1 prose-h3:mt-0",
          "prose-h4:mb-0.5 prose-h4:mt-0 prose-h5:mb-0.5 prose-h6:text-xs",
          "prose-p:mb-0.5 prose-p:mt-0",
          "prose-a:text-blue-500 dark:prose-a:text-blue-300 prose-a:no-underline",
          "prose-ul:my-1 prose-ol:my-1 prose-li:my-0",
          "prose-blockquote:my-2 prose-blockquote:not-italic prose-quoteless",
          "before:prose-code:content-none after:prose-code:content-none",
          "prose-pre:mb-3 prose-pre:mt-2",
          "prose-img:w-20 prose-img:inline prose-img:my-1",
          "prose-hr:my-4"
        )}
        components={{
          code({children, className, node, ...props}) {
            const isInline = node?.position?.start.line === node?.position?.end.line;
            return (
              <code
                className={clsx(className, isInline && clsx(
                  "bg-[var(--tw-prose-pre-bg)] text-[var(--tw-prose-pre-code)] px-1.5 py-0.5 rounded",
                  "font-normal text-[0.7rem]"
                ))}
                {...props}
              >
                {children}
              </code>
            )
          },
          h1: HeadingRenderer,
          h2: HeadingRenderer,
          h3: HeadingRenderer,
          h4: HeadingRenderer,
          h5: HeadingRenderer,
          h6: HeadingRenderer
        }}
        remarkPlugins={[remarkGfm, remarkGemoji]}
      >
        {profile.about}
      </Markdown>
      <div className="flex flex-col text-sm">
        <span>Profile created</span>
        <span className="font-medium">
          {profile.createdAt.toLocaleDateString(
            "en-GB",
            { year: 'numeric', month: 'long', day: 'numeric' }
          )}
        </span>
      </div>
    </div>
  )
}

function HeadingRenderer(properties: any) {
  const children = React.Children.toArray(properties.children)
  const text = children.reduce(flatten, '') as string
  const slug = text.toLowerCase().replace(/\W/g, '-')
  return React.createElement(properties.node.tagName, {id: slug}, properties.children)
}

function flatten(text: any, child: any): string {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}