import React from 'react';
import { UseInputPractice } from './hooks/useInput';
import { UseTabPractice } from './hooks/useTab';
import { UseTitlePractice } from './hooks/useTitle';
import { UseClickPractice } from './hooks/useClick';
import { UseConfirmPractice } from './hooks/useConfirm';
import { UsePreventLeavePractice } from './hooks/usePreventLeave';
import { UseBeforeLeavePractice } from './hooks/useBeforeLeave';

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
    </div>
  );
}

export default App;
