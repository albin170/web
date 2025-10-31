function addComment() {
    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();
    const section = document.getElementById('comment-section');

    if (name && comment) {
        // Display the comment on the page
        const div = document.createElement('div');
        div.innerHTML = `<strong>${name}</strong>: ${comment}`;
        section.appendChild(div);
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';

        // Send the comment to email using EmailJS
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            to_email:"abhinavaby07@gmail.com",
            from_name: name,
            message: comment
        }).then(function(response) {
            alert('Comment sent to email successfully!');
        }, function(error) {
            alert('Failed to send email.');
        });
    } else {
        alert('Please enter your name and comment.');
    }
}


// Chatbot Logic
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const msg = input.value.trim();
    if (!msg) return;

    const chatBody = document.getElementById('chatBody');
    const userMsg = document.createElement('div');
    userMsg.textContent = "You: " + msg;
    chatBody.appendChild(userMsg);

    const botMsg = document.createElement('div');
    botMsg.textContent = "Bot: " + getBotReply(msg);
    chatBody.appendChild(botMsg);

    input.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotReply(msg) {
    msg = msg.toLowerCase();
    if (msg.includes("hello") || msg.includes("hi"))
        return "Hello! Welcome to A and A Music 🎶 How can I help you today?";
    if (msg.includes("music"))
        return "We create original music and background scores! Would you like to join or collaborate?";
    if (msg.includes("services") || msg.includes("what do you do"))
        return "We offer web design, logo creation, digital marketing, and music production.";
    if (msg.includes("join") || msg.includes("project"))
        return "You can join by contacting us via email: albinbinu170@gmail.com 💌";
    if (msg.includes("contact"))
        return "You can reach us at +91 70127 87615 or email albinbinu170@gmail.com 📞";
    if (msg.includes("bye"))
        return "Goodbye! Have a musical day! 🎵";
    return "Thanks for your message! We'll get back to you soon.";
}






