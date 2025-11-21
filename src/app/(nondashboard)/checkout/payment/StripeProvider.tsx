"use client";

import { FC, useEffect, useState } from "react";
import {
  Appearance,
  loadStripe,
  StripeElementsOptions,
} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  useCreateStripePaymentIntentMutation,
  useGetCourseQuery,
} from "@/state/api";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/Loading";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not set");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
const appearance: Appearance = {
  theme: "stripe",
  variables: {
    colorPrimary: "#0570de",
    colorBackground: "#18181b",
    colorText: "#d2d2d2",
    colorDanger: "#df1b41",
    colorTextPlaceholder: "#6e6e6e",
    fontFamily: "Inter, system-ui, sans-serif",
    spacingUnit: "3px",
    borderRadius: "10px",
    fontSizeBase: "14px",
  },
};

interface StripeProviderProps {
  children: React.ReactNode;
}

const StripeProvider: FC<StripeProviderProps> = ({ children }) => {
  const [clientSecret, setClientSecret] = useState<string | "">("");
  const [createStripePaymentIntent] = useCreateStripePaymentIntentMutation();
  const searchParams = useSearchParams();
  const courseId = searchParams.get("id") ?? "";
  const { data: currentCourse } = useGetCourseQuery(courseId);

  useEffect(() => {
    if (!currentCourse) return;
    const fetchPaymentIntent = async () => {
      const result = await createStripePaymentIntent({
        amount: currentCourse.price ?? 99999999999999999,
      }).unwrap();

      setClientSecret(result.clientSecret);
    };

    fetchPaymentIntent();
  }, [createStripePaymentIntent, currentCourse]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  if (!clientSecret) return <Loading />;

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
};

export default StripeProvider;
