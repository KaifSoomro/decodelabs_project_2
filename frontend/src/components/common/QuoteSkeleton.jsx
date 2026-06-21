import React from "react";
import Container from "../common/Container";

const QuoteSkeleton = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="relative p-6 rounded-3xl bg-white/60 backdrop-blur border border-gray-100 shadow-sm overflow-hidden animate-pulse"
              >
                <div className="absolute inset-0 -translate-x-full animate-pulse bg-linear-to-r from-transparent via-white/40 to-transparent"></div>

                <div className="h-5 w-full bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-5 w-5/6 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-5 w-4/6 bg-gray-200 rounded-lg"></div>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default QuoteSkeleton;
