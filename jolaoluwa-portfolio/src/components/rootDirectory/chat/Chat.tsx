"use client";

import { NextPage } from "next";
import { IoChatbubble } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import "./chat.css";
import { useState } from "react";
import Image from "next/image";

interface Props {}

const Chat: NextPage<Props> = ({}) => {
  const [chatActive, chatInactive] = useState(false);
  return (
    <div className="chat_root">
      {!chatActive && (
        <div className="chat_container">
          <div className="chat_with_me">
            Chat me up <span style={{ fontSize: "20px" }}>👋🏾</span>
          </div>
          <button className="chat_icon" onClick={() => chatInactive(true)}>
            <IoChatbubble fontSize={25} />
          </button>
        </div>
      )}
      {chatActive && (
        <div className="chat_box">
          <div className="send_btn">
            <IoMdSend fontSize={20} />
          </div>
          <div className="chat_top_container">
            <div className="chat_header">
              <div className="left">Hi there 👋🏾</div>
              <button className="right">
                <IoIosArrowDown
                  fontSize={20}
                  onClick={() => chatInactive(false)}
                  color="white"
                />
              </button>
            </div>
            <div className="chat_sub_header">
              <p>
                Welcome to my website.
                <br />
                Ask me anything <span style={{fontSize: "25px"}}>🎉</span>
              </p>
              <div className="profile_pic">
                <Image
                  src="/images/wink.jpg"
                  alt=""
                  fill
                  style={{ position: "absolute", borderRadius: "50%" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
