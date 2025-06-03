import DataGrid from "devextreme/ui/data_grid";
const data = "https://js.devexpress.com/Demos/NetCore/api/DataGridWebApi/Orders";
const $dataGrid = document.getElementById('dataGrid');
if ($dataGrid) {
    new DataGrid($dataGrid, {
        dataSource: data,
        keyExpr: "OrderID",
    });
}
