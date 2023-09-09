import cloudinary from "cloudinary";
import ProjectHeader from '@/components/portfolioComponents/ProjectHeader'
import React from 'react'
import ProjectPhotosContainer from "@/components/portfolioComponents/ProjectPhotosContainer";
import Footer from "@/components/Footer";

type SearchResult = {
    public_id: string;
    secure_url: string;
    folder: string;
};

export default async function ProjectPage({ params }: {
    params: { projectName: string },
}) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${params.projectName}`)
        .sort_by("public_id", "desc")
        .max_results(100)
        .execute()) as { resources: SearchResult[] };

    //   console.log(results);

    const inputString = params.projectName; // Replace this with your input string
    const initialDigits = inputString.match(/^\d+_+/); // Match initial digits followed by underscores
    const parsedProjectName = inputString.replace(/^\d+_+/, '').replace(/-/g, ' ');

    return (
        <main className="bg-green ">
            <div className="flex min-h-screen pt-20 sm:pt-24 bg-dep-offwhite">
                <div className="w-full p-6">
                    {/* Page Description */}
                    <ProjectHeader projectName={parsedProjectName} />
                    {/* Photo grid */}
                    <div className="container mx-auto py-24 px-8">
                        <div className="justify-center items-center" style={{ display: 'grid', gridGap: '30px 8px', gridTemplateColumns: '1fr' }}>
                            {results.resources.map((result) => (
                                <ProjectPhotosContainer
                                    resultData={result}
                                    key={result.public_id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </main>
    )
}

{/* <h1>Hello, this project name is: {params.projectName}</h1> */ }
