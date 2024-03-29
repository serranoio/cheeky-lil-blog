// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// 404 page
// not really updated, but thats ok. This appears on any malrouting
const Index = () => {
  const router = useRouter();

  const [alsoSay, setAlsoSay] = useState("");

  useEffect(() => {
    setAlsoSay(
      router.asPath === "/me" ||
        router.asPath === "/cs" ||
        router.asPath === "/goals"
        ? "This page has not been made yet. come back later"
        : "404 error. Page not found"
    );
  }, [router]);

  return (
    <div
      style={{
        fontSize: 32,
        color: "var(--sixth)",
      }}
    >
      {alsoSay}
    </div>
  );
};

export default Index;
