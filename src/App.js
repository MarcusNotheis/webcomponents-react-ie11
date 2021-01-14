import React from 'react';
import {ThemeProvider} from "@ui5/webcomponents-react";
import {AnalyticalTableComponent} from "./AnalyticalTableComponent";


function App() {
    return (
        <ThemeProvider>
            <AnalyticalTableComponent />
        </ThemeProvider>
    );
}

export default App;
