import React from 'react';
import {Form} from "./FormComponents/Form";
import {FormItem} from "./FormComponents/FormItem";
import {Input} from "@ui5/webcomponents-react/lib/Input";
import {FormGroup} from "./FormComponents/FormGroup";
import {Select} from "@ui5/webcomponents-react/lib/Select";
import {Option} from "@ui5/webcomponents-react/lib/Option";
import {CheckBox} from "@ui5/webcomponents-react/lib/CheckBox";
import {InputType} from "@ui5/webcomponents-react/lib/InputType";
import {Label} from "@ui5/webcomponents-react/lib/Label";

const props = {
    title: 'Test Form',
    labelSpanS: 12,
    labelSpanM: 2,
    labelSpanL: 4,
    labelSpanXL: 4,
    columnsS: 1,
    columnsM: 1,
    columnsL: 1,
    columnsXL: 2
}

export const FormComponent = () => {

    return (<Form {...props} title={props.title}>
        <FormItem label={'Sole Form Item'}>
            <Input type={InputType.Text} />
        </FormItem>
        <FormGroup title={'Personal Data'}>
            <FormItem label={'Name'}>
                <Input type={InputType.Text} />
            </FormItem>
            <FormItem label={<Label>Address</Label>}>
                <Input type={InputType.Text} />
            </FormItem>
            <FormItem label={'Country'}>
                <Select>
                    <Option>Germany</Option>
                    <Option>France</Option>
                    <Option>Italy</Option>
                </Select>
            </FormItem>
            <FormItem label={'Home address'}>
                <CheckBox checked />
            </FormItem>
        </FormGroup>
        <FormGroup title={'Company Data'}>
            <FormItem label={'Company Name'}>
                <Input type={InputType.Text} />
            </FormItem>
            <FormItem label={'Company Address'}>
                <Input type={InputType.Text} />
            </FormItem>
            <FormItem label={'Company City'}>
                <Input type={InputType.Text} />
            </FormItem>
            <FormItem label={'Company Country'}>
                <Input type={InputType.Text} />
            </FormItem>
            <FormItem label={'Number of Employees'}>
                <Input type={InputType.Number} value={'5000'} disabled />
            </FormItem>
            <FormItem label={'Member of Partner Network'}>
                <CheckBox checked />
            </FormItem>
        </FormGroup>
        <FormGroup title={'Marketing Data'}>
            <FormItem label={'Email'}>
                <Input type={InputType.Email} />
            </FormItem>
            <FormItem label="Company Email">
                <Input type={InputType.Email} />
            </FormItem>
            <FormItem label="I want to receive the newsletter">
                <CheckBox />
            </FormItem>
        </FormGroup>
    </Form>)
}