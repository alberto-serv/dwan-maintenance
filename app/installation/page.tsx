"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InstallationRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/installation/quote");
  }, [router]);
  return null;
}
