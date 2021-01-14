import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import Button from '../../../components/Button';

interface RefreshStatProps {
  tokenName: string;
  description: string;
  price: string;
  lastUpdatedTime: string;
  onRefresh: () => void;
  disabled?: boolean;
}

const ExchangeStat: React.FC<RefreshStatProps> = ({ tokenName, description, price, lastUpdatedTime, onRefresh, disabled = false }) => {
  return (
    <Card>
      <StyledCardContentInner>
        <StyledCardTitle>{`💰 ${tokenName} = $${price}`}</StyledCardTitle>
        <StyledDesc>{description}</StyledDesc>
        <StyledDesc>{lastUpdatedTime}</StyledDesc>
        <StyledCardActions>
          {/* <Button text="Refresh" onClick={handleBondOracle} disabled={disabled} /> */}
          <Button text="Refresh" onClick={onRefresh} disabled={disabled} />
        </StyledCardActions>
      </StyledCardContentInner>
    </Card>
  );
};

const StyledCardTitle = styled.div`
  color: ${(props) => props.theme.color.grey[200]};
  font-size: 20px;
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.spacing[2]}px;
`;

const StyledDesc = styled.span`
  color: ${(props) => props.theme.color.grey[300]};
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing[2]}px;
`;

const StyledCardContentInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing[2]}px;
`;

const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[3]}px;
  width: 100%;
`;

export default ExchangeStat;
