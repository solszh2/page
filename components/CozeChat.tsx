"use client";
import { useEffect } from "react";

export default function CozeChat() {
  useEffect(() => {
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
        // 彻底删除了 auth 相关的配置块
        ui: {
          base: {
            icon: 'https://p16-va.lemone8.com/obj/tos-maliva-p-0000/6908331575804595205', 
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
    };

    document.body.appendChild(script);
  }, []);

  return null;
}