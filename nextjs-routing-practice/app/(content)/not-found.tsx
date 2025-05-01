import ErrorComponent from "@/components/error/Error";

export default function NotFountPage() {
  return (
    <ErrorComponent
      code={404}
      title={"NOT FOUND"}
      message={`Page does not exist.`}
      style={{
        padding: "20px",
      }}
    />
  );
}
