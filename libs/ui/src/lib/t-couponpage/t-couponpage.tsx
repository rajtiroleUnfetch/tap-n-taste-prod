import styled from 'styled-components';
import {TCoupon}  from '@tap-n-taste/ui';

export function TCouponpage() {
  const couponData = [
    { mainText: "Coupon code: 3473dbcjsb", subText: "This coupon is applied for all orders above 1000" },
    { mainText: "Coupon code: 3473dbcjsb", subText: "This coupon is applied for all orders above 1000" },
    { mainText: "Coupon code: 3473dbcjsb", subText: "This coupon is applied for all orders above 1000" },
    { mainText: "Coupon code: 3473dbcjsb", subText: "This coupon is applied for all orders above 1000" },
    { mainText: "Coupon code: 3473dbcjsb", subText: "This coupon is applied for all orders above 1000" },
    { mainText: "Coupon code: 3473dbcjsb", subText: "This coupon is applied for all orders above 1000" },
    { mainText: "Coupon code: 3473dbcjsb", subText: "This coupon is applied for all orders above 1000" }
  ];

  return (
    <div>
      {couponData.map((coupon, index) => (
        <TCoupon
          key={index}
          mainText={coupon.mainText}
          subText={coupon.subText}
        />
      ))}
    </div>
  );
}

export default TCouponpage;
