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
          // 你的智能体 ID
          bot_id: '7615917818701381638', 
        },
        componentProps: {
          title: '汽车书目助手',
        },
        // 核心修复：按照官方示例配置鉴权
        auth: {
          type: 'token',
          // 填入你提供的 PAT
          token: 'pat_5W1PNlZXm2HrMc3wMETizNvvgy2VyPmsfa4ZeXKnHp7evKE7t6BUzvg5Lhv0S9ML',
          // 令牌刷新时使用同样的 Token
          onRefreshToken: () => 'pat_5W1PNlZXm2HrMc3wMETizNvvgy2VyPmsfa4ZeXKnHp7evKE7t6BUzvg5Lhv0S9ML',
        },
        ui: {
          base: {
            icon: 'https://p16-va.lemone8.com/obj/tos-maliva-p-0000/6908331575804595205', 
            layout: 'pc',
          },
          asstBtn: {
            fillColor: '#3B82F6', // 统一使用主题蓝色
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