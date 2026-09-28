"use client";
import { useEffect } from "react";

export default function ContactAutoOpen() {
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("open-quote-popup"));
  }, []);
  return null;
}
