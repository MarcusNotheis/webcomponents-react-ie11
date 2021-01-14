import React from 'react';
import {ShellBar} from '@ui5/webcomponents-react/lib/ShellBar'
import {ThemeProvider} from "@ui5/webcomponents-react";
import {AnalyticalTableComponent} from "./AnalyticalTableComponent";


function App() {
    return (
        <ThemeProvider>
            <ShellBar primaryTitle='Hallo 123du '/>
            <AnalyticalTableComponent />
        </ThemeProvider>
    );
}

export default App;
