import React from "react"
import ContentLoader from "react-content-loader"

const PostLoader = (props) => (
  <ContentLoader
    speed={1}
    width={360}
    height={340}
    viewBox="0 0 360 340"
    backgroundColor="#c8c8da"
    foregroundColor="#77778f"
    {...props}
  >
    <rect x="11" y="10" rx="29" ry="29" width="320" height="270" />
    <rect x="259" y="339" rx="0" ry="0" width="1" height="24" />
  </ContentLoader>
)

export default PostLoader

