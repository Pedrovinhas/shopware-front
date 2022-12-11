import { Tab } from '../Tabs/TabsDescription';
import { OrderHeader } from './OrderHeader';
import { OrderList } from './OrderList';
import { TabsContent, TabsList, TabsRoot } from './styles';


export function OrderDetails() {
    return (
        <TabsRoot defaultValue="1" orientation="vertical">
            <TabsList aria-label="Description Products Tab">
                
                <Tab children='Paid'value='1'/>

                <Tab children='Processing' value='2'/>

                <Tab children='Cancelled' value='3'/>

            </TabsList>
            <TabsContent value="1">

                <OrderHeader/>
                <OrderList
                 orderId='#874522648'
                 orderDate='September 5, 2020'
                 orderPrice='$218.50'
                 orderStatus='Paid'
                />
                {/* { Vou precisar fazer um map com filtro das Orders que tiverem PAID quando puxar da API} */}
            </TabsContent>
            <TabsContent value="2">
            <OrderHeader/>
                <OrderList
                    orderId='#874522648'
                    orderDate='September 5, 2020'
                    orderPrice='$218.50'
                    orderStatus='Processing'
                />
                {/* { Vou precisar fazer um map com filtro das Orders que tiverem PROCESSING quando puxar da API} */}
               
            </TabsContent>
            <TabsContent value="3">
            <OrderHeader/>
                <OrderList
                    orderId='#874522648'
                    orderDate='September 5, 2020'
                    orderPrice='$218.50'
                    orderStatus='Cancelled'
                />
                {/* { Vou precisar fazer um map com filtro das Orders que tiverem PROCESSING quando puxar da API} */}
               
            </TabsContent>
        </TabsRoot>
    )
}
