import CustomStore from "devextreme/data/custom_store";
import DataGrid from "devextreme/ui/data_grid";
const $CustomStore = document.getElementById('custom-store');
function isNotEmpty(value) {
    return value !== undefined && value !== null && value !== '';
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
        columns: [
            {
                dataField: 'OrderNumber',
                dataType: 'number',
            }, {
                dataField: 'OrderDate',
                dataType: 'date',
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
            }
        ],
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
        loadPanel: {
            height: '100vh',
            width: '100%',
        }
    });
}
