import React, { useState, useCallback } from "react";
import { Page, Tabs, Grid, Frame } from "@shopify/polaris";
import Style from './components/style';
import Icons from './components/icons';
import Block from './components/block';
import Preview from './components/preview';

import '@shopify/polaris/build/esm/styles.css';

const App = () => {
  const [selected, setSelected] = useState(2);
  const handleTabChange = useCallback((selectedTabIndex) => setSelected(selectedTabIndex), []);

  const tabs = [
    {
      id: 'Block',
      content: 'Block',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content-1',
    },
    {
      id: 'Icons',
      content: 'Icons',
      panelID: 'accepts-marketing-content-1',
    },
    {
      id: 'Style',
      content: 'Style',
      panelID: 'repeat-customers-content-1',
    },
  ];

  const renderTabContent = () => {
    switch (tabs[selected].content) {
      case 'Block':
        return <Block />;
      case 'Icons':
        return <Icons />;
      case 'Style':
        return <Style />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Frame>
        <Page fullWidth>
          <Grid>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
              <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                {renderTabContent()}
              </Tabs>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
              <Preview />
            </Grid.Cell>
          </Grid>
        </Page>
      </Frame>
    </div>
  );
};

export default App;