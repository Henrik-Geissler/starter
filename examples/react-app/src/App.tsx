import React from 'react';
import { LuxScope, LuxHeading, LuxCard, LuxText, LuxButton, LuxTabs, LuxTab } from '@lux/react';

function App() {
  return (
    <LuxScope density="comfortable" mainColor="#0ea5e9">
      <LuxHeading level={1}>Lux React Example</LuxHeading>
      <LuxCard variant="elevated">
        <LuxHeading level={3}>Card Title</LuxHeading>
        <LuxText>This is a card with Lux components in React.</LuxText>
        <LuxButton variant="primary">Action</LuxButton>
      </LuxCard>
      <LuxTabs activeIndex={0}>
        <LuxTab label="Tab 1">
          <LuxText>Content for tab 1</LuxText>
        </LuxTab>
        <LuxTab label="Tab 2">
          <LuxText>Content for tab 2</LuxText>
        </LuxTab>
      </LuxTabs>
    </LuxScope>
  );
}

export default App;
