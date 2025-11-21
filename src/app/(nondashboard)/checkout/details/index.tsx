"use client";

import CoursePreview from "@/components/CoursePreview";
import Loading from "@/components/Loading";
import SignInComponent from "@/components/SignIn";
import SignUpComponent from "@/components/SignUp";
import { useGetCourseQuery } from "@/state/api";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

const CheckoutDetailsPage: FC = () => {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("id") ?? "";
  const showSignUp = searchParams.get("showSignUp") === "true";
  const {
    data: selectedCourse,
    isLoading,
    isError,
  } = useGetCourseQuery(courseId);

  if (isLoading) return <Loading />;
  if (isError) return <div>Failed to fetch course data</div>;
  if (!selectedCourse) return <div>Course not found</div>;

  return (
    <div className="checkout-details">
      <div className="checkout-details__container">
        <div className="checkout-details__preview">
          <CoursePreview course={selectedCourse} />
        </div>

        <div className="checkout-details__options">
          <div className="checkout-details__auth">
            {showSignUp ? <SignUpComponent /> : <SignInComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetailsPage;
