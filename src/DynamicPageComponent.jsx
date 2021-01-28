import React from 'react';
import {
    Breadcrumbs, ButtonDesign,
    DynamicPage,
    DynamicPageHeader,
    DynamicPageTitle,
    Label,
    Link,
    ObjectStatus
} from "@ui5/webcomponents-react";
import {Button} from "@ui5/webcomponents-react/lib/Button";
import {Title} from "@ui5/webcomponents-react/lib/Title";
import {Badge} from "@ui5/webcomponents-react/lib/Badge";
import {ValueState} from "@ui5/webcomponents-react/lib/ValueState";
import {ProductsTable} from "./ProductsTable";

export const DynamicPageComponent = () => {

    return ( <DynamicPage
        style={ { maxHeight: '700px' } }
        title={
            <DynamicPageTitle
                actions={[
                    <Button key={'edit'} design={ButtonDesign.Emphasized}>
                        Edit
                    </Button>,
                    <Button key={'delete'} design={ButtonDesign.Transparent}>
                        Delete
                    </Button>,
                    <Button key={'copy'} design={ButtonDesign.Transparent}>
                        Copy
                    </Button>,
                    <Button key={'action'} icon="action" design={ButtonDesign.Transparent}></Button>
                ]}
                navigationActions={[
                    <Button key={'fullscreen'} icon="full-screen" design={ButtonDesign.Transparent} />,
                    <Button key={'exitFullscreen'} icon="exit-full-screen" design={ButtonDesign.Transparent} />,
                    <Button key={'decline'} icon="decline" design={ButtonDesign.Transparent} />
                ]}
                breadcrumbs={
                    <Breadcrumbs>
                        <Link>Home</Link>
                        <Link>Page 1</Link>
                        <Link>Page 2</Link>
                        <Link>Page 3</Link>
                        <Link>Page 4</Link>
                        <Link>Page 5</Link>
                    </Breadcrumbs>
                }
                heading={<Title>Header Title</Title>}
                subHeading={<Label>This is a subheading</Label>}
            >
                <Badge>Status: OK</Badge>
            </DynamicPageTitle>
        }
        header={
            <DynamicPageHeader>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Label>Location: Warehouse A</Label>
                    <Label>Halway: 23L</Label>
                    <Label>Rack: 34</Label>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2vw' }}>
                    <Label>Availability:</Label>
                    <ObjectStatus state={ValueState.Success}>In Stock</ObjectStatus>
                </div>
            </DynamicPageHeader>
        }
    >
        <ProductsTable />
    </DynamicPage>);
}