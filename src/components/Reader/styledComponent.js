import styled from "styled-components";
export const ReaderContainer = styled.div`
  font-size: 16px;
  position: absolute;
  top: ${(props) => (props.fullscreen ? 0 : 135)}px;
  left: ${(props) => (props.fullscreen ? 0 : 1)}rem;
  right: ${(props) => (props.fullscreen ? 0 : 1)}rem;
  bottom: ${(props) => (props.fullscreen ? 0 : 1)}rem;
  transition: all 0.6s ease;
  margin-left: 32px;
  margin-right: 32px;
  ${(props) => !props.fullscreen && "0 0 5px rgba(0,0,0,.3);"};
`;
