import React from "react";
import ProjectContainer from "@/components/portfolioComponents/ProjectContainer";
import PortfolioHeader from "@/components/portfolioComponents/PortfolioHeader";
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";

type SearchResult = {
  public_id: string;
  secure_url: string;
  folder: string;
};

export default async function PortfolioPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=header")
    .sort_by("public_id", "desc")
    .max_results(100)
    .execute()) as {resources: SearchResult[]};

  //console.log(results);

  return (
    <main className="bg-green ">
      <div className="flex min-h-screen pt-20 sm:pt-24 bg-dep-offwhite">
        <div className="w-full p-6">
          {/* Page Description */}
          <PortfolioHeader />
          {/* Photo grid */}
          <div className="container mx-auto py-24 px-8">
            <div className="justify-center items-center" style={{ display: 'grid', gridGap: '30px 8px', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, auto))' }}>
              {results.resources.map((result) => (
                <ProjectContainer 
                resultData={result}
                key={result.public_id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

