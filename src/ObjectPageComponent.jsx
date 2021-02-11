import React from 'react';
import {
    Label,
    Link,
    ProgressIndicator, ThemeProvider
} from "@ui5/webcomponents-react";
import {FlexBox} from "@ui5/webcomponents-react/lib/FlexBox";
import {FlexBoxDirection} from "@ui5/webcomponents-react/lib/FlexBoxDirection";
import {ValueState} from "@ui5/webcomponents-react/lib/ValueState";
import {ObjectPage} from "./ObjPage/ObjectPage";
import {ObjectPageSection} from "./ObjPage/ObjectPageSection";
import {ObjectPageSubSection} from "./ObjPage/ObjectPageSubSection";
import {Breadcrumbs} from "@ui5/webcomponents-react/lib/Breadcrumbs";
import {Button} from "@ui5/webcomponents-react/lib/Button";
import {ButtonDesign} from "@ui5/webcomponents-react/lib/ButtonDesign";
import {ObjectStatus} from "@ui5/webcomponents-react/lib/ObjectStatus";
import {Form} from "@ui5/webcomponents-react/lib/Form";
import {FormItem} from "@ui5/webcomponents-react/lib/FormItem";
import {Text} from "@ui5/webcomponents-react/lib/Text";

const props = {
    mode: "Default",
    title: 'Denise Smith',
    subTitle: 'Senior UI Developer',
    showHideHeaderButton: true,
    // selectedSectionId: 'goals',
    headerContentPinnable: true,
    // imageShapeCircle: true,
    headerContent: (
        <>
            <FlexBox direction={FlexBoxDirection.Column}>
                <Link>+33 6 4512 5158</Link>
                <Link href="mailto:ui5-webcomponents-react@sap.com">DeniseSmith@sap.com</Link>
                <Link href="https://github.com/SAP/ui5-webcomponents-react">
                    https://github.com/SAP/ui5-webcomponents-react
                </Link>
            </FlexBox>
            <FlexBox direction={FlexBoxDirection.Column} style={{ width: '200px' }}>
                <Label>Achieved Goals</Label>
                <ProgressIndicator value={80} valueState={ValueState.Success} />
            </FlexBox>
            <FlexBox direction={FlexBoxDirection.Column}>
                <Label>San Jose</Label>
                <Label>California, USA</Label>
            </FlexBox>
        </>
    ),
    breadcrumbs: (
        <Breadcrumbs currentLocationText="Employee Details">
            <Link>Manager Cockpit</Link>
            <Link>My Team</Link>
        </Breadcrumbs>
    ),
    headerActions: [
        <Button key="1" design={ButtonDesign.Emphasized}>
            Primary Action
        </Button>,
        <Button key="2">Action</Button>
    ],
    keyInfos: <ObjectStatus state={ValueState.Success}>employed</ObjectStatus>,
    style: { height: '700px' },
}

export const ObjectPageComponent = () => {

    return (  <ObjectPage {...props} >
        <ObjectPageSection title="Goals" id="goals">
        </ObjectPageSection>
        <ObjectPageSection title="Personal" id="personal">
            <ObjectPageSubSection title="Connect" id="personal-connect">
            </ObjectPageSubSection>
            <ObjectPageSubSection title="Payment Information" id="personal-payment-information">
            </ObjectPageSubSection>
        </ObjectPageSection>
        <ObjectPageSection title="Employment" id="employment">
            <ObjectPageSubSection title="Job Information" id="employment-job-information">
            </ObjectPageSubSection>
            <ObjectPageSubSection title="Employee Details" id="employment-employee-details">
            </ObjectPageSubSection>
            <ObjectPageSubSection title="Job Relationship" id="employment-job-relationship">
            </ObjectPageSubSection>
        </ObjectPageSection>
    </ObjectPage>);
}