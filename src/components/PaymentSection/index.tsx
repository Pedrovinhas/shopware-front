import * as RadioGroup from '@radix-ui/react-radio-group';
import { PaymentContainer, PaymentDetails, PaymentMethodForm } from './styles';
import AmazonPay from '../../assets/Payments/amazon-pay.png'
import ApplePay from '../../assets/Payments/apple-pay.svg'
import CreditCard from '../../assets/Payments/credit-card.png'
import Upi from '../../assets/Payments/upi.svg'
import GooglePlay from '../../assets/Payments/google-play.png'
import PhonePe from '../../assets/Payments/phone-pe.svg'
import Paytm from '../../assets/Payments/paytm.svg'
import { Text } from '../Text';
import { Radio } from '../Radio';
import { CheckboxButton } from '../CheckboxButton';
import { CheckIcon } from '../Icons/CheckIcon';


export function PaymentSection() {
    return (
        <PaymentContainer>
            <PaymentMethodForm>
                <RadioGroup.Root defaultValue='Upi' className='payment__root'>
                       <div className="radio__pay">
                            <Radio value='Upi'/>
                            <label className='radio__label' htmlFor='r1'>
                                        <img src={Upi} alt="Upi pay method" />
                                        <Text color='highEmphasis' size='large' title='medium'> UPI </Text>
                            </label>
                        </div>

                        <div className="radio__pay">
                            <Radio value='Credit/Debit Card'/>
                            <label className='radio__label'>
                                <img src={CreditCard} alt="Credit Card pay method" className='img__credit'/>
                                <Text color='highEmphasis' size='large' title='medium'> Credit/Debit Card</Text>
                            </label>
                        </div>

                        <div className="radio__pay">
                        <Radio value='Apple Pay'/>
                            <label className='radio__label'>
                                <img src={ApplePay} alt="Credit Card pay method" className='img__apple' />
                                <Text color='highEmphasis' size='large' title='medium'> Apple Pay</Text>
                            </label>
                        </div>

                        <div className="radio__pay">
                        <Radio value='Amazon Pay'/>
                            <label className='radio__label'>
                                <img src={AmazonPay} alt="Credit Card pay method" className='img__amazon'/>
                                <Text color='highEmphasis' size='large' title='medium'> Amazon Pay </Text>
                            </label>
                        </div>
                </RadioGroup.Root>
            </PaymentMethodForm>
            <PaymentDetails>
            <RadioGroup.Root defaultValue='Google Play' className='details__root'>
                <div className="details__pay">
                            <Radio value='Google Play'/>
                            <label className='radio-details__label'>
                                <div className="pay__brand">
                                    <span className='brand__box'>
                                        <img src={GooglePlay} alt="Google Play Details" />
                                    </span>
                                    <Text color='highEmphasis' size='large' title='medium'> Google Play </Text>
                                </div>
                                <div className="pay__information">
                                    <div className="pay__input-div">
                                        <input className='input__pay' placeholder='Enter your UPI Id'/>
                                        <Text size='small' title='medium' color='lightText'> @Eg: 1234567890@ybl </Text>
                                    </div>
                                    <div className="pay__save">
                                        <CheckboxButton icon={<CheckIcon isFilled={false}/>} text/>
                                        <Text size='medium' title='medium' color='lightText'> Save this for future transactions </Text>
                                    </div>
                                </div>
                            </label>
                            
                </div>
                <div className="details__pay">
                            <Radio value='Phone Pe'/>
                            <label className='radio-details__label'>
                                <div className="pay__brand">
                                    <span className='brand__box'>
                                        <img src={PhonePe} alt="Phone Pe Details" />
                                    </span>
                                    <Text color='highEmphasis' size='large' title='medium'> Phone Pe </Text>
                                </div>
                                <div className="pay__information">
                                    <div className="pay__input-div">
                                        <input className='input__pay' placeholder='Enter your UPI Id'/>
                                        <Text size='small' title='medium' color='lightText'> @Eg: 1234567890@ybl </Text>
                                    </div>
                                    <div className="pay__save">
                                        <CheckboxButton icon={<CheckIcon isFilled={false}/>} text/>
                                        <Text size='medium' title='medium' color='lightText'> Save this for future transactions </Text>
                                    </div>
                                </div>
                            </label>
                            
                </div>
                <div className="details__pay">
                            <Radio value='Paytm'/>
                            <label className='radio-details__label'>
                                <div className="pay__brand">
                                    <span className='brand__box'>
                                        <img src={Paytm} alt="Phone Pe Details" />
                                    </span>
                                    <Text color='highEmphasis' size='large' title='medium'>Paytm</Text>
                                </div>
                                <div className="pay__information">
                                    <div className="pay__input-div">
                                        <input className='input__pay' placeholder='Enter your UPI Id'/>
                                        <Text size='small' title='medium' color='lightText'> @Eg: 1234567890@ybl </Text>
                                    </div>
                                    <div className="pay__save">
                                        <CheckboxButton icon={<CheckIcon isFilled={false}/>} text/>
                                        <Text size='medium' title='medium' color='lightText'> Save this for future transactions </Text>
                                    </div>
                                </div>
                            </label>
                            
                </div>
            
                       
                </RadioGroup.Root>
            </PaymentDetails>
        </PaymentContainer>
    )
}