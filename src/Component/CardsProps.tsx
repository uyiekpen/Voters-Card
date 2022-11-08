import React from "react";
import styled from "styled-components";

const CardsProps: React.FC<{
  but2: string;
  but: string;
  pix: any;
  NameTag: string;
  category: string;
}> = ({ but, pix, NameTag, category, but2 }) => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Input>
            <SearchInput />
            <Button>{but}</Button>
          </Input>
          <ImageInfo>
            <Image src={pix} />
            <Name>{NameTag}</Name>
            <Category>{category}</Category>
          </ImageInfo>
          <Button>{but2}</Button>
        </Card>
      </Wrapper>
    </Container>
  );
};

const Category = styled.div``;
const Name = styled.div``;
const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 100%;
  object-fit: cover;
`;
const ImageInfo = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const SearchInput = styled.input`
  padding: 15px 80px;
  border-radius: 20px;
  outline: none;
`;
const Button = styled.button`
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  background-color: black;
  border-radius: 20px;

  transition: all 360ms;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 15px 20px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
  color: white;
`;
const Input = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const Card = styled.div`
  height: 470px;
  width: 500px;
  border-radius: 20px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
`;
const Container = styled.div`
  width: 100vw;
  min-height: 600px;
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 400px;
  }
`;

export default CardsProps;
