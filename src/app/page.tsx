
import React from "react";
import HomePageLayout from "../../layouts/HomePageLayout/HomePageLayout";
import { IHomePageLayoutProps } from "../../utils/typings/typings";

const mockCmsApiResponse: IHomePageLayoutProps["cmsApiResponse"] = {
  jobs: [
    {
      company: "Genesis Technologies",
      role: "JavaScript Intern",
      description:
        "Worked on HR modules, secure JWT auth, and modular backend using DTOs.",
      
    },
    {
      company: "VRadicals India Pvt Ltd",
      role: "AI/ML Intern",
      description:
        "Integrated AI in AR/VR apps. Built behavior-based AI agents. Boosted model accuracy by 85%.",
     
    },
    {
      company: "RRCAT (Raja Ramanna Centre for Advanced Technology)",
      role: "Project Trainee",
      description:
        "Trained deep learning models. Compared TensorFlow & OpenVINO performance.",
     
    },
  ],

  projects: [
    {
      title: "PDF to Audiobook Converter",
      description:
        "Converts academic PDFs into audio using AI TTS. Built with Gradio for interactive web UI.",
      githubLink: "https://github.com/AnushkaJoshi/pdf-audiobook-converter",
      demoLink: "",
      techStack: ["Python", "Gradio", "PyTTSx3", "Text Extraction"],
      image: {
        url: "/assets/projects/pdf-audiobook.png",
      },
    },
    {
      title: "TechnikalpAI – Behavior-Based Friendly AI",
      description:
        "Multimodal AI chatbot that adapts to emotional state via voice and text analysis.",
      githubLink: "https://github.com/AnushkaJoshi/TechnikalpAI",
      demoLink: "",
      techStack: ["Python", "Speech Recognition", "Chatbot", "HuggingFace"],
      image: {
        url: "/assets/projects/technikalpai.png",
      },
    },
    {
      title: "Resume Extraction with ChatGPT-4 API",
      description:
        "Extracts structured data from resumes using ChatGPT-4. Evaluates candidates by loyalty factor.",
      githubLink: "https://github.com/AnushkaJoshi/resume-extractor-gpt4",
      demoLink: "",
      techStack: ["Python", "OpenAI API", "ExcelJS", "Streamlit"],
      image: {
        url: "/assets/projects/resume-extraction.png",
      },
    },
    {
      title: "Society Management System",
      description:
        "Web app to manage society events, bills, committee data, and QR-based guest invites.",
      githubLink: "https://github.com/AnushkaJoshi/society-management",
      demoLink: "https://society-anushka.vercel.app",
      techStack: ["Next.js", "Tailwind", "QR Code", "ExcelJS"],
      image: {
        url: "/assets/projects/society-management.png",
      },
    },
    {
      title: "Design Compare Tool",
      description:
        "Visual comparison tool to detect differences between live websites and Figma designs.",
      githubLink: "https://github.com/AnushkaJoshi/design-compare",
      demoLink: "",
      techStack: ["Next.js", "Tailwind", "Figma API", "Puppeteer"],
      image: {
        url: "/assets/projects/design-compare.png",
      },
    },
  ],

  skills: [
    {
      name: "React",
      icon: {
        url: "/assets/icons/react.svg",
      },
    },
    {
      name: "Python",
      icon: {
        url: "/assets/icons/python.svg",
      },
    },
    {
      name: "Next.js",
      icon: {
        url: "/assets/icons/nextjs.svg",
      },
    },
    {
      name: "OpenVINO",
      icon: {
        url: "/assets/icons/openvino.svg",
      },
    },
    {
      name: "TensorFlow",
      icon: {
        url: "/assets/icons/tensorflow.svg",
      },
    },
    {
      name: "FastAPI",
      icon: {
        url: "/assets/icons/fastapi.svg",
      },
    },
    {
      name: "MongoDB",
      icon: {
        url: "/assets/icons/mongodb.svg",
      },
    },
    {
      name: "GitHub",
      icon: {
        url: "/assets/icons/github.svg",
      },
    },
  ],
};

const Page = () => {
  return (
    <HomePageLayout
      cmsApiResponse={mockCmsApiResponse}
      cmsApiError={null}
      CmsApiLoading={false}
    />
  );
};

export default Page;
