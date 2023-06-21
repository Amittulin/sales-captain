import React from "react";

const Oldman = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62def85e197fa06b03e4005b_Group%2018718.webp"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Faster conversion <br/>
              with our Captain AI
            </h1>
            <p class="mb-8 leading-relaxed">
              Automate web chat, messaging, reviews & feedbacks with our AI
              assistant
            </p>

            <a href="https://salescaptain.com/#" className="text-blue-700 text-xl">Get started</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Oldman;
