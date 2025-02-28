import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import chatbotimg from "../assets/chatbot-img.png";
import greenDot from "../assets/greenDot.png";
import send from "../assets/send.png";

const ChatBot = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { text: "Hello there! How can I help you?", sender: "bot" }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    useEffect(() => {
        verifyUserToken();
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const verifyUserToken = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found. User must log in.");
            return;
        }

        try {
            const response = await fetch(`https://dev.adtask.ai/verify-token/${token}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Token verified:", data);
            } else {
                console.error("Failed to verify token");
            }
        } catch (error) {
            console.error("Error verifying token:", error);
        }
    };

    const sendMessage = async () => {
        const token = localStorage.getItem("token");

        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user" };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");

        try {
            const response = await fetch(`https://dev.adtask.ai/${token}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input })
            });
            const data = await response.json();

            const botMessage = { text: data.msg || "I'm not sure how to respond.", sender: "bot" };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Error fetching chatbot response:", error);
        }
    };

    return (
        <div
            className="card text-white bg-dark shadow-lg position-fixed bottom-0 end-0 m-3 d-flex flex-column"
            style={{ width: "300px", height: "400px", zIndex: 1000 }}
        >
            {/* Header */}
            <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: "#1D2333" }}>
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
                style={{ background: "linear-gradient(135deg,#0b0b0d, #1D2333)", paddingBottom: "10px" }}
            >
                {messages.map((msg, index) => (
                    <div key={index} className={`d-flex ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}>
                        {msg.sender === "bot" && <img src={chatbotimg} alt="" style={{ height: "30px", marginRight: "5px" }} />}
                        <div
                            className="p-2 rounded text-white mb-2"
                            style={{
                                maxWidth: "75%",
                                fontSize: "12px",
                                backgroundColor: msg.sender === "user" ? "#1D2333" : "gray",
                                alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                            }}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Box */}
            <div className="w-100 p-2 d-flex" style={{ backgroundColor: "black" }}>
                <input
                    type="text"
                    className="form-control me-2 text-white"
                    placeholder="Enter message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    style={{ backgroundColor: "black", border: "none" }}
                />
                <button className="btn" onClick={sendMessage}>
                    <img src={send} alt="Send" />
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
