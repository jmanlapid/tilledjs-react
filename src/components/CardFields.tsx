import React from 'react'

export const CardFields: React.FC = () => {
  React.useEffect(() => {
    initTilledCardFields();
    return () => {
      // TODO: Cleanup stale tilled fields from previous calls
    }
  }, []);

  return (
    <>
      <div id="card-number" />
      <div id="card-expiry" />
      <div id="card-cvv" />
    </>
  );
};

const initTilledCardFields = async () => {
  const tilled = new Tilled(
     import.meta.env.VITE_TILLED_PUBLISHABLE_KEY,
     import.meta.env.VITE_TILLED_ACCOUNT_ID,
     { sandbox: import.meta.env.VITE_TILLED_IS_SANDBOX === 'true' }
   );
 
  const form = await tilled.form({
     payment_method_type: 'card'
   });

   await tilled.teardown();
 
  form.createField('cardNumber', {
    selector: '#card-number',
    placeholder: '#### #### #### ####'
  });
  form.createField('cardExpiry', {
    selector: '#card-expiry'
  });
  form.createField('cardCvv', {
    selector: '#card-cvv',
    placeholder: '123'
  });
 
   await form.build();
 }
