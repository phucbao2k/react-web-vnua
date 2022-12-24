import React from "react";
import ReactDOM from "react-dom";
import { MessengerChat } from "react-messenger-chat-plugin";

ReactDOM.render(
    <MessengerChat
        pageId="100089083535959"
        language="vi_VI"
        themeColor={"#000000"}
        bottomSpacing={300}
        loggedInGreeting="loggedInGreeting"
        loggedOutGreeting="loggedOutGreeting"
        greetingDialogDisplay={"show"}
        debugMode={true}
        onMessengerShow={() => {
            console.log("onMessengerShow");
        }}
        onMessengerHide={() => {
            console.log("onMessengerHide");
        }}
        onMessengerDialogShow={() => {
            console.log("onMessengerDialogShow");
        }}
        onMessengerDialogHide={() => {
            console.log("onMessengerDialogHide");
        }}
        onMessengerMounted={() => {
            console.log("onMessengerMounted");
        }}
        onMessengerLoad={() => {
            console.log("onMessengerLoad");
        }}
    />,
    document.getElementById("demo")
);