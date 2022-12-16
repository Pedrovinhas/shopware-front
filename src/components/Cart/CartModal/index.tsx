import * as Dialog from '@radix-ui/react-dialog';
import { AppBar } from '../../AppBar';
import { Heading } from '../../Heading';
import { ArrowRightIcon } from '../../Icons/ArrowIcon/ArrowRightIcon';
import { HandbagsIconUnfilled } from '../../Icons/HandbagsIconUnfilled';
import { CartProduct } from '../CartProduct';
import { CloseButton, Content, EmptyCart, Overlay } from './styles';
import { Separator } from '../../Separator';
import { OrderSummary } from '../OrderSummary';
import { useCart } from '../../../hooks/useCart';
import { Text } from '../../Text';
import ProductAlert from '../../../assets/Alerts/alert-product.png'
import { ArrowLeftCorrectIcon } from '../../Icons/ArrowIcon/ArrowRightCorrectIcon';

export function ModalCart() {
    const imageURL = 'http://localhost:3003/uploads/'
    const { cartItems, removeCartItem, cartTotal } = useCart();
    const cartQuantity = cartItems.length
    console.log(cartItems)


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
                <ArrowLeftCorrectIcon isFilled/>
                <Heading size='small' color='primary' title='regular'>
                    Back
                </Heading>
            </AppBar>
            </CloseButton>
            
            <>
            { cartQuantity <= 0 ? (
                <EmptyCart>
                <img src={ProductAlert} alt="Empty Cart" />
                <Heading title='bold' size='large' color='dark'> Uh Oh....! </Heading>
                <Text size='medium' color='dark' title='regular'> You haven’t added any any items. Start shopping to make your bag bloom </Text> 
                </EmptyCart>
                )
                :
                (
                <div>
                    {
                  cartItems.map(cartItem => (
                        <CartProduct 
                        key={cartItem._id}
                        src={imageURL + cartItem.imagePath == imageURL ?  cartItem.imageUrl : imageURL + cartItem.imagePath } 
                        withButton={false} 
                        productModel={cartItem.model}
                        productName={cartItem.name}
                        productValue={cartItem.price}
                        onClick={() => removeCartItem(cartItem._id!)}
                        
                        withQuantity={false} 
                        withPrice={false} 
                        withStepper={true} 
                        /> 
                    ))}
                    <Separator/>
                    <OrderSummary
                    withHeader={false}
                    withOrderPageText={false}
                    withOrderCart={true}
                    withOrderPageButtons={false}
                    withOrderHeaderDetails={false}
                    withCartProduct={false}

                    tax={2.95}
                    discount={3.4}
                    cartSubtotal={cartTotal}
                />
                    </div>
                )
             }

         
        
    </>
            
          
            </div>
        </Content>
        </Dialog.Portal>
    </Dialog.Root>
    )
}