import styled from "@emotion/styled";
import Color from "../../../../commons/styles/color";

export const CodingUsUs = styled.div`
  display: flex;
  width: 100%;
  /* max-width: 1200px; */
`;
export const CodingUsUsBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
`;
export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
`;
export const Banner = styled.div`
  width: 1440px;
  height: 172px;
  background: #fafafa;
  border-radius: 8px;
`;

interface IGubunProps {
  isSelected: boolean;
}
export const GubunLabel = styled.div`
    font-weight: ${(props: IGubunProps) => (props.isSelected ? "700" : "300")};
    font-size: 24px;
    color = ${(props: IGubunProps) =>
      props.isSelected ? "black" : Color.medium};
      :hover{
        cursor: pointer;
      }
`;


