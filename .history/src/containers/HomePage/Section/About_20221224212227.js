import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import ReactDOM from "react-dom";
import { MessengerChat } from "react-messenger-chat-plugin";
class About extends Component {

    render() {

        return (
            <>
                ReactDOM.render(
                <MessengerChat
                    pageId="605097523844325"
                    language="vi_SE"
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
                <div className="section-share section-about">
                    <div className="section-about-header">
                        Thông tin thêm
                    </div>
                    <div className="section-about-content">
                        <div className="content-left">
                            <iframe width="100%" height="320px"
                                src="https://www.youtube.com/embed/21tjOW8BvB4?list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI"
                                title="Bài N5: Demo Sản Phẩm Đạt Được Khi Kết Thúc Khóa Học Trên Production |Khóa Học Node.js và React"
                                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        </div>
                        <div className="content-right">
                            <p><FormattedMessage id="home-footer.story" /></p>
                        </div>
                    </div>
                </div>
            </>
            
        );
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);