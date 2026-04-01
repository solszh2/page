"use client";
import { useEffect } from "react";

export default function CozeChat() {
  useEffect(() => {
    // 1. 避免重复加载脚本
    if (document.getElementById("coze-js")) return;

    const script = document.createElement("script");
    script.id = "coze-js";
    // 使用你提供的最新版本链接
    script.src = "https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.19/libs/cn/index.js";
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      new CozeWebSDK.WebChatClient({
        config: {
          bot_id: '7615917818701381638', // 你的 Bot ID 保持不变
        },
        componentProps: {
          title: '汽车书目助手',
        },
        // 👇 核心修改：改为 'unauth' (无鉴权模式)，彻底告别 Token！
        auth: {
          type: 'unauth' 
        },
        ui: {
          base: {
            icon: 'https://p16-va.lemone8.com/obj/tos-maliva-p-0000/6908331575804595205', 
            layout: 'pc',
          },
          asstBtn: {
            fillColor: '#3B82F6', // 匹配网站的蓝色主题
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