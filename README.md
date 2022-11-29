# Quick Start

1. Change Tilled environment variables in ./env/.env.development
2. Run the following commands

```
npm i;
npm start;
```
3. Visit the localhost url
4. Click [Add Payment Button]
5. Toggle between Card & Bank

# Issues

## 1. React Strict Mode
Reproduction steps

1. Click [Add Payment Button]
2. Open web inspect on the first input, notice how 2 card number fields are rendered
3. Click [Bank]
5. Open web inspect on the first input, notice how 2 bank account number fields are rendered

React strict mode is turned off in [the example you've provided](https://github.com/gettilled/tilled-example-monorepo/blob/master/react-payment-example/client/src/index.js#L9-L11). What this does is run [React useEffect hooks twice](https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state) to ensure our components are cleaning up properly. The Tilled.js library does not have any cleanup functionality that we can interface with to cleanup whatever TilledJS has done to the DOM.

In ./src/components/AchBankFields.tsx and ./src/components/CardFields.tsx, the React.useEffect returns a function to run any cleanup you may recommend. When the dialog is rendered, we see duplicate form fields. What would you recommend here?

We would rather not turn off strict mode in our application.

## 2. Toggling between Card/Bank in Dialog

Reproduction steps

1. Click [Add Payment Button]
2. Open web inspect on the first input, notice how 2 card number fields are rendered
3. Click [Bank]
4. Click [Card] 
5. Open web inspect on the first input, notice how 4 card number fields are rendered
6. Click [Bank]
7. Click [Card]
8. Open web inspect on the first input, notice how 6 card number fields are rendered

Toggling between card/bank in dialog multiple times is attaching form fields repeatedly to the selectors without first cleaning up the DOM. I create new Tilled/Form instances as recommended. What would you recommend here? Why is TilledJS keep rendering duplicate fields?

