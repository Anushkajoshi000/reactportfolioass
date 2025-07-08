// import type { NextPage } from "next";
// import { HomePageLayout } from "../../layouts";
// import { apolloClient, GraphqlQuery } from "../../utils/api/apolloClient";

// // Next.js will invalidate the cache when a
// // request comes in, at most once every 10 seconds.
// export const revalidate = 10;
// console.log("Sending GraphQL Query:", GraphqlQuery.loc?.source.body);

// const Home: NextPage = async () => {
//   const { data, error, loading } = await apolloClient.query({
//     query: GraphqlQuery,
//     fetchPolicy: "network-only", // Ensure fresh data for ISR
//   });

//   return <HomePageLayout cmsApiResponse={data} cmsApiError={error} CmsApiLoading={loading} />;
// };

// export default Home;


// import type { NextPage } from "next";
// import HomePageLayout from "../../layouts/HomePageLayout/HomePageLayout";
// //import { ApolloError } from "@apollo/client";
// import { ICmsApiResponse } from "../../utils/typings/typings";

// // GraphQL Endpoint
// const HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_API as string;

// const query = `
// {
//   jobs {
//     company
//     description
//     role
//     year
//   }
//   projects {
//     title
//     description
//     githubLink
//     demoLink
//     techStack
//     image {
//       url
//     }
//   }
//   skills {
//     name
//     icon {
//       url
//     }
//   }
// }
// `;

// const Home: NextPage = async () => {
//   let cmsApiResponse: ICmsApiResponse | null = null;
//   let cmsApiError: Error | undefined;

//   try {
//     const res = await fetch(HYGRAPH_ENDPOINT, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`, // Uncomment if needed
//       },
//       body: JSON.stringify({ query }),
//       next: { revalidate: 10 },
//     });

//     const result = await res.json();

//     if (result.errors) {
//       // ApolloError is a class, but we're simulating the same shape
//       cmsApiError = new Error(result.errors[0].message  );
//     } else {
//       cmsApiResponse = result.data;
//     }
//   } catch (err) {
//     //cmsApiError = new Error({ errorMessage: (err as Error).message });
//     cmsApiError = err instanceof Error ? err : new Error("Unknown error occurred");
//   }

//   return (
//     <HomePageLayout
//       cmsApiResponse={cmsApiResponse as ICmsApiResponse}
//       cmsApiError={cmsApiError}
//       CmsApiLoading={!cmsApiResponse && !cmsApiError}
//     />
//   );
// };

// export default Home;

// src/app/page.tsx
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
