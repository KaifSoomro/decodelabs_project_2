import React from "react";
import Container from "../common/Container";
import { User } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import QuoteSkeleton from "../common/QuoteSkeleton";

const FeaturedQuotes = () => {
  const { data: quotes, isLoading } = useQuery({
    queryKey: ["quotes"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/quotes/get-all-quotes`,
          {
            method: "GET",
          },
        );

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || "Something went wrong.");
        }
        return data;
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    },
  });

  const featuredQuotes = quotes?.quotes?.slice(0,3);

  return (
    <div className="py-24 bg-linear-to-b from-white via-purple-50 to-white">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured <span className="text-purple-600">Quotes</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hand-picked inspirational quotes to motivate and inspire your day.
          </p>
        </div>

        { isLoading ? <QuoteSkeleton /> :<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredQuotes?.map((q, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition"></div>

              <p className="text-gray-800 text-lg font-medium leading-relaxed">
                “{q.quote}”
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <User size={14} className="text-purple-600" />
                </div>

                <span className="font-medium text-gray-700">{q.fullName}</span>
              </div>
            </div>
          ))}
        </div> }
      </Container>
    </div>
  );
};

export default FeaturedQuotes;
