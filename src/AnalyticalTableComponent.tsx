import React from 'react';
import {Button, FlexBox, TextAlign} from "@ui5/webcomponents-react";
import {AnalyticalTable} from "./AnalyticalTable";
import generateData from "./AnalyticalTable/demo/generateData";
import '@ui5/webcomponents-icons/dist/delete';
import '@ui5/webcomponents-icons/dist/edit';
import '@ui5/webcomponents-icons/dist/settings';
import {TableScaleWidthMode} from "@ui5/webcomponents-react/lib/TableScaleWidthMode";
import {TableSelectionMode} from "@ui5/webcomponents-react/lib/TableSelectionMode";
import {TableSelectionBehavior} from "@ui5/webcomponents-react/lib/TableSelectionBehavior";
import {TableVisibleRowCountMode} from "@ui5/webcomponents-react/lib/TableVisibleRowCountMode";
import {DefaultNoDataComponent} from "./AnalyticalTable/defaults/NoDataComponent";
import {DefaultLoadingComponent} from "./AnalyticalTable/defaults/LoadingComponent";

const data = generateData(10, true)

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

const args = {
    // title: 'Table Title',
    // sortable: true,
    // filterable: true,
    // visibleRows: 15,
    // minRows: 5,
    // groupable: true,
    // groupBy: [],
    // rowHeight: 44,
    // selectedRowIds: { 3: true },
    // withRowHighlight: true,
    // highlightField: 'status',
    // infiniteScroll: true,
    // infiniteScrollThreshold: 20,
    // subRowsKey: 'subRows',
    isTreeTable: true,
    // NoDataComponent: DefaultNoDataComponent,
    // LoadingComponent: DefaultLoadingComponent,
    // scaleWidthMode: TableScaleWidthMode.Default,
    // selectionMode: TableSelectionMode.MULTI_SELECT,
    // selectionBehavior: TableSelectionBehavior.ROW_SELECTOR,
    // overscanCountHorizontal: 5,
    // visibleRowCountMode: TableVisibleRowCountMode.FIXED
}

export const AnalyticalTableComponent = () => {
    return (
        <AnalyticalTable data={data} columns={columns} {...args}/>
    );
}
