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
        <ReviewForm />
        <BackButton target={`/restaurants/${params.id}`} />
      </main>
    </>
  );
}
