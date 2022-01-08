import React from "react";
import Links from "./Links";
import OfficialBadges from "./OfficialBadges";
import VirtualNetwork from "./VirtualNetwork";
const Container = () => {
  return (
    <div className="container py-4">
      <div className="footer-content">
        <Links />
        <OfficialBadges />
      </div>
      <VirtualNetwork />
      <div className="rights my-8">
        <p>
          کلیه حقوق این سایت متعلق به شرکت دیزنی بجز سیندرلا (سفرمارکت) می‌باشد.
          استفاده از مطالب سایت سفرستان فقط برای مقاصد .غیرتجاری و با ذکر منبع
          بلامانع است
        </p>
      </div>
    </div>
  );
};

export default Container;
