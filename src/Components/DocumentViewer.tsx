import React from "react";
import { styled } from "styled-components";
import { Column } from "../Styles/StyledComponents";

const Frame = styled.iframe`
  width: 100%;
  height: 600px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

interface DocumentViewerProps {
  src: string;
  type?: "pdf" | "ppt";
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ src, type }) => {
  // If PPT, use Google Docs Viewer wrapper
  const embedSrc =
    type === "ppt"
      ? `https://docs.google.com/gview?url=${src}&embedded=true`
      : src;

  return (
    <Column style={{ width: "100%", alignItems: "center" }}>
      <Frame src={embedSrc} />
    </Column>
  );
};

export default DocumentViewer;
