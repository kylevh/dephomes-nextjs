import React from "react";
import Footer from "@/components/Footer";
import client from "@/tina/__generated__/client";
import UpcomingHeader from "@/components/upcomingComponents/UpcomingHeader";
import { Inter } from "next/font/google";
import UpcomingContainer from "@/components/upcomingComponents/UpcomingContainer";

const inter = Inter({ subsets: ["latin"] });

type SearchResult = {
  public_id: string;
  secure_url: string;
  folder: string;
};

export default async function PortfolioPage() {
  const results = await client.queries.upcoming({
    relativePath: "DEP-Project-Collection.md",
  });

  return (
    <main className="bg-green ">
      <div className="flex min-h-screen pt-20 sm:pt-24 bg-dep-offwhite">
        <div className="w-full p-6">
          {/* Page Description */}
          <UpcomingHeader />

          {/* Photo grid */}
          <div className="container mx-auto py-24 px-8">
            <div
              className="justify-center items-center"
              style={{
                display: "grid",
                gridGap: "30px 8px",
                gridTemplateColumns: "repeat(auto-fit, minmax(400px, auto))",
              }}
            >
              {results.data.upcoming.projects
                ?.filter((project) => project !== null)
                .map((project, index) => (
                  <UpcomingContainer
                    resultData={project}
                    key={project?.address}
                  />
                ))}
            </div>
          </div>

          {/* Photo grid 
          <div className="container mx-auto py-24 px-8 bg-red-700">
            <div className="justify-center items-center">
            <div className="h-10 w-full border-b-[1px] border-[#E0E0E0] rounded">Address</div> 
              {results.data.upcoming.projects
                ?.filter((project) => project !== null) 
                .map((project, index) => (
                  <div className="h-36 w-full border-b-[1px] border-[#E0E0E0] rounded flex flex-row"key={index}>
                    <h2 id="address" className={`${inter.className} h-full flex w-1/4 items-center text-xl font-bold text-[#244200]`}>305 28nd Ave E</h2>
                    <h2 id="year" className={`${inter.className} h-full flex w-1/6 items-center text-xl font-bold text-[#244200]`}>2024</h2>
                    <h2 id="year" className={`${inter.className} h-full flex w-2/4 items-center text-xl font-bold text-[#244200]`}>26 luxury waterfront townhouse on Lake Union</h2>
                    <div id="thumbnail" className="flex flex-row justify-between items-center">
                      <Image src="/images/header4.png" alt="house image" width={160} height={60}/>
                    </div>
                  </div> 
                ))}
            </div>
          </div>*/}
        </div>
      </div>
      <Footer />
    </main>
  );
}
