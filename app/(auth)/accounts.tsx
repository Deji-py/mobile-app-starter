import AccountSwitcher from "@/features/auth/login/AccountSwitcher";
import { useRouter } from "expo-router";
import React from "react";

const accounts = () => {
  const router = useRouter();
  return <AccountSwitcher handleSwichAccount={() => router.push("/login")} />;
};

export default accounts;
