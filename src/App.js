import React from 'react';
import { UseInputPractice } from './hooks/useInput';
import { UseTabPractice } from './hooks/useTab';
import { UseTitlePractice } from './hooks/useTitle';
import { UseClickPractice } from './hooks/useClick';
import { UseConfirmPractice } from './hooks/useConfirm';
import { UsePreventLeavePractice } from './hooks/usePreventLeave';
import { UseBeforeLeavePractice } from './hooks/useBeforeLeave';
import { UseFadeInPractice } from './hooks/useFadeIn';
import { UseNetworkPractice } from './hooks/useNetwork';

function App() {
  return (
    <div className="App">
      <UseInputPractice />
      <UseTabPractice />
      <UseTitlePractice />
      <UseClickPractice />
      <UseConfirmPractice />
      <UsePreventLeavePractice />
      <UseBeforeLeavePractice />
      <UseFadeInPractice />
      <UseNetworkPractice />
    </div>
  );
}

export default App;
