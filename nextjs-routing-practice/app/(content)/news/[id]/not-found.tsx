import ErrorComponent from "@/components/error/Error";

export default function NewsNotFoundPage() {
  return (
    <ErrorComponent
      code={404}
      title={"NOT FOUND"}
      message={`News does not exist.`}
      style={{
        padding: "20px",
      }}
    />
  );
}
