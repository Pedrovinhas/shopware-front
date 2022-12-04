import { Separator } from "../Separator";
import { Text } from "../Text";
import { Table, TableContainer } from "./styles";

export function TableHeading() {
    return (
        <Table>
        <TableContainer>
        <div className="table__name">
            <Text color='lowEmphasis' title="medium" size='large'>
                Product Name
            </Text>
        </div>

        <div className="table__details">
        <Text color='lowEmphasis' title="medium" size='large'>
                Price
            </Text>
            <Text color='lowEmphasis' title="medium" size='large'>
                Qty
            </Text>
            <Text color='lowEmphasis' title="medium" size='large'>
               Subtotal
            </Text>
        </div>

      
        
        </TableContainer>
        <Separator/>
        </Table>
    )
}