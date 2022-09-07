import {Modal} from 'antd'
const OrderModal=({session,orderedBy,showModal,setShowModal})=>{
    return (
        <Modal visible={showModal} title="Order Details" onCancel={()=>setShowModal(!showModal)}>

<p>Payment Intent: {session.payment_intent}</p>
<p>Payment Status: {session.payment_status}</p>
<p>Amount Total: {session.currency.toUpperCase()} {" "} {session.amount_total/100}</p>
<p>Stripe Customer Id: {session.customer}</p>
<p>Customer: {orderedBy.name}</p>
<p>Payment Intent: {session.payment_intent}</p>

        </Modal>

    )
}
export default OrderModal