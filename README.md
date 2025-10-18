# 🚀 Modern Portfolio Website

A stunning, modern portfolio website built with React, Vite, and Tailwind CSS featuring 3D animations, real-time chatbot, and email integration.

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,js,nodejs,mongodb,tailwind,css,html,git,github,vite,vercel" />
</p>

## ✨ Features

### 🎨 Frontend (Portfolio Site)
- **3D Animations** - Powered by Three.js and React Three Fiber
- **Typing Effects** - Dynamic text animations with react-type-animation
- **Running Banner** - Continuous tech stack display
- **Interactive Chatbot** - AI-powered portfolio assistant
- **Smooth Animations** - Framer Motion for seamless transitions
- **Responsive Design** - Mobile-first approach
- **Modern UI/UX** - Glass morphism and gradient effects
- **Email Integration** - Contact form with EmailJS
- **CV Download** - Direct CV download functionality

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Three.js** - 3D graphics and animations
- **Framer Motion** - Smooth animations
- **React Type Animation** - Typing effects
- **EmailJS** - Email service integration

### Deployment
- **Vercel** - Frontend deployment platform

## 📁 Project Structure

```
my-portfolio/
├── apps/
│   └── site/                 # Portfolio Frontend
│       ├── src/
│       │   ├── components/   # React components
│       │   │   ├── Hero.jsx
│       │   │   ├── About.jsx
│       │   │   ├── Skills.jsx
│       │   │   ├── Projects.jsx
│       │   │   ├── Achievements.jsx
│       │   │   ├── Contact.jsx
│       │   │   ├── Navbar.jsx
│       │   │   ├── Footer.jsx
│       │   │   ├── ChatBot.jsx
│       │   │   └── RunningBanner.jsx
│       │   ├── App.jsx
│       │   ├── main.jsx
│       │   └── index.css
│       ├── public/           # Static assets
│       ├── package.json
│       └── vite.config.js
│
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. **Setup Portfolio Site**
```bash
cd apps/site
npm install
```

3. **Start Development Server**
```bash
npm run dev
```

### Environment Variables

Create `.env` file in the site directory:

#### Site (.env)
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎯 Portfolio Sections

### 🏠 Hero Section
- 3D animated background with rotating cubes
- Typing animation for professional titles
- Profile image with smooth entrance
- Call-to-action buttons (Download CV, View Projects)

### 👨‍💻 About Section
- Personal introduction and journey
- Education timeline
- Professional interests and passions
- Interactive stats and achievements

### 💡 Skills Section
- Animated skill bars with percentages
- Categorized skills (Frontend, Backend, Mobile, AI/ML)
- Tech stack icons with hover effects
- Progressive animation on scroll

### 🚀 Projects Section
- Filterable project gallery
- Project categories (Full Stack, Web, Mobile, AI/ML)
- Live demo and GitHub links
- Featured project highlights
- Technology tags

### 🏆 Achievements Section
- Certifications with credentials
- Awards and recognitions
- Open source contributions
- Statistics and milestones

### 📞 Contact Section
- Contact form with EmailJS integration
- Social media links
- Direct contact information
- Professional networking platforms

## 🎨 Customization

### Personal Information
Update your personal details in these files:
- `src/components/Hero.jsx` - Name, titles, and main description
- `src/components/About.jsx` - Bio, education, and background
- `src/components/Contact.jsx` - Contact information and social links

### Projects
Edit `src/components/Projects.jsx` to add your projects:
```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description",
    image: "/projects/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "fullstack",
    github: "https://github.com/yourusername/project",
    live: "https://yourproject.com",
    featured: true
  }
]
```

### Skills
Update `src/components/Skills.jsx` with your skills:
```javascript
const skillCategories = [
  {
    category: "Your Skills",
    skills: [
      { name: 'React', level: 90, color: 'bg-blue-500' },
      { name: 'Node.js', level: 85, color: 'bg-green-500' }
    ]
  }
]
```

## 📧 EmailJS Setup

1. **Create EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Set Up Email Service**
   - Add your email service (Gmail, Outlook, etc.)
   - Get your `Service ID`

3. **Create Email Template**
   - Create a contact form template
   - Get your `Template ID`

4. **Get API Keys**
   - Find your `Public Key` in account settings

5. **Update Environment Variables**
   - Add your keys to `.env` file

## 🚀 Deployment on Vercel

### Method 1: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd apps/site
vercel
```

### Method 2: GitHub Integration
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard
5. Deploy

### Environment Variables in Vercel
Add these in your Vercel project settings:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID` 
- `VITE_EMAILJS_PUBLIC_KEY`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 💻 Tablets (768px+)
- 🖥️ Desktop computers (1024px+)
- 🖥️ Large screens (1440px+)

## 🎨 Styling & Theming

### Colors
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Background: Gray gradients
- Text: White and gray variants

### Animations
- Page transitions with Framer Motion
- Scroll-triggered animations
- Hover effects on interactive elements
- Loading sequences

## 🤖 Chatbot Features

The interactive chatbot includes:
- Real-time message exchange
- Pre-defined responses
- Message timestamps
- Smooth animations
- Mobile-responsive design

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@kasun tharaka](https://github.com/yourusername)
- LinkedIn: [kasun tharaka](https://linkedin.com/in/yourprofile)
- Portfolio: [kasun'sportfolio.com](https://yourportfolio.com)

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) for 3D graphics
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://reactjs.org/) for the framework
- [EmailJS](https://www.emailjs.com/) for email services
- [Vercel](https://vercel.com/) for deployment

---

<div align="center">

### ⭐ Don't forget to star this repository if you find it helpful!

**Built with ❤️ using React, Vite, and Tailwind CSS**

![Portfolio Demo](https://img.shields.io/badge/Live_Demo-Available-green)
![Last Commit](https://img.shields.io/github/last-commit/yourusername/my-portfolio)
![Repo Size](https://img.shields.io/github/repo-size/yourusername/my-portfolio)

</div>
