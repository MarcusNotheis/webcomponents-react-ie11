import React, {useEffect} from 'react';
import {
    Breadcrumbs, ButtonDesign, Form, FormGroup, FormItem,
    Label,
    Link,
    ObjectPageMode, ObjectPageSection, ObjectPageSubSection,
    ObjectStatus,
    ProgressIndicator,
    ThemeProvider
} from "@ui5/webcomponents-react";
import {AnalyticalTableComponent} from "./AnalyticalTableComponent";
import {ObjectPage} from "@ui5/webcomponents-react";
import {FlexBoxDirection} from "@ui5/webcomponents-react/lib/FlexBoxDirection";
import {ValueState} from "@ui5/webcomponents-react/lib/ValueState";
import {FlexBox} from "@ui5/webcomponents-react/lib/FlexBox";
import {Button} from "@ui5/webcomponents-react/lib/Button";
import {Text} from "@ui5/webcomponents-react/lib/Text";
import { ObjectPageComponent} from "./ObjectPageComponent";
import {DynamicPageComponent} from "./DynamicPageComponent";
import {GridComponent} from "./GridComponents";
import {FormComponent} from "./FormComponent";
import cssVars from 'css-vars-ponyfill';


function App() {
    // useEffect(() => {
    //        cssVars({
    //             rootElement: document.head,
    //             include: 'style[data-ui5-webcomponents-react-sizes],style[data-jss],style,link',
    //             watch: true,
    //             // silent: true
    //         });
    // }, []);
    return (
        <ThemeProvider>
            <FormComponent />
            {/*<GridComponent />*/}
            {/*<AnalyticalTableComponent />*/}
           {/*<ObjectPageComponent />*/}
            {/*<DynamicPageComponent />*/}
        </ThemeProvider>
    );
}

export default App;
