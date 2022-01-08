import React from "react";

const Links = () => {
  const items = [
    {
      id: 1,
      text: "درباره ما",
      href: "#!",
    },
    {
      id: 2,
      text: "تماس با ما",
      href: "#!",
    },
    {
      id: 3,
      text: "کی بهتر از تو",
      href: "#!",
    },
    {
      id: 4,
      text: "پرسش و پاسخ",
      href: "#!",
    },
    {
      id: 5,
      text: "مجله سفرمارکت",
      href: "#!",
    },
    {
      id: 6,
      text: "فرصت های شغلی",
      href: "#!",
    },
    {
      id: 7,
      text: "مجوزها",
      href: "#!",
    },
    {
      id: 8,
      text: "حریم خصوصی",
      href: "#!",
    },
    {
      id: 9,
      text: "قوانین و مقررات",
      href: "#!",
    },
    {
      id: 10,
      text: "امور تامین کنندگان",
      href: "#!",
    },
    {
      id: 11,
      text: "تبلیغات در سفرمارکت",
      href: "#!",
    },
    {
      id: 12,
      text: "۱۰ دلیل برای انتخاب سفرمارکت",
      href: "#!",
    },
    {
      id: 13,
      text: "بلیط هواپیما",
      href: "#!",
    },
    {
      id: 14,
      text: "درباره مبلیط هواپیما دبی",
      href: "#!",
    },
    {
      id: 15,
      text: "بلیط هواپیما کیش",
      href: "#!",
    },
    {
      id: 16,
      text: "بلیط هواپیما مشهد",
      href: "#!",
    },
    {
      id: 17,
      text: "بلیط هواپیما تفلیس<",
      href: "#!",
    },
    {
      id: 18,
      text: "تور اقساطی",
      href: "#!",
    },
    {
      id: 19,
      text: "سنجش رضایتمندی",
      href: "#!",
    },
    {
      id: 20,
      text: "بلیط هواپیما استانبول",
      href: "#!",
    },
    {
      id: 21,
      text: "بلیط هواپیما چارتر",
      href: "#!",
    },
    {
      id: 22,
      text: "بلیط هواپیما خارجی",
      href: "#!",
    },
    {
      id: 23,
      text: "بلیط هواپیما تورنتو",
      href: "#!",
    },
    {
      id: 24,
      text: "راهنمای سفر",
      href: "#!",
    },
  ];

  return (
    <div className="links mr-8">
      <ul>
        {items.map((item) => {
          return (
            <li className="mt-4" key={item.id}>
              <a href={`${item.href}`}>{item.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;
