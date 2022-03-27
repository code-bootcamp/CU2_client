import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 100px 0 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterImg = styled.img`
  min-width: 800px;
`;
export const RegisterForm = styled.form`
  min-width: 400px;
  display: flex;
  flex-direction: column;
`;
export const FormTitle = styled.h1``;
export const FormSubTitle = styled.p``;

export const FormInput = styled.input`
  line-height: 30px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
`;

export const HashDivrap = styled.div`
  /* color: rgb(52, 58, 64); */
  width: 400px;
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  color: #444241;
  border: 1px solid gray;
  padding: 5px;
  border-radius: 8px;
  overflow: hidden;

  .HashWrapOuter {
    display: flex;
    flex-wrap: wrap;
  }

  .HashWrapInner {
    margin-top: 5px;
    padding: 8px 12px;
    color: #bdbdbd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    margin-right: 5px;
    cursor: pointer;
  }

  .HashInput {
    width: auto;
    margin: 10px;
    display: inline-flex;
    outline: none;
    cursor: text;
    /* line-height: 2rem; */
    /* margin-bottom: 0.75rem; */
    min-width: 8rem;
    border: none;
  }
`;
