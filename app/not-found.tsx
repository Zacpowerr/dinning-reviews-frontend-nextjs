import BackButton from "./components/BackButton";

export default function NotFound({ target = "/" }: { target?: string }) {
  return (
    <div className="container ">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <BackButton target={target} />
    </div>
  );
}
