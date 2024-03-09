import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
const override = css`
  display: block;
  margin: 0 auto;

  border-color: white;
`;

function Loader({ loading }) {
  return (
    <div
      style={{
        margin: "0px auto",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ClipLoader color={"white"} loading={loading} css={override} size={150} />
    </div>
  );
}

export default Loader;
