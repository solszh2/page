"use client";
import { useEffect } from "react";

export default function CozeChat() {
  useEffect(() => {
    // 1. 防止重复加载脚本
    if (document.getElementById("coze-js")) return;

    const script = document.createElement("script");
    script.id = "coze-js";
    script.src = "https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.19/libs/cn/index.js";
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      new CozeWebSDK.WebChatClient({
        config: {
          bot_id: '7615917818701381638',
        },
        componentProps: {
          title: '汽车书目助手',
        },
        auth: {
          type: 'token',
          token: 'pat_5W1PNlZXm2HrMc3wMETizNvvgy2VyPmsfa4ZeXKnHp7evKE7t6BUzvg5Lhv0S9ML',
          onRefreshToken: () => 'pat_5W1PNlZXm2HrMc3wMETizNvvgy2VyPmsfa4ZeXKnHp7evKE7t6BUzvg5Lhv0S9ML',
        },
        ui: {
          base: {
            // 👇 核心修复：使用你提供的新图片链接作为 Logo
            icon: 'https://i.postimg.cc/0N0pPbSt/image.png', 
            // 建议：显式指定为 PC 布局，这能确保图标始终显示在浮动按钮上
            layout: 'pc', 
          },
          asstBtn: {
            fillColor: '#3B82F6', // 保持主题蓝色
          },
          footer: {
            isShow: true,
            expression: true,
          }
        }
      });
    };

    document.body.appendChild(script);
  }, []);

  return null;
}