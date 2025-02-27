import { X } from "lucide-react";
import chatbotimg from "../assets/chatbot-img.png";
import greenDot from "../assets/greenDot.png";
import send from "../assets/send.png";

const ChatBot = ({ onClose }) => {
    return (
        <div
            className="card text-white bg-dark shadow-lg position-fixed bottom-0 end-0 m-3 d-flex flex-column"
            style={{ width: "300px", height: "400px", zIndex: 1000 }}
        >
            {/* Header */}
            <div
                className="card-header d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "#1D2333" }}
            >
                <div className="d-flex align-items-center gap-2">
                    <img src={chatbotimg} alt="Chatbot" />
                    <div className="d-flex align-items-center flex-column mt-3">
                        <span className="fw-bold">Chat Bot</span>
                        <p style={{ fontWeight: "300", fontSize: "14px" }}>
                            <img src={greenDot} alt="Online" /> Online
                        </p>
                    </div>
                </div>
                <X className="cursor-pointer text-white" onClick={onClose} />
            </div>

            {/* Chat Body */}
            <div
                className="card-body overflow-auto flex-grow-1 d-flex flex-column"
                style={{ background: "linear-gradient(135deg,#0b0b0d, #1D2333)", paddingBottom: "50px" }}
            >
                <div className="d-flex justify-content-start">
                    <img src={chatbotimg} alt="" style={{ height: "30px", marginRight: "5px" }} />  <div className="p-2 rounded text-white mb-2 bg-secondary" style={{ maxWidth: "75%", fontSize: "12px" }}>
                        Hello there! How can I help you?
                    </div>
                </div>
            </div>

            {/* Input Box - Stuck to Bottom */}
            <div className="position-absolute bottom-0 w-100  p-2 d-flex" style={{ backgroundColor: "black" }}>
                <input
                    type="text"
                    className="form-control me-2 text-white"
                    placeholder="Enter message..."
                    style={{ backgroundColor: "black", border: "none" }}
                />
                <button className="btn">
                    <img src={send} alt="Send" />
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
