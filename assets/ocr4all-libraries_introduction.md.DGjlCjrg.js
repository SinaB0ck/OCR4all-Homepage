import{_ as t,c as i,j as e,a as r,t as n,a4 as o,o as s}from"./chunks/framework.CI6U-QuP.js";const v=JSON.parse('{"title":"OCR4all-libraries – Introduction","description":"","frontmatter":{"title":"OCR4all-libraries – Introduction","next":{"text":"Setup OCR4all-libraries","link":"/ocr4all-libraries/setup"}},"headers":[],"relativePath":"ocr4all-libraries/introduction.md","filePath":"ocr4all-libraries/introduction.md","lastUpdated":1727420495000}'),l={name:"ocr4all-libraries/introduction.md"},d={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),u=o('<h2 id="motivation-and-general-idea" tabindex="-1">Motivation and General Idea <a class="header-anchor" href="#motivation-and-general-idea" aria-label="Permalink to &quot;Motivation and General Idea&quot;">​</a></h2><ul><li><strong>Availability of Solutions:</strong> Numerous high-performance open-source solutions for ATR are already available, with new releases emerging continuously.</li><li><strong>Diverse Use Cases:</strong> The highly heterogeneous nature of use cases necessitates the targeted deployment of specialized ATR solutions.</li><li><strong>Requirement:</strong> There is a need for user-friendly frameworks that facilitate the flexible, integrable, and sustainable combination and application of both existing and future ATR solutions.</li><li><strong>Objective:</strong> Our goal is to empower users to perform ATR independently, achieving high-quality results.</li><li><strong>Foundation:</strong> This framework is built upon freely available tools, enhanced by our in-house developments.</li></ul><h2 id="ocr-d-and-ocr4all" tabindex="-1">OCR-D and OCR4all <a class="header-anchor" href="#ocr-d-and-ocr4all" aria-label="Permalink to &quot;OCR-D and OCR4all&quot;">​</a></h2><ul><li><strong>OCR-D Initiative:</strong> The DFG-funded OCR-D initiative is dedicated to facilitating the mass full-text transformation of historical prints published in the German-speaking world.</li><li><strong>Focus Areas:</strong> OCR-D emphasizes interoperability and connectivity, ensuring a high degree of flexibility and sustainability in its solutions.</li><li><strong>Integrated Solutions:</strong> The initiative combines multiple ATR solutions within a unified framework, enabling precise adaptation to specific materials and use cases.</li><li><strong>Open Source Commitment:</strong> All results from the OCR-D project are released as completely open-source.</li><li><strong>OCR4all-Libraries Project:</strong> The DFG-funded OCR4all-libraries project has two primary goals: <ul><li>Providing a user-friendly interface for OCR-D solutions via OCR4all, enabling independent use by non-technical users.</li><li>Enhancing the ATR output within OCR4all to offer added value to even the most technically experienced users.</li></ul></li></ul><h2 id="system-architecture" tabindex="-1">System Architecture <a class="header-anchor" href="#system-architecture" aria-label="Permalink to &quot;System Architecture&quot;">​</a></h2><ul><li><strong>Modularity and Interoperability:</strong> The framework is designed with a strong focus on modularity and interoperability, ensuring seamless integration and adaptability.</li><li><strong>Distributed Infrastructure:</strong> The architecture features a distributed infrastructure, with a clear separation between the backend and frontend components. <ul><li><strong>Backend:</strong> Built with Java and <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noreferrer">Spring Boot</a>.</li><li><strong>Frontend:</strong> Developed using the <a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue.js</a> ecosystem.</li></ul></li><li><strong>Component Communication:</strong> Components communicate via a REST API, enabling efficient interaction between different parts of the system.</li><li><strong>Integration of Third-Party Solutions:</strong> Service Provider Interfaces (SPIs) allow for the integration of third-party solutions, such as ATR processors.</li><li><strong>Containerized Setup:</strong> The containerized architecture ensures easy distribution and deployment of all integrated components with minimal barriers.</li><li><strong>Data Sovereignty:</strong> Users retain full control over their data, with no data leaving the instance without explicit user or administrator consent.</li><li><strong>Reproducibility:</strong> Every step in the process is fully reproducible. A &quot;transcript of records&quot; feature stores detailed information about the processors and parameters used, ensuring transparency and repeatability.</li></ul><h2 id="modules" tabindex="-1">Modules <a class="header-anchor" href="#modules" aria-label="Permalink to &quot;Modules&quot;">​</a></h2><h3 id="data-management-and-processing" tabindex="-1">Data Management and Processing <a class="header-anchor" href="#data-management-and-processing" aria-label="Permalink to &quot;Data Management and Processing&quot;">​</a></h3><ul><li><strong>Separation of Functions:</strong> Data management and processing are strictly separated to ensure efficient handling and security.</li><li><strong>Data Sharing:</strong> Data can be shared with different users or user groups as needed.</li></ul><h3 id="processors-and-nodeflow" tabindex="-1">Processors and NodeFlow <a class="header-anchor" href="#processors-and-nodeflow" aria-label="Permalink to &quot;Processors and NodeFlow&quot;">​</a></h3><ul><li><strong>Wide Array of Processors:</strong> A diverse range of ATR processors is available, including OCR-D and external options.</li><li><strong>Ease of Integration:</strong> New processors can be easily implemented via a well-defined interface, with the user interface generated automatically.</li><li><strong>NodeFlow:</strong> The graphical editor NodeFlow simplifies the creation of workflows, making it convenient for users to design and customize processing sequences.</li></ul><h3 id="larex" tabindex="-1">LAREX <a class="header-anchor" href="#larex" aria-label="Permalink to &quot;LAREX&quot;">​</a></h3><ul><li><strong>Result Correction and Training Data Creation:</strong> LAREX allows for the correction of all ATR workflow results and the creation of training data.</li><li><strong>Visual Workflow Identification:</strong> LAREX helps users identify the most suitable workflows as a visual explanation component.</li></ul><h3 id="datasets-training-and-evaluation" tabindex="-1">Datasets, Training, and Evaluation <a class="header-anchor" href="#datasets-training-and-evaluation" aria-label="Permalink to &quot;Datasets, Training, and Evaluation&quot;">​</a></h3><ul><li><strong>Dataset Creation:</strong> Datasets can be created with the option to use tagging and import functionalities.</li><li><strong>Dataset Enrichment:</strong> Datasets can be enriched with training data generated and tagged within the application, even across various projects and sources.</li><li><strong>Model Training:</strong> Train models on selected datasets or subsets thereof, with options for in-app usage or exporting both models and associated training data.</li><li><strong>Model Evaluation:</strong> Evaluate both trained and imported models using curated datasets to ensure quality and accuracy.</li></ul><h3 id="working-with-ocr4all-libraries" tabindex="-1">Working with ocr4all-libraries <a class="header-anchor" href="#working-with-ocr4all-libraries" aria-label="Permalink to &quot;Working with ocr4all-libraries&quot;">​</a></h3><h3 id="example-use-cases-and-application-scenarios" tabindex="-1">Example Use Cases and Application Scenarios <a class="header-anchor" href="#example-use-cases-and-application-scenarios" aria-label="Permalink to &quot;Example Use Cases and Application Scenarios&quot;">​</a></h3><h4 id="fully-automatic-mass-full-text-digitalization" tabindex="-1">Fully Automatic Mass Full-Text Digitalization <a class="header-anchor" href="#fully-automatic-mass-full-text-digitalization" aria-label="Permalink to &quot;Fully Automatic Mass Full-Text Digitalization&quot;">​</a></h4><ul><li><strong>Objective:</strong> Maximize throughput with minimal manual effort.</li><li><strong>Users:</strong> Libraries and archives processing large volumes of scanned materials.</li><li><strong>Approach:</strong> Use the pro mode (NodeFlow, LAREX, and datasets) to identify the most suitable workflow.</li></ul><h4 id="flawless-transcription-of-source-material" tabindex="-1">Flawless Transcription of Source Material <a class="header-anchor" href="#flawless-transcription-of-source-material" aria-label="Permalink to &quot;Flawless Transcription of Source Material&quot;">​</a></h4><ul><li><strong>Objective:</strong> Achieve maximum quality, accepting significant manual effort.</li><li><strong>Users:</strong> Humanist researchers preparing text for a digital edition.</li><li><strong>Approach:</strong> Utilize the base mode for iterative transcription with continually improving accuracy.</li></ul><h4 id="building-corpora-for-quantitative-applications" tabindex="-1">Building Corpora for Quantitative Applications <a class="header-anchor" href="#building-corpora-for-quantitative-applications" aria-label="Permalink to &quot;Building Corpora for Quantitative Applications&quot;">​</a></h4><ul><li><strong>Objective:</strong> Maximize quality while minimizing manual effort.</li><li><strong>Users:</strong> Researchers constructing corpora for training and evaluating quantitative methods.</li><li><strong>Approach:</strong> Manage data and consistently retrain source-specific or mixed models using datasets and tagging functionalities.</li></ul>',23);function g(a,h,p,f,m,b){return s(),i("div",null,[e("h1",d,[r(n(a.$frontmatter.title)+" ",1),c]),u])}const w=t(l,[["render",g]]);export{v as __pageData,w as default};
