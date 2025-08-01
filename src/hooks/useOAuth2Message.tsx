import { useEffect } from "react";

export default function useOAuth2Message() {
  useEffect(() => {
    const postMessage = (event: MessageEvent) => {
      const { accessToken } = event.data;

      if (accessToken === undefined) {
        localStorage.clear();
        console.log("Google login failed");
      } else {
        localStorage.setItem("x-subnity-access-token", accessToken);
        console.log("Google login successful");
      }
    }
    window.addEventListener("message", postMessage);

    return () => {
      window.removeEventListener("message", postMessage);
    };
  }, [])
}