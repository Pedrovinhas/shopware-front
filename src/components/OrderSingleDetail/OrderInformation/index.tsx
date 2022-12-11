import { Button } from "../../Button";
import { Separator } from "../../Separator";
import { Text } from "../../Text";
import { OrderInformationContainer } from "./styles";

export function OrderInformation() {
    return (
        <OrderInformationContainer>
            <div className="information__header">
                <Text size='extralarge' title="regular" color="dark">
                    Order Information
                </Text>
                <Separator/>
            </div>

            <section className="order__details">
                <div className="order__details-price">
                <Text color='lowEmphasis' size='large' title='medium'>
                            Order Details
                </Text>
                <div className="details__container">
                <div className="price__texts">
                    <Text color='lowEmphasis' size='large' title='medium'>
                            Sub Total
                        </Text>
                        <Text color='lowEmphasis' size='large' title='medium'>
                            Discount
                        </Text>
                        <Text color='lowEmphasis' size='large' title='medium'>
                            Delivery Fee
                        </Text>
                        <Text color='highEmphasis' size='large' title='regular'>
                            Grand Total
                        </Text>
                </div>
                <div className="price__values">
                 
                    <Text color='highEmphasis' size='large' title='regular'>
                      $119.69
                    </Text>
                    <Text color='highEmphasis' size='large' title='regular'>
                    -$13.40
                    </Text>
                    <Text color='highEmphasis' size='large' title='regular'>
                    -$0.00
                    </Text>
                    <Text color='highEmphasis' size='large' title='regular'>
                    $106.29
                    </Text>
                </div>
                </div>
                
                </div>

                <div className="order__details-payment">
                 <Text color='lowEmphasis' size='large' title='medium'>
                        Payment Details
                    </Text>

                    <Text color='highEmphasis' size='large' title='regular'>
                        Cash on Delivery
                    </Text>
                </div>
                <div className="order__details-address">
                <div className="address__text">
                    <Text color='lowEmphasis' size='large' title='medium'>
                    Address Details
                    </Text>
                        <Text color='highEmphasis' size='large' title='regular'>
                            Vincent Lobo
                        </Text>
                        <Text color='highEmphasis' size='large' title='regular'>
                        3068  Woodlawn Drive
                        </Text>
                        <Text color='highEmphasis' size='large' title='regular'>
                        Milwaukee
                        </Text>
                        <Text color='highEmphasis' size='large' title='regular'>
                        414-672-5388
                        </Text>
                </div>

                    <div className="address__home">
                        <Button size="small" variant="secondary">
                            Home
                        </Button>
                    </div>
                </div>
            </section>

            <div className="order__buttons">
            <Button size="smallTwo" variant="primary">
                Reorder
            </Button>

            <Button size="smallTwo" variant="outline">
                Add Rating
            </Button>
            </div>
        </OrderInformationContainer>
    )
}