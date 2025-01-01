
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  font-family: 'Poppins', sans-serif; /* Updated font to Poppins */
  color: #a0a0a0; /* Default text color updated to #a0a0a0 */
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const BackIcon = styled.span`
  font-size: 20px;
  margin-right: 10px;
  color: #000000;
  font-weight: bold;
  font-family: 'Poppins', sans-serif; /* Updated font to Poppins */
`;

const Title = styled.h1`
  font-size: 18px;
  color: black; /* Settings text in black */
`;

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  color: black; /* Restaurant Logo text in black */
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: auto;
`;

const Logo = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl})` : '#ccc')} no-repeat center/cover;
  border: 2px solid #ddd;
`;

const EditIcon = styled.label`
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: white;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 14px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const FormField = styled.div`
  margin-bottom: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  position: relative;
  flex: 1;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: black; /* Text inside input field in black */
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: red;
  }
`;

const Label = styled.span`
  position: absolute;
  top: -9px;
  left: 12px;
  background: white;
  padding: 0 5px;
  font-size: 12px;
  font-weight: bold;
  color: #a0a0a0; /* Updated label text color to #a0a0a0 */
`;

const EditButton = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: red;
  font-size: 14px;
  cursor: pointer;
`;

const UpdateButton = styled.button`
  width: 100%;
  padding: 12px;
  background: red;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: darkred;
  }
`;

const TSetting: React.FC = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [formData, setFormData] = useState({
    name: 'Stone Water',
    address: 'Door 8-9/2, Rushikonda, Visakhapatnam',
    phone: '9000012345',
    email: 'Stonewater@gmail.com',
    timings: 'Mon-Fri, 12pm-10pm',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <Header>
        <BackIcon>←</BackIcon>
        <Title>Settings</Title>
      </Header>
      <LogoContainer>
        <LogoWrapper>
          <Logo imageUrl={imageUrl || 'https://via.placeholder.com/100'} />
          <EditIcon htmlFor="file-upload">✏️</EditIcon>
          <HiddenFileInput
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </LogoWrapper>
        <div>Restaurant Logo</div>
      </LogoContainer>
      {Object.entries(formData).map(([key, value]) => (
        <FormField key={key}>
          <InputContainer>
            <Label>{`Restaurant ${key.charAt(0).toUpperCase() + key.slice(1)}`}</Label>
            <Input
              type="text"
              value={value}
              onChange={(e) => handleInputChange(key, e.target.value)}
            />
            <EditButton>Edit</EditButton>
          </InputContainer>
        </FormField>
      ))}
      <UpdateButton>Update Details</UpdateButton>
    </Container>
  );
};

export default TSetting;
