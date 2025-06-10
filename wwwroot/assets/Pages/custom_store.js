import CustomStore from "devextreme/data/custom_store";
import DataGrid from "devextreme/ui/data_grid";
const $CustomStore = document.getElementById('custom-store');
function isNotEmpty(value) {
    return value !== undefined && value !== null && value !== '';
}
function getOrderDay(rowData) {
    return (new Date(rowData.OrderDate)).getDay();
}
const store = new CustomStore({
    key: 'OrderNumber',
    async load(loadOptions) {
        const paramNames = [
            'skip', 'take', 'requireTotalCount', 'requireGroupCount',
            'sort', 'filter', 'totalSummary', 'group', 'groupSummary',
        ];
        const queryString = paramNames
            .filter((paramName) => isNotEmpty(loadOptions[paramName]))
            .map((paramName) => `${paramName}=${JSON.stringify(loadOptions[paramName])}`)
            .join('&');
        try {
            const response = await fetch(`https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/orders?${queryString}`);
            const result = await response.json();
            return {
                data: result.data,
                totalCount: result.totalCount,
                summary: result.summary,
                groupCount: result.groupCount,
            };
        }
        catch (err) {
            throw new Error('Data Loading Error');
        }
    },
});
if ($CustomStore) {
    new DataGrid($CustomStore, {
        dataSource: store,
        paging: {
            pageSize: 12,
        },
        pager: {
            label: 'Pages',
            infoText: 'Pages',
            showPageSizeSelector: true,
            allowedPageSizes: [12, 4, 15, 2],
            displayMode: 'compact',
            showNavigationButtons: false,
        },
        filterRow: {
            visible: true,
            applyFilter: 'auto',
        },
        searchPanel: {
            visible: true,
            width: 240,
            placeholder: 'Search...',
        },
        headerFilter: {
            visible: true,
        },
        columns: [
            {
                dataField: 'OrderNumber',
                dataType: 'number',
                headerFilter: {
                    groupInterval: 10000,
                },
            }, {
                dataField: 'OrderDate',
                dataType: 'date',
                calculateFilterExpression(value, selectedFilterOperations, target) {
                    if (target === 'headerFilter' && value === 'weekends') {
                        return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
                    }
                    if (typeof this.defaultCalculateFilterExpression === 'function') {
                        return this.defaultCalculateFilterExpression(value, selectedFilterOperations, target);
                    }
                    return '';
                },
                headerFilter: {
                    dataSource(data) {
                        if (data.dataSource) {
                            data.dataSource.postProcess = function (results) {
                                results.push({
                                    text: 'Weekends',
                                    value: 'weekends',
                                });
                                return results;
                            };
                        }
                    },
                },
            }, {
                dataField: 'StoreCity',
                dataType: 'string',
            }, {
                dataField: 'Employee',
                dataType: 'string',
            }, {
                dataField: 'SaleAmount',
                dataType: 'number',
                format: 'currency',
                editorOptions: {
                    format: 'currency',
                    showClearButton: true,
                    inputAttr: {
                        'aria-label': 'Filter cell',
                    },
                },
                headerFilter: {
                    dataSource: [{
                            text: 'Less than $3000',
                            value: ['SaleAmount', '<', 3000],
                        }, {
                            text: '$3000 - $5000',
                            value: [['SaleAmount', '>=', 3000], ['SaleAmount', '<', 5000]],
                        }, {
                            text: '$5000 - $10000',
                            value: [['SaleAmount', '>=', 5000], ['SaleAmount', '<', 10000]],
                        }, {
                            text: '$10000 - $20000',
                            value: [['SaleAmount', '>=', 10000], ['SaleAmount', '<', 20000]],
                        }, {
                            text: 'Greater than $20000',
                            value: ['SaleAmount', '>=', 20000],
                        }],
                },
            }
        ],
    });
}
