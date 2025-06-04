import 'devextreme/data/odata/store';
import DataGrid from "devextreme/ui/data_grid";
const $odata = document.getElementById('oData');
if ($odata) {
    new DataGrid($odata, {
        showBorders: true,
        dataSource: {
            store: {
                type: 'odata',
                version: 2,
                url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
                key: 'Product_ID',
            },
            select: [
                'Product_ID',
                'Product_Name',
                'Product_Cost',
                'Product_Sale_Price',
                'Product_Retail_Price',
                'Product_Current_Inventory',
                'Product_Image',
            ],
            filter: ['Product_Current_Inventory', '>', 0],
        },
        columns: [
            'Product_ID', {
                dataField: 'Product_Name',
                width: 250,
            }, {
                caption: 'Cost',
                dataField: 'Product_Cost',
                dataType: 'number',
                format: 'currency',
            }, {
                dataField: 'Product_Sale_Price',
                caption: 'Sale Price',
                dataType: 'number',
                format: 'currency',
            }, {
                dataField: 'Product_Retail_Price',
                caption: 'Retail Price',
                dataType: 'number',
                format: 'currency',
            }, {
                dataField: 'Product_Current_Inventory',
                caption: 'Inventory',
            }, {
                caption: 'image',
                dataField: 'Product_Image',
                cellTemplate(container, options) {
                    const img = document.createElement('img');
                    img.src = `data:image/jpeg;base64,${options.data.Product_Image}`;
                    img.style.width = '60px';
                    img.style.height = 'auto';
                    container.appendChild(img);
                }
            }
        ],
    });
}
