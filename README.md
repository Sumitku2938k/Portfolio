# Sumit's Personal Portfolio

Welcome to the repository for my personal portfolio website. This project showcases my skills, projects, and a working contact form for collaboration inquiries.

## Tech Stack

- **Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

## Features

- **About Me**: A brief introduction to my background and technical expertise
- **Projects**: A curated list of my featured work
- **Skills**: My technical strengths across frontend, backend, and tools
- **Contact**: Social links plus a working email contact form
- **Responsive Design**: Optimized for desktop and mobile layouts

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Sumitku2938k/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create your environment file:

   ```bash
   copy .env.example .env
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Contact Form Setup

The contact form is wired with EmailJS so visitors can send messages directly to your inbox without creating a backend.

1. Create an account on EmailJS.
2. Connect your email service in the EmailJS dashboard.
3. Create an email template.
4. Copy your `Service ID`, `Template ID`, and `Public Key`.
5. Paste them into `.env`:

   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```

6. In your EmailJS template, use these variables:

   ```text
   Name: {{name}}
   Email: {{email}}
   Reply To: {{reply_to}}
   Submitted At: {{submitted_at}}

   Message:
   {{message}}
   ```

Once these values are configured, every successful form submission will be sent to your connected email inbox.

## Let's Connect

- **GitHub**: [Sumitku2938k](https://github.com/Sumitku2938k/)
- **LinkedIn**: [Sumit Kumar](https://www.linkedin.com/in/sumit-kumar-b2aa90324/)
- **Email**: sumitku2938k@gmail.com
