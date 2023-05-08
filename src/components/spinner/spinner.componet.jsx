import {
  SpinnerContainer,
  SpinnerOverlay,
  Loader,
  LoaderInner,
  LoaderWrapper,
} from "./spinner.style";
const Spinner = () => {
  // return (
  //   <LoaderWrapper>
  //     <Loader>
  //       <LoaderInner />
  //     </Loader>
  //   </LoaderWrapper>
  // );
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
