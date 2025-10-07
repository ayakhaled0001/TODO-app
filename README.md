# Todo App 📝

A beautiful and responsive todo application built with React, featuring dark/light mode toggle and local storage persistence.

![Todo App](https://img.shields.io/badge/React-18.2.0-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-Ready-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- ✅ **Add, delete, and manage todos**
- 🌓 **Dark/Light mode toggle** with system preference detection
- 💾 **Local storage persistence** - your todos survive browser refreshes
- 🎯 **Filter todos** by All, Active, or Completed
- 🧹 **Clear completed todos** with one click
- 📱 **Fully responsive design**
- ⚡ **Built with modern React** (Hooks, Context API, useReducer)



## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **State Management**: React Context API + useReducer
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Header with theme toggle and input
│   └── Body.jsx           # Todo list and filters
├── context/
│   ├── ThemeProvider.js    # Theme management context
│   └── TodoProvider.js     # Todo state management context
├── App.jsx                 # Main app component
└── main.jsx               # App entry point
```

## 🎮 How to Use

### Adding a Todo
1. Type your todo in the input field at the top
2. Press Enter
3. Your todo will appear in the list below

### Managing Todos
- **Complete a todo**: Click the circular checkbox
- **Delete a todo**: Click the delete button (×) next to the todo
- **Filter todos**: Use the All/Active/Completed buttons
- **Clear completed**: Click "Clear Completed" to remove all finished todos

### Theme Toggle
- Click the moon/sun icon in the header to toggle between dark and light modes
- Your theme preference is saved automatically


## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Bug Reports

If you discover any bugs, please create an issue with:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser and OS information

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 📞 Support

If you need help with this project, please:
1. Check the [issues](../../issues) page
2. Create a new issue if your problem isn't already reported

---

**Made with ❤️ and React**

<div align="center">

### If you like this project, don't forget to give it a ⭐!

</div>
