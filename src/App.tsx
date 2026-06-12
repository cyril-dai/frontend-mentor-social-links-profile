import Layout from "@/components/Layout";
import ProfileCard from "@/components/ProfileCard";

import Avatar from "@/assets/avatar-jessica.jpeg";

import type { User } from "@/components/ProfileCard";

const user: User = {
  thumbnail: Avatar,
  fullname: "Jessica Randall",
  country: "United Kingdom",
  city: "London",
  title: "Front-end developer and avid reader.",
  socialLinks: [
    { name: "GitHub", url: "#" },
    { name: "Frontend Mentor", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" }
  ]
} as const;

function App() {
  return (
    <Layout>
      <main className="self-center py-4 [grid-area:c]">
        <ProfileCard {...user} />
      </main>
      <footer className="col-span-full py-4 text-center text-[0.6875rem]">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          <strong>
            <em>Frontend Mentor</em>
          </strong>
        </a>
        . Coded by{" "}
        <a href="#">
          <strong>
            <em>Cyril</em>
          </strong>
        </a>
        .
      </footer>
    </Layout>
  );
}

export default App;
