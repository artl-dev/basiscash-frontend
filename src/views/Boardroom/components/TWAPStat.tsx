import React from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';

interface StatProps {
  icon: string;
  title: string;
  description: string;
  lastUpdatedTime: string;
}

const Stat: React.FC<StatProps> = ({ icon, title, description, lastUpdatedTime }) => {
  return (
    <Card>
      <StyledCardContentInner>
        <StyledIcon>{icon}</StyledIcon>
        <StyledTextWrapper>
          <StyledCardTitle>{title}</StyledCardTitle>
          <StyledDesc>{description}</StyledDesc>
          <StyledDesc>{lastUpdatedTime}</StyledDesc>
        </StyledTextWrapper>
      </StyledCardContentInner>
    </Card>
  );
};

const StyledCardTitle = styled.div`
  color: ${(props) => props.theme.color.grey[200]};
  font-size: 18px;
  font-weight: 700;
`;

const StyledDesc = styled.span`
  color: ${(props) => props.theme.color.grey[400]};
  margin-bottom: ${(props) => props.theme.spacing[2]}px;
`;

const StyledIcon = styled.span`
  font-size: 28px;
  margin-right: 10px;
`;

const StyledTextWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

const StyledCardContentInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: ${(props) => props.theme.spacing[2]}px ${(props) => props.theme.spacing[4]}px;
`;

export default Stat;
