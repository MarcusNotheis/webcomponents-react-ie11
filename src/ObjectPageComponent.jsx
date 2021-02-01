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
                CONTENT 1
            <br />
            <br />
            <br />
            <br />
            CONTENT 1.1
            <br />
            <br />
            <br />
            <br />
            CONTENT 1.2
            <br />
            <br />
            <br />
            <br />
            CONTENT 1.3
            <br />
            <br />
            <br />
            <br />
            CONTENT 1.4
        </ObjectPageSection>
        <ObjectPageSection title="Personal" id="personal">
            <ObjectPageSubSection title="Connect" id="personal-connect">
                {/*<Form columnsXL={4} columnsL={4}>*/}
                {/*    <FormGroup title="Phone Numbers">*/}
                {/*        <FormItem label="Home">*/}
                {/*            <Text>+1 234-567-8901</Text>*/}
                {/*        </FormItem>*/}
                {/*        <FormItem label="">*/}
                {/*            <Text>+1 234-567-5555</Text>*/}
                {/*        </FormItem>*/}
                {/*    </FormGroup>*/}
                {/*    <FormGroup title="Social Accounts">*/}
                {/*        <FormItem label="LinkedIn">*/}
                {/*            <Text>/DeniseSmith</Text>*/}
                {/*        </FormItem>*/}
                {/*        <FormItem label="Twitter">*/}
                {/*            <Text>@DeniseSmith</Text>*/}
                {/*        </FormItem>*/}
                {/*    </FormGroup>*/}
                {/*    <FormGroup title="Addresses">*/}
                {/*        <FormItem label="Home Address">*/}
                {/*            <Text>2096 Mission Street</Text>*/}
                {/*        </FormItem>*/}
                {/*        <FormItem label="Mailing Address">*/}
                {/*            <Text>PO Box 32114</Text>*/}
                {/*        </FormItem>*/}
                {/*    </FormGroup>*/}
                {/*    <FormGroup title="Mailing Address">*/}
                {/*        <FormItem label="Work">*/}
                {/*            <Text>DeniseSmith@sap.com</Text>*/}
                {/*        </FormItem>*/}
                {/*    </FormGroup>*/}
                {/*</Form>*/}
            </ObjectPageSubSection>
            <ObjectPageSubSection title="Payment Information" id="personal-payment-information">
                {/*<Form columnsXL={4} columnsL={4}>*/}
                {/*    <FormGroup title="Salary">*/}
                {/*        <FormItem label="Bank Transfer">*/}
                {/*            <Text>Money Bank, Inc.</Text>*/}
                {/*        </FormItem>*/}
                {/*    </FormGroup>*/}
                {/*    <FormGroup title="Payment method for Expenses">*/}
                {/*        <FormItem label="Extra Travel Expenses">*/}
                {/*            <Text>Cash 100 USD</Text>*/}
                {/*        </FormItem>*/}
                {/*    </FormGroup>*/}
                {/*</Form>*/}
            </ObjectPageSubSection>
        </ObjectPageSection>
        <ObjectPageSection title="Employment" id="employment">
            <ObjectPageSubSection title="Job Information" id="employment-job-information">
                {/*<Form columnsXL={4} columnsL={4}>*/}
                {/*    <FormItem label="Job Classification">*/}
                {/*        <FlexBox direction={FlexBoxDirection.Column}>*/}
                {/*            <Text>Senior UI Developer</Text>*/}
                {/*            <Label>(UIDEV-SR)</Label>*/}
                {/*        </FlexBox>*/}
                {/*    </FormItem>*/}
                {/*    <FormItem label="Job Title">*/}
                {/*        <Text>Developer</Text>*/}
                {/*    </FormItem>*/}
                {/*    <FormItem label="Employee Class">*/}
                {/*        <Text>Employee</Text>*/}
                {/*    </FormItem>*/}
                {/*    <FormItem label="Manager">*/}
                {/*        <FlexBox direction={FlexBoxDirection.Column}>*/}
                {/*            <Text>Dan Smith</Text>*/}
                {/*            <Label>Development Manager</Label>*/}
                {/*        </FlexBox>*/}
                {/*    </FormItem>*/}
                {/*    <FormItem label="Pay Grade">*/}
                {/*        <Text>Salary Grade 18 (GR-14)</Text>*/}
                {/*    </FormItem>*/}
                {/*    <FormItem label="FTE">*/}
                {/*        <Text>1</Text>*/}
                {/*    </FormItem>*/}
                {/*</Form>*/}
            </ObjectPageSubSection>
            <ObjectPageSubSection title="Employee Details" id="employment-employee-details">
                {/*<Form columnsXL={4} columnsL={4}>*/}
                {/*    <FormItem label="Start Date">*/}
                {/*        <Text>Jan 01, 2018</Text>*/}
                {/*    </FormItem>*/}
                {/*    <FormItem label="End Date">*/}
                {/*        <Text>Dec 31, 9999</Text>*/}
                {/*    </FormItem>*/}
                {/*    <FormItem label="Payroll Start Date">*/}
                {/*        <Text>Jan 01, 2018</Text>*/}
                {/*    </FormItem>*/}
                {/*    <FormItem label="Benefits Start Date">*/}
                {/*        <Text>Jul 01, 2018</Text>*/}
                {/*    </FormItem>*/}
                {/*    <FormItem label="Company Car Eligibility">*/}
                {/*        <Text>Jan 01, 2021</Text>*/}
                {/*    </FormItem>*/}
                {/*    <FormItem label="Equity Start Date">*/}
                {/*        <Text>Jul 01, 2018</Text>*/}
                {/*    </FormItem>*/}
                {/*</Form>*/}
            </ObjectPageSubSection>
            <ObjectPageSubSection title="Job Relationship" id="employment-job-relationship">
                {/*<Form columnsXL={4} columnsL={4}>*/}
                {/*    <FormItem label="Manager">*/}
                {/*        <Text>John Doe</Text>*/}
                {/*    </FormItem>*/}
                {/*    <FormItem label="Scrum Master">*/}
                {/*        <Text>Michael Adams</Text>*/}
                {/*    </FormItem>*/}
                {/*    <FormItem label="Product Owner">*/}
                {/*        <Text>John Miller</Text>*/}
                {/*    </FormItem>*/}
                {/*</Form>*/}
            </ObjectPageSubSection>
        </ObjectPageSection></ObjectPage>);
}