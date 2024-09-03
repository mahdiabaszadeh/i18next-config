import { useTranslation } from "@/app/i18n";
import Link from "next/link";

export default async function AboutUs({ params: { lng } }: any) {
  const { t } = await useTranslation(lng, "common");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("hello")}</h1>
      <Link
        className="text-green-500 border-b-2 border-green-500 hover:text-purple-300 hover:border-purple-300"
        href={`/${lng}`}
      >
        {t("back")}
      </Link>
    </main>
  );
}
