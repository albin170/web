// Initialize EmailJS with your public key
emailjs.init("E4aD8My0U069WsY1O");

// ===== Add Comment Function =====
function addComment() {
    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();
    const section = document.getElementById('comment-section');

    if (!name || !comment) {
        alert('⚠️ Please enter your name and comment.');
        return;
    }

    // Display comment on the page
    const div = document.createElement('div');
    div.innerHTML = `<strong>${name}</strong>: ${comment}`;
    section.appendChild(div);

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';

    // Send comment via EmailJS
    emailjs.send("service_k9596oo", "template_sehpdqi", {
        from_name: name,
        to_email: "albinbinu17007@gmail.com",
        message: comment
    })
    .then(function(response) {
        alert('✅ Comment sent to email successfully!');
        console.log('SUCCESS:', response.status, response.text);
    })
    .catch(function(error) {
        alert('❌ Failed to send email. Check console.');
        console.error('FAILED:', error);
    });
}

// ===== Chatbot Functions =====
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const msg = input.value.trim();
    if (!msg) return;

    const chatBody = document.getElementById('chatBody');

    // User message
    const userMsg = document.createElement('div');
    userMsg.textContent = "You: " + msg;
    chatBody.appendChild(userMsg);

    // Bot response
    const botMsg = document.createElement('div');
    botMsg.textContent = "Bot: " + getBotReply(msg);
    chatBody.appendChild(botMsg);

    input.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotReply(msg) {
    msg = msg.toLowerCase();
    if (msg.includes("hello") || msg.includes("hi")) return "Hello! Welcome to A and A Music 🎶 How can I help you today?";
    if (msg.includes("music")) return "We create original music and background scores! Would you like to join or collaborate?";
    if (msg.includes("services") || msg.includes("what do you do")) return "We offer web design, logo creation, digital marketing, and music production.";
    if (msg.includes("join") || msg.includes("project")) return "You can join by contacting us via email: albinbinu17007@gmail.com 💌";
    if (msg.includes("contact")) return "You can reach us at +91 70127 87615 or email albinbinu17007@gmail.com 📞";
    if (msg.includes("bye")) return "Goodbye! Have a musical day! 🎵";
    return "Thanks for your message! We'll get back to you soon.";
}














