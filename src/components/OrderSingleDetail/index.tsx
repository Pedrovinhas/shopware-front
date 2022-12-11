import { Tab } from '../Tabs/TabsDescription';
import { TabsContent, TabsList, TabsRoot } from '../OrderDetails/styles';
import { CartProduct } from '../Cart/CartProduct';
import LeatherCoachBag from '../../assets/Product/leather-coach-bag.png'
import { TableHeading } from '../TableHeading';
import { ItemsOrderedSection } from './styles';
import { CartDetails } from '../Cart/CartDetails';
import { OrderInformation } from './OrderInformation';

export function OrderSingleDetail() {
    return (
        <TabsRoot defaultValue="1" orientation="vertical">
            <TabsList aria-label="Description Products Tab">
                
                <Tab children='Items Ordered'value='1'/>

                <Tab children='Invoices' value='2'/>

                <Tab children='Order Shipment' value='3'/>

            </TabsList>
            <TabsContent value="1">

            <ItemsOrderedSection> 
                <TableHeading/>
                <div className="order__information">

                <CartProduct  
                    productModel="Coach" 
                    productName="Leather Coach Bag"
                    productQuantity="1"
                    src={LeatherCoachBag}
                    withButton={false}
                    withPrice={false}
                    withStepper={false}
                    withQuantity={false}
                />
                   <CartDetails
                    productValue="54.56"
                    withDetailsButton={false}
            />
                </div>

                <OrderInformation
                
                />
                    
             
            </ItemsOrderedSection>


            
             
            </TabsContent>
            <TabsContent value="2">
           
               
                
               
            </TabsContent>
            <TabsContent value="3">
          
             
               
            </TabsContent>
        </TabsRoot>
    )
}