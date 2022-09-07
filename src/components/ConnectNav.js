import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Avatar, Badge } from "antd";
import moment from "moment";
import { getAccountBalance, currencyFormatter,payoutSettings } from "../actions/stripe";
import {SettingOutlined} from '@ant-design/icons'

const { Meta } = Card;
const { Ribbon } = Badge;

const ConnectNav = () => {
  const [balance, setBalance] = useState(0);
  const [loading,setLoading]=useState(false)
  const { auth } = useSelector((state) => ({ ...state }));
  const { user,token } = auth;

  useEffect(() => {
    getAccountBalance(auth.token).then((res) => {
      // console.log(res);
      setBalance(res.data);
    });
  }, []);

  const handlePayoutSettings=async()=>{
    setLoading(true)
    try{
        const response=await payoutSettings(token)
        console.log('Response payout link',response)
       window.location.href=response.data.url
        setLoading(false)

    }catch(err){
        console.log(err)
        setLoading(false)
        alert('Unable to access settings,please try later')
    }

  }

  return (
    <div className="d-flex justify-content-around">
      <Card>
        <Meta
          avatar={<Avatar>{user.name[0]}</Avatar>}
          title={user.name}
          description={`Joined ${moment(user.createdAt).fromNow()}`}
        />
      </Card>
      {auth &&
        auth.user &&
        auth.user.stripe_seller &&
        auth.user.stripe_seller.charges_enabled && (
          <>
            <Ribbon text="Avaliable" color="grey">
              <Card className="bg-light pt-1">
                {balance &&
                  balance.pending &&
                  balance.pending.map((bp, i) => (
                    <span key={i} className="lead">
                      {currencyFormatter(bp)}
                    </span>
                  ))}
              </Card>
            </Ribbon>
            <Ribbon text='Payouts' color='silver'>
            <Card
            onClick={handlePayoutSettings}
            className='bg-light pointer'>
            <SettingOutlined className='h5 pt-2'/>

            </Card>


            </Ribbon>
          </>
        )}
    </div>
  );
};

export default ConnectNav;
