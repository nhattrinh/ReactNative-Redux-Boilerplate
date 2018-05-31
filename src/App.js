import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// redux-related imports
import reducers from './reducers';

// import components
import { Header } from './common';
import LibraryList from './LibraryList';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{flex: 1}}>
                <Header headerText='Tech Stack' />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;