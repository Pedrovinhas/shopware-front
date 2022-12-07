import * as Dialog from '@radix-ui/react-dialog';
import { AppBar } from '../../AppBar';
import { Heading } from '../../Heading';
import { ArrowRightIcon } from '../../Icons/ArrowIcon/ArrowRightIcon';
import { HandbagsIconUnfilled } from '../../Icons/HandbagsIconUnfilled';
import { CartProduct } from '../CartProduct';
import { CloseButton, Content, Overlay } from './styles';
import LeatherCoachBag from '../../../assets/Product/leather-coach-bag.png'
import { Separator } from '../../Separator';
import { OrderSummary } from '../OrderSummary';
import { TextField } from '../../FormControl';

export function ModalCart() {
    return (
        <Dialog.Root >
    
        <Dialog.Trigger asChild>
            <HandbagsIconUnfilled isFilled={false}/>
        </Dialog.Trigger>
        <Dialog.Portal>
        <Overlay/>
        <Content>

            <div className="modal__container">

            <CloseButton>
            <AppBar>
                <ArrowRightIcon isFilled />
                <Heading size='small' color='primary' title='regular'>
                    Back
                </Heading>
            </AppBar>
            </CloseButton>
           {/* <p> Your cart is empty :/ </p> */}
           <CartProduct 
                withQuantity={false} 
                withPrice={false} 
                withStepper={true} 
                src={LeatherCoachBag} 
                withButton={false} 
                productModel='Coach' 
                productName='Leather Coach Bag' 
                productValue='$54.69'
            />

            <CartProduct 
                withQuantity={false} 
                withPrice={false} 
                withStepper={true} 
                src={LeatherCoachBag} 
                withButton={false} 
                productModel='Coach' 
                productName='Leather Coach Bag' 
                productValue='$54.69'
            />

            <Separator />
            
            <OrderSummary
                withHeader={false}
                withOrderPageText={false}
                withOrderCart={true}
                withOrderPageButtons={false}
            />
          
            </div>
        </Content>
        </Dialog.Portal>
    </Dialog.Root>
    )
}