import { DataGrid } from "@mui/x-data-grid";

interface GridProps {
    cols: any;
    rows:any;
    pageSize?: number;
    rowsPerPageOptions?: number;
    checkboxSelection?:boolean;

}
const Grid = (props:GridProps) => {
    return (
        <DataGrid
            rows={props.rows}
            columns={props.cols}
            pageSize={props.pageSize}
            rowsPerPageOptions={[5]}
            checkboxSelection= {false}
        />
    )

}
export default Grid