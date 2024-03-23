import React from 'react';
import { UseInputPractice } from './hooks/useInput';
import { UseTabPractice } from './hooks/useTab';
import { UseTitlePractice } from './hooks/useTitle';
import { UseClickPractice } from './hooks/useClick';
import { UseConfirmPractice } from './hooks/useConfirm';
import { UsePreventLeavePractice } from './hooks/usePreventLeave';

function App() {
  return (
    <div className="App">
      <UseInputPractice />
      <UseTabPractice />
      <UseTitlePractice />
      <UseClickPractice />
      <UseConfirmPractice />
      <UsePreventLeavePractice />
    </div>
  );
}

export default App;
