import * as Dialog from '@radix-ui/react-dialog';
import { AppBar } from '../../AppBar';
import { Heading } from '../../Heading';
import { ArrowRightIcon } from '../../Icons/ArrowIcon/ArrowRightIcon';
import { HandbagsIconUnfilled } from '../../Icons/HandbagsIconUnfilled';
import { CartProduct } from '../CartProduct';
import { CloseButton, Content, EmptyCart, Overlay } from './styles';
import LeatherCoachBag from '../../../assets/Product/leather-coach-bag.png'
import { Separator } from '../../Separator';
import { OrderSummary } from '../OrderSummary';
import { useCart } from '../../../hooks/useCart';
import { Text } from '../../Text';
import ProductAlert from '../../../assets/Alerts/alert-product.png'

export function ModalCart() {
    const { cartItems } = useCart();
    const cartQuantity = cartItems.length
    
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
            
            
            { cartQuantity <= 0 ? (
                <EmptyCart>
                <img src={ProductAlert} alt="Empty Cart" />
                <Heading title='bold' size='large' color='dark'> Uh Oh....! </Heading>
                <Text size='medium' color='dark' title='regular'> You haven’t added any any items. Start shopping to make your bag bloom </Text> 
                </EmptyCart>
                )
                :
                (
                  
                  cartItems.map(cartItem => (
                        <CartProduct 
                        key={cartItem._id}
                        src={LeatherCoachBag} 
                        withButton={false} 
                        productModel={cartItem.model}
                        productName={cartItem.name}
                        productValue={cartItem.price}
                        
                        withQuantity={false} 
                        withPrice={false} 
                        withStepper={true} 
                        /> 
                    ))
                    && (
                 <>
                <Separator />
                
                <OrderSummary
                    withHeader={false}
                    withOrderPageText={false}
                    withOrderCart={true}
                    withOrderPageButtons={false}
                    withOrderHeaderDetails={false}
                    withCartProduct={false}
                />
                </>
                    )
                )
             }

         
        
                   
            
          
            </div>
        </Content>
        </Dialog.Portal>
    </Dialog.Root>
    )
}