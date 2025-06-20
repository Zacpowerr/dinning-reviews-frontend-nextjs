"use client";

import BackButton from "../../../../../app/components/BackButton";
import { useParams } from "next/navigation";
import Head from "next/head";
import ReviewForm from "../../../../../app/components/review/ReviewForm";

export default function NewReviewPage() {
  const params = useParams();
  return (
    <>
      <Head>
        <title>Create Review | Dinning Reviews</title>
      </Head>
      <main className="container">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
          <h1 className="">Add New Review</h1>
          <ReviewForm />
        </div>
        <BackButton target={`/restaurants/${params.id}`} />
      </main>
    </>
  );
}
