
import pdfResume from "@assets/BernardoEstrada.resume.pdf" assert { type: "pdf" }

export default function WIPCard() {
  return (
    <div className="card grid grid-rows-1 md:grid-cols-3 justify-items-center items-center max-w-fit max-h-fit shadow-2xl bg-base-100 p-12">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      <div className="md:col-span-3">
        <div className="flex flex-col justify-start space-x-4 max-w-2xl">
          <h3 className="text-2xl font-bold text-left text-primary-focus">
            Work in progress
          </h3>
          <br/>
          <p className="text-2xl text-left text-base-content">
            I'm currently working on my portfolio, check back soon!
            Meanwhile you can check out my&nbsp;
            <a className="link link-primary link-hover" href="https://github.com/BernardoEstrada" target="_blank">GitHub</a>,&nbsp;
            <a className="link link-primary link-hover" href="https://linkedin.com/in/bernardoef/" target="_blank">LinkedIn</a> or&nbsp;
            <a className="link link-primary link-hover" href={pdfResume} target="_blank">resume</a>.
          </p>
          <p className="text-5xl text-center text-base-content mt-3">
            <a href="https://github.com/BernardoEstrada" target="_blank">
              <i className="devicon-github-original mx-4 hover:text-primary-focus"></i>
            </a>
            <a href="https://linkedin.com/in/bernardoef/" target="_blank">
              <i className="devicon-linkedin-plain mx-4 hover:text-primary-focus"></i>
            </a>
            <a href={pdfResume} target="_blank" className="mx-4 my-0 align-text-top">
                <svg className="inline-block w-12 h-12 hover:text-primary-focus" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}