import { Review } from "../../types/Review";
import { backendServiceUrl, serverUrl } from "./configUtils";

export async function getReviewsByRestaurantId(id: number): Promise<Review[]> {
  try {
    const reviewsApiResponse = await fetch(
      `${serverUrl}/restaurants/${id}/reviews`
    );
    if (!reviewsApiResponse.ok) {
      const errorMessage = await reviewsApiResponse.json();
      throw new Error(errorMessage.message);
    }
    const reviews = (await reviewsApiResponse.json()) as Review[];
    return reviews;
  } catch (e) {
    console.error(e);
    return [];
  }
}
export async function getReviewsByUser(userName: string): Promise<Review[]> {
  try {
    const reviewsApiResponse = await fetch(
      `${serverUrl}/users/${userName}/reviews`
    );
    if (!reviewsApiResponse.ok) {
      const errorMessage = await reviewsApiResponse.json();
      throw new Error(errorMessage.message);
    }
    const reviews = (await reviewsApiResponse.json()) as Review[];
    return reviews;
  } catch (e) {
    console.error(e);
    return [];
  }
}
export async function createReview(
  reviewToCreate: Partial<Review>
): Promise<Review> {
  try {
    const reviewApiResponse = await fetch(`${backendServiceUrl}/reviews`, {
      method: "POST",
      body: JSON.stringify(reviewToCreate),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!reviewApiResponse.ok) {
      const errorMessage = await reviewApiResponse.json();
      throw new Error(errorMessage.message);
    }

    const review = (await reviewApiResponse.json()) as Review;
    return review;
  } catch (e) {
    console.log(e);
    return null as unknown as Review;
  }
}

export async function updateReview(
  reviewToUpdate: Partial<Review>
): Promise<Review> {
  try {
    const reviewApiResponse = await fetch(
      `${backendServiceUrl}/reviews/${reviewToUpdate.id}`,
      {
        method: "PUT",
        body: JSON.stringify(reviewToUpdate),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!reviewApiResponse.ok) {
      const errorMessage = await reviewApiResponse.json();
      throw new Error(errorMessage.message);
    }

    const review = (await reviewApiResponse.json()) as Review;
    return review;
  } catch (e) {
    console.log(e);
    return null as unknown as Review;
  }
}

export async function deleteReview(id: number): Promise<Review> {
  try {
    const reviewApiResponse = await fetch(
      `${backendServiceUrl}/reviews/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!reviewApiResponse.ok) {
      const errorMessage = await reviewApiResponse.json();
      throw new Error(errorMessage.message);
    }

    const review = (await reviewApiResponse.json()) as Review;
    return review;
  } catch (e) {
    console.log(e);
    return null as unknown as Review;
  }
}
export async function getReviewById(id: number): Promise<Review> {
  try {
    const reviewApiResponse = await fetch(`${backendServiceUrl}/reviews/${id}`);
    if (!reviewApiResponse.ok) {
      const errorMessage = await reviewApiResponse.json();
      throw new Error(errorMessage.message);
    }
    const review = (await reviewApiResponse.json()) as Review;
    return review;
  } catch (e) {
    console.log(e);
    return null as unknown as Review;
  }
}

export async function getPendingReviews(): Promise<Review[]> {
  try {
    const reviewApiResponse = await fetch(`${backendServiceUrl}/admin`);
    if (!reviewApiResponse.ok) {
      const errorMessage = await reviewApiResponse.json();
      throw new Error(errorMessage.message);
    }
    const reviews = (await reviewApiResponse.json()) as Review[];
    return reviews;
  } catch (e) {
    console.error(e);
    return [];
  }
}
export async function getAllReviews(): Promise<Review[]> {
  try {
    const reviewsApiResponse = await fetch(`${backendServiceUrl}/reviews`);
    if (!reviewsApiResponse.ok) {
      const errorMessage = await reviewsApiResponse.json();
      throw new Error(errorMessage.message);
    }
    const reviews = (await reviewsApiResponse.json()) as Review[];
    return reviews;
  } catch (e) {
    console.error(e);
    return [];
  }
}
