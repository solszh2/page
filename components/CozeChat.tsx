"use client";
import { useEffect } from "react";

export default function CozeChat() {
  useEffect(() => {
    // 1. 防止重复加载脚本
    if (document.getElementById("coze-js")) return;

    // 2. 动态注入 CSS，强制该图标显示为圆形
    const style = document.createElement("style");
    style.id = "coze-custom-style";
    style.innerHTML = `
      img[src*="e8bc68ee60e3d4d70e187fa0fd47640.jpg"] {
        border-radius: 50% !important;
        object-fit: cover !important;
        aspect-ratio: 1 / 1 !important;
      }
    `;
    document.head.appendChild(style);

    const script = document.createElement("script");
    script.id = "coze-js";
    script.src = "https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.19/libs/cn/index.js";
    script.async = true;

    script.onload = () => {
      try {
        // @ts-ignore
        new CozeWebSDK.WebChatClient({
          config: {
            bot_id: '7615917818701381638',
          },
          componentProps: {
            title: '汽车书目助手',
          },
          // 👇 修复核心：必须增加 userInfo 参数，否则 SDK 会拒绝 token 授权并报错
          userInfo: {
            id: 'user_' + new Date().getTime(), // 动态生成一个访客ID
            name: 'Guest',
          },
          auth: {
            type: 'token',
            token: 'pat_5W1PNlZXm2HrMc3wMETizNvvgy2VyPmsfa4ZeXKnHp7evKE7t6BUzvg5Lhv0S9ML',
            // 👇 修复核心：改为标准的普通函数返回，兼容性更好
            onRefreshToken: function () {
              return 'pat_5W1PNlZXm2HrMc3wMETizNvvgy2VyPmsfa4ZeXKnHp7evKE7t6BUzvg5Lhv0S9ML';
            }
          },
          ui: {
            base: {
              icon: 'https://i.postimg.cc/cCL7PNLW/e8bc68ee60e3d4d70e187fa0fd47640.jpg', 
              layout: 'pc', 
            },
            asstBtn: {
              fillColor: '#3B82F6', 
            },
            footer: {
              isShow: true,
              expression: true,
            }
          }
        });
      } catch (error) {
        console.error("Coze SDK Initialization Error:", error);
      }
    };

    document.body.appendChild(script);
  }, []);

  return null;
}