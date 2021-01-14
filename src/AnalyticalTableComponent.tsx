import React from 'react';
import {Button, FlexBox, TextAlign} from "@ui5/webcomponents-react";
import {AnalyticalTable} from "./AnalyticalTable";
import generateData from "./AnalyticalTable/demo/generateData";
import '@ui5/webcomponents-icons/dist/delete';
import '@ui5/webcomponents-icons/dist/edit';
import '@ui5/webcomponents-icons/dist/settings';

const data = generateData(1000)

const columns = [
    {
        Header: 'Name',
        headerTooltip: 'Full Name', // A more extensive description!
        accessor: 'name' // String-based value accessors!
    },
    {
        Header: 'Age',
        accessor: 'age',
        hAlign: TextAlign.End,
        disableGroupBy: true,
        disableSortBy: false,
        disableFilters: false,
        className: 'superCustomClass'
    },
    {
        Header: 'Friend Name',
        accessor: 'friend.name'
    },
    {
        Header: () => <span>Friend Age</span>,
        accessor: 'friend.age',
        hAlign: TextAlign.End,
        filter: (rows, accessor, filterValue) => {
            if (filterValue === 'all') {
                return rows;
            }
            if (filterValue === 'true') {
                return rows.filter((row) => row.values[accessor] >= 21);
            }
            return rows.filter((row) => row.values[accessor] < 21);
        },
        Filter: ({column}) => {
            return (
                <select
                    onChange={(event) => column.setFilter(event.target.value)}
                    style={{width: '100%'}}
                    value={column.filterValue ? column.filterValue : 'all'}
                >
                    <option value="all">Show All</option>
                    <option value="true">Can Drink</option>
                    <option value="false">Can't Drink</option>
                </select>
            );
        }
    },
    {
        id: 'actions',
        Header: 'Actions',
        accessor: '.',
        width: 100,
        canResize: false,
        Cell: ({cell, row}) => {
            // console.log('This is your row data', row.original);
            return (
                <FlexBox>
                    <Button icon="edit"/>
                    <Button icon="delete"/>
                </FlexBox>
            );
        }
    }
]

export const AnalyticalTableComponent = () => {
    return (
        <AnalyticalTable data={data} columns={columns}/>
    );
}
