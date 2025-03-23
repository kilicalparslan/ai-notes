"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const errorMessage = null;

    if (!errorMessage) {
      toast.success("Logged out", {
        description: "You have been successfully logged out",
      });
      router.push("/");
    } else {
      toast.error("Error logging out", {
        description: errorMessage,
      });
    }
    setLoading(false);
  };

  return (
    <Button variant="outline" className="w-24" onClick={handleLogout}>
      {loading ? <Loader2 className="animate-spin" /> : "Log out"}
    </Button>
  );
}

export default LogoutButton;
