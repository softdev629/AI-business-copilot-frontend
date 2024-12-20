# 🎵 Music AI Bot 🎶

**Music AI Bot** is an intelligent chatbot that learns from various data sources such as `.txt` files, `.pdf` files, and YouTube video transcripts. Users can engage in meaningful conversations with the bot, powered by the knowledge it acquires from these data sources. The web interface for this application is built using **React** and **Ant Design (AntD)**, ensuring a polished and user-friendly experience.

## ⭐ Features

- Train the bot with `.txt`, `.pdf` files, or **YouTube** video transcripts.
- Chat with the bot using conversational AI, leveraging the data it has been trained on.
- Seamless integration of **React**, **AntD**, and **Redux Toolkit** for a smooth and interactive interface.
- Real-time communication using **WebSocket** for responsive user interactions.

---

## 🛠️ Technology Stack

- **Frontend**:
  - React.js
  - Ant Design (AntD) for UI Components
  - Redux Toolkit for state management
  - WebSocket for real-time chat functionality
- **Backend**:
  - Chatbot server to handle training and AI conversations

---

## 🚀 Setup and Installation

Follow these steps to get the project up and running locally:

### Prerequisites:
- Ensure you have **Node.js** and **npm** (or **yarn**) installed on your system.
- Setup the **chatbot server** before running the front-end for a working test.

### Steps:

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/softdev629/AI-business-copliot-frontend.git
   cd AI-business-copliot-frontend
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the React Application**  
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Start the Chatbot Server**  
   - Make sure the chatbot server is running locally or remotely to enable functional testing.

5. **Access the Application**  
   Open your browser and visit:  
   ```bash
   http://localhost:3000
   ```

---

## 📦 Folder Structure

- `src/` - Contains the React code for the front-end UI.
- `components/` - Reusable React components.
- `store.js` - Store configuration using Redux Toolkit for state management.
- `webpack.config.js` - Build configuration for React development and production.

---

## 💻 How It Works

1. **Upload Files or Link Metadata:**  
   The bot can be trained using local `.txt` or `.pdf` files or by using transcript data from YouTube videos.

2. **Real-Time Chat:**  
   Engage with the bot in real-time via a clean chat interface. The bot responds intelligently based on the knowledge it attains from the uploaded data.

---

## ⚡ Integrations

- **YouTube Integration:** Upload YouTube transcripts to teach the bot from video content.
- **Ant Design (AntD):** Ensures a premium UI experience.
- **WebSocket Integration:** Provides a real-time experience while chatting with the bot.

---

## 📋 Notes

- **Server Prerequisite:** The chatbot server should be running and correctly configured for the front-end app to function.
- Ensure the uploaded data is structured correctly and complies with the supported formats (`.txt`, `.pdf`, or YouTube transcripts).
- Data privacy: All uploaded data remains local to the server unless shared publicly.

---

## 🔧 Future Enhancements

- Add support for additional file formats (e.g., `.docx`).
- Enhance the chatbot to support multiple languages.
- Implement a cloud-based solution for storing training data.
- Optimize the training model for faster learning.

---

## 🤝 Contributing

We welcome contributions! If you'd like to contribute, please fork the repository and create a pull request with your updates. Make sure your code follows the project's standards.

1. Fork it.
2. Create your feature branch: `git checkout -b feature/AmazingFeature`.
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`.
4. Push to the branch: `git push origin feature/AmazingFeature`.
5. Open a pull request.

---

## 🧑‍💻 Contributors

- [Bohdan](https://github.com/softdev629) (Project Creator)

---

## 📄 License

This project is **MIT Licensed**. See the `LICENSE` file for more details.

---

## 📞 Contact

For questions, bugs, or feature requests, feel free to create an issue or reach out to me:

- GitHub: [My Profile](https://github.com/softdev629)
- Email: drozd.dev@outlook.com
