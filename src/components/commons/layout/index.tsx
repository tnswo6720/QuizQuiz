// import LayoutBanner from "./banner/LayoutBanner.container"
import LayoutHeader from "./header/LayoutHeader.container";
// import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: auto;
  overflow-y: auto;
`;

const Body = styled.div`
  width: 100%;
`;

interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <Wrapper>
      <LayoutHeader />
      <Body>{props.children}</Body>
    </Wrapper>
  );
}
