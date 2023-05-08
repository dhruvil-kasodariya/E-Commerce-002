import styled from "styled-components";
export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

// export const LoaderWrapper = styled.div`
//   width: 60px;
//   height: 60px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @keyframes rotate {
//     0% {
//       transform: scale(1) rotate(360deg);
//     }
//     50% {
//       transform: scale(0.8) rotate(-360deg);
//     }
//     100% {
//       transform: scale(1) rotate(360deg);
//     }
//   }
// `;

// export const Loader = styled.div`
//   box-sizing: border-box;
//   width: 100%;
//   height: 100%;
//   border: 10px solid #162534;
//   border-top-color: #4bc8eb;
//   border-radius: 50%;
//   animation: rotate 5s linear infinite;
// `;

// export const LoaderInner = styled.div`
//   border-top-color: #36f372;
//   border-bottom-color: #fff;
//   animation-duration: 2.5s;
// `;
