/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Root from './screens/RootNavigator';
import { QueryClientProvider ,QueryClient} from "react-query";
import CustomContexts from "~/contexts";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomContexts>
        <Root/>
      </CustomContexts>
    </QueryClientProvider>
  );
};

export default App;
