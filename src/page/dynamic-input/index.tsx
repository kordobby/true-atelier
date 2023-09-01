import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { FiThumbsUp } from "react-icons/fi";

const FormItem = () => {
  const maxLength = 10;
  const [value, setValue] = useState<string>("");
  const onHandleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <FormItemLayout>
      <LabelBox>
        <label>Username</label>
        <span>{`${value.length}/${maxLength}`}</span>
      </LabelBox>
      <InputLayout>
        <InputField>
          {value.length !== 0 && <InputText>{value}</InputText>}
          <InputCursor filled={(value.length / maxLength) * 100}>
            <InputValidator filled={(value.length / maxLength) * 100} />
          </InputCursor>
          {value.length === 10 && (
            <InputSuccessIcon>
              <FiThumbsUp />
            </InputSuccessIcon>
          )}
        </InputField>
        <InputTextField spellCheck="false" onChange={onHandleValue} />
      </InputLayout>
    </FormItemLayout>
  );
};

const FormItemLayout = styled.div`
  width: fit-content;
  margin: auto;
`;

const LabelBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2px 0px 2px 8px;
  color: white;
  font-size: 14px;
  label {
    font-weight: 600;
  }
  span {
    font-size: 12px;
    /* color: #00cabc; */
  }
`;

const DynamicInputPage = () => {
  return (
    <>
      <FormItem />
    </>
  );
};

export default DynamicInputPage;

const InputLayout = styled.div`
  height: 48px;
  width: 240px;
  position: relative;
  border: 1px solid gray;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid #fff;
  backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
`;

const InputField = styled.div`
  height: 48px;
  width: 240px;
  position: absolute;

  padding: 0 18px;
  display: flex;
  align-items: center;
`;

const InputText = styled.span`
  /* background-color: red; */
  margin-right: 8px;
`;

const ValidateInit = keyframes`
    0% {
        opacity: 0;
    } 50% {
         opacity: 1;
    } 100% {
         opacity: 0;
    }
`;

const ValidateSuccess = keyframes`
0% {
    position: absolute;
    right: 100px;
    background-color: #7958ff;
}
50% {
    position: absolute;
    right: 58px;
    /* margin: 30px; */
    transform:  scaleY(1) scaleX(1);
    border-radius: 4px;
    background-color: #7958ff;
}
100%{
    position: absolute;
    right: 58px;
    transform:  scaleY(0.8) scaleX(4);
    border-radius: 100%;
    background-color: #7958ff;
}
`;

const InputCursor = styled.div<{ filled: number }>`
  height: 30px;
  width: 6px;
  border-radius: 4px;
  background-color: white;
  display: flex;
  align-items: flex-end;

  animation: ${({ filled }) => {
    if (filled === 100) {
      return css`
        ${ValidateSuccess} 0.4s forwards
      `;
    }
    if (filled === 0) {
      return css`
        ${ValidateInit} 1.5s infinite
      `;
    }
  }};
`;

const IconRender = keyframes`
0% {
    opacity: 0;
    transform: rotate( -120deg )
}
100%{
    opacity: 1;
    transform: rotate( 0deg )
}
`;

const InputSuccessIcon = styled.div`
  position: absolute;
  right: 53px;
  margin-top: 3px;
  font-size: 14px;
  color: white;
  animation: ${IconRender} 0.4s forwards;
`;

const InputValidator = styled.div<{ filled: number }>`
  height: ${({ filled }) => filled && filled}%;
  width: 100%;
  border-radius: 4px;
  background-color: ${({ filled }) => filled !== 100 && "#7958ff"};
`;

const InputTextField = styled.input`
  height: 48px;
  width: 240px;
  box-sizing: border-box;
  background-color: transparent;
  outline: none;
  border: none;
  position: absolute;
  left: 0;
  z-index: 5;
  color: transparent;
`;
