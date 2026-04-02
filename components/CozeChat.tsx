"use client";
import { useEffect } from "react";

export default function CozeChat() {
  useEffect(() => {
    // 1. 防止重复加载脚本
    if (document.getElementById("coze-js")) return;

    // 2. 【核心修改】动态注入 CSS，利用代码强制将你的新照片在网页上渲染为圆形
    const style = document.createElement("style");
    style.id = "coze-custom-style";
    style.innerHTML = `
      /* 只要是包含该新图片链接的图片标签，一律强制变成圆形，原图不受任何影响 */
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
      // @ts-ignore
      new CozeWebSDK.WebChatClient({
        config: { bot_id: '7615917818701381638' },
        componentProps: { title: '汽车书目助手' },
        auth: { /* ...保持原样... */ },
        ui: {
          base: {
            // 👇 【核心修改】替换为你给出的新图片链接
            icon: 'https://i.postimg.cc/cCL7PNLW/e8bc68ee60e3d4d70e187fa0fd47640.jpg', 
            layout: 'pc', 
          },
          asstBtn: { fillColor: '#3B82F6' },
          footer: { isShow: true, expression: true }
        }
      });
    };

    document.body.appendChild(script);
  }, []);

  return null;
}