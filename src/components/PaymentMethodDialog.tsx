import React from 'react';
import { create, InstanceProps } from 'react-modal-promise';
import {Dialog, DialogContent, DialogActions, ToggleButtonGroup, ToggleButton, DialogTitle, IconButton} from '@mui/material';
import {Close} from '@mui/icons-material';

import { AchBankFields } from './AchBankFields';
import { CardFields } from './CardFields';

const PaymentMethodDialog: React.FC<InstanceProps<void>> = ({
  onResolve,
  isOpen
}) => {
  const [type, setType] = React.useState<'card' | 'ach_debit'>('card');

  const handleType = (
    event: React.MouseEvent<HTMLElement>,
    newType: 'card' | 'ach_debit',
  ) => {
    setType(newType);
  };

  return (  
    <Dialog open={isOpen}>
      <DialogTitle sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <span>Add Payment Method</span>
        <IconButton onClick={() => onResolve()}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <ToggleButtonGroup
        value={type}
        exclusive
        onChange={handleType}
        aria-label="text alignment"
        >
          <ToggleButton value="card">Card</ToggleButton>
          <ToggleButton value="ach_debit">Bank</ToggleButton>
        </ToggleButtonGroup>
        {type === 'card' && <CardFields />}
        {type === 'ach_debit' && <AchBankFields />}
      </DialogContent>
    </Dialog>
  );
}

export const showPaymentMethodDialog = create<InstanceProps<void>>(PaymentMethodDialog);

