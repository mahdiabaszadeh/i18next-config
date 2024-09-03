"use client";
import { useRouter } from "next/navigation";
export default function SwitchLang({ lng }: { lng: "fa" | "en" }) {
  const router = useRouter();

  const isEnglish = lng === "en";

  const toggleLanguage = () => {
    router.push(`/${isEnglish ? "fa" : "en"}`);
  };
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
      <div className={`flex items-center`}>
        <span
          className={`mx-2 ${isEnglish ? "text-gray-500" : "text-blue-500"}`}
        >
          persian{" "}
        </span>
        <div
          className={`relative inline-block w-10 h-6 cursor-pointer bg-gray-300 rounded-full`}
          onClick={() => toggleLanguage()}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform transform ${
              isEnglish ? "translate-x-0" : "translate-x-4"
            }`}
          />
        </div>
        <span
          className={`mx-2 ${isEnglish ? "text-blue-500" : "text-gray-500"}`}
        >
          English
        </span>
      </div>
    </div>
  );
}
