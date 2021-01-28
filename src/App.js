import React from 'react';
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


function App() {
    return (
        <ThemeProvider>
            <GridComponent />
            {/*<Form columnsL={3} columnsXL={3} labelSpanXL={6} labelSpanL={6} columnsM={2} labelSpanM={6}>*/}
            {/*    <FormItem label="Evangelize the UI framework across the company">*/}
            {/*        <Text>4 days overdue - Cascaded</Text>*/}
            {/*    </FormItem>*/}
            {/*    <FormItem label="Get trained in development management direction">*/}
            {/*        <Text>Due Nov, 21</Text>*/}
            {/*    </FormItem>*/}
            {/*    <FormItem label="Mentor junior developers">*/}
            {/*        <Text>Due Dec, 31 - Cascaded</Text>*/}
            {/*    </FormItem>*/}
            {/*</Form>*/}
            {/*<AnalyticalTableComponent />*/}
           {/*<ObjectPageComponent />*/}
            {/*<DynamicPageComponent />*/}
        </ThemeProvider>
    );
}

export default App;
