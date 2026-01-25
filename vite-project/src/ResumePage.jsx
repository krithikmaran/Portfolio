import resumeFile from "./assets/KrithikMaranResume.pdf";

function ResumePage() {
  return (
    <div className="h-screen w-full bg-black flex flex-col">
      {/* Simple Navigation to go back */}
      <div className="p-4 bg-neutral-900 flex justify-between items-center">
        <a href="/" className="text-white text-xs font-bold uppercase tracking-widest">
          ← Back to Site
        </a>
        <a 
          href={resumeFile} 
          download 
          className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold uppercase"
        >
          Download PDF
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1">
        <iframe
          src={`${resumeFile}#view=FitH`}
          title="Krithik Maran Resume"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
}

export default ResumePage;