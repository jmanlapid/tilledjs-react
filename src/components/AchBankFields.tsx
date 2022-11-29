import React from 'react';

export const AchBankFields = () => {
  React.useEffect(() => {
    initTilledBankFields();
    return () => {
      // TODO: Cleanup stale tilled fields from previous calls
    }
  }, [])
  return (
    <>
      <div id="bank-account" />
      <div id="bank-routing" />
    </>
  )
};

const initTilledBankFields = async () => {
 const tilled = new Tilled(
    import.meta.env.VITE_TILLED_PUBLISHABLE_KEY,
    import.meta.env.VITE_TILLED_ACCOUNT_ID,
    { sandbox: import.meta.env.VITE_TILLED_IS_SANDBOX === 'true' }
  );

 const form = await tilled.form({
    payment_method_type: 'ach_debit'
  });

  form.createField('bankAccountNumber', {
    selector: '#bank-account',
    placeholder: '1234567899'
  });
  form.createField('bankRoutingNumber', {
    selector: '#bank-routing',
    placeholder: '123456789'
  });

  await form.build();
}

