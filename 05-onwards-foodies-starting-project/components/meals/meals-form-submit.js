"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending, data, method } = useFormStatus();
  console.log(`method`);
  console.log(method);
  return (
    <button type="submit">{pending ? "Submitting..." : "Share meal"}</button>
  );
}
