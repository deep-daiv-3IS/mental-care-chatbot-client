'use client';

import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleInputText = (e: any) => {
    setInputText(e.target.value);
  };

  const onSubmitText = async () => {
    await axios
      .post('http://127.0.0.1:5000/chat', {
        body: inputText,
      })
      .then((res: any) => {
        console.log(res);
        if (res.data) {
          setGeneratedText(res.data);
        }
      })
      .catch((error) => console.error(error));
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      onSubmitText();
    }
  };

  return (
    <Container>
      <Wrapper>
        <Row>
          <InputBox placeholder='자신의 감정을 작성해보세요.' onChange={handleInputText} onKeyDown={handleKeyDown} />
          <SendButton onClick={onSubmitText}>전송</SendButton>
        </Row>
        {generatedText && <h3>{generatedText}</h3>}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const InputBox = styled.input`
  width: 400px;
  height: 40px;
  font-size: 16px;
  padding: 4px;
`;

const SendButton = styled.div`
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9c9cff;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
`;
