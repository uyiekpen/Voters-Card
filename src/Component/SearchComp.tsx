import React, { useState } from "react";
import styled from "styled-components";
import Deputy from "./Deputy";
import YouthCordinator from "./YouthCordinator";

const SearchComp = () => {
  const [toggled, setToggled] = useState(false);
  const [youthCordinator, SetYouthCordinator] = useState(false);
  const [deputy, setDeputy] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Full>
          <MenuPath />
        </Full>

        <Mobile>{toggled ? <MenuPath /> : null}</Mobile>
        <PointedHolder>
          <CardWrapper>
            {toggled ? null : (
              <Pointed
                onClick={() => {
                  setToggled(true);
                }}
              >
                <Icon />
                View Menu
              </Pointed>
            )}
            {youthCordinator ? <YouthCordinator /> : deputy ? <Deputy /> : null}
          </CardWrapper>
        </PointedHolder>
      </Wrapper>
    </Container>
  );
  function MenuPath() {
    return (
      <Holder>
        <div>
          <Button
            onClick={() => {
              SetYouthCordinator(true);
              setDeputy(false);
              setToggled(false);
            }}
          >
            Youth Cordinator
          </Button>
        </div>
        <div>
          <Button
            onClick={() => {
              SetYouthCordinator(false);
              setDeputy(true);
              setToggled(false);
            }}
          >
            Deputy Youth Cordinator{" "}
          </Button>
        </div>
      </Holder>
    );
  }
};

const Holder = styled.div`
  width: 200px;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 90vh;
`;
const Button = styled.div`
  text-align: center;
  margin: 10px;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  background: black;
  /* width: 200px; */

  font-size: 15px;
  text-transform: uppercase;
  /* font-weight: 900; */
  transition: all 350ms;
  /* margin: 0 5px; */
  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
    transform: scale(1.03);
  }
`;

const Icon = styled.div`
  font-size: 30px;
  margin: 0 10px;
`;

const CardWrapper = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;

  @media screen and (max-width: 600px) {
    width: 90%;
    justify-content: center;
    display: flex;
  }
`;

const PointedHolder = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
    justify-content: center;
    display: flex;
  }
`;
const Pointed = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
    position: absolute;
    top: 80px;
    left: 0;
    font-weight: 700;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    margin: 0 10px;
    transition: all 350ms;

    :hover {
      cursor: pointer;
      transform: scale(1.02);
    }
  }
`;

const Mobile = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    position: fixed;
    z-index: 10;

    border-radius: 0px 0 10px 0;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.3px);
    -webkit-backdrop-filter: blur(4.3px);
    border: 1px solid rgba(24, 23, 23, 0.2);
    overflow: hidden;
    z-index: 10;
  }
`;

const Full = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 90vw;
`;

const Container = styled.div`
  font-family: poppins;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;
export default SearchComp;
