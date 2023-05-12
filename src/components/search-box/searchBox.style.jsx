import styled from "styled-components";
import { MdSearch } from "react-icons/md";

export function SearchIcon(props) {
  return <MdSearch {...props} />;
}

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 8px;
  width: 200px;
  height: 32px;
  position: relative;

  input[type="search"] {
    flex: 1;
    border: none;
    margin-left: 8px;
    margin-right: 8px;
    font-size: 16px;
    width: calc(100% - 24px);
    box-sizing: border-box;
    font-family: "Sedgwick Ave Display", cursive;
  }

  /* button {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    svg {
      width: 24px;
      height: 24px;
      fill: #333333;
      transition: fill 0.2s ease-in-out;
    }

    &:hover svg {
      fill: #0069d9;
    }
  } */
`;
