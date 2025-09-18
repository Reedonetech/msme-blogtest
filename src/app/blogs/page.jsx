"use client";
import Navigation from "../components/navigation";
import BlogList from "./bloglist/page";

export default function BlogsPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navigation />
      <BlogList />
      
    </div>
  );
}
