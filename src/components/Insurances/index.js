/**
 * The Insurances component renders a list of insurance options with corresponding descriptions and
 * icons.
 * @returns The `Insurances` component is being returned. It is a functional component that renders a
 * list of insurance options with corresponding icons, titles, and descriptions. The component is
 * structured using JSX and Tailwind CSS classes for styling.
 */
const Insurances = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-blueishGray">
      <h1 className="font-heroTitle text-xl lg:text-3xl 2xl:text-5xl text-center mb-12">
        Pick the insurance that suits your needs
      </h1>
      <div className="grid grid-cols-2  2xl:grid-cols-3 gap-4 w-full px-0 xl:px-12 2xl:px-64">
        <div className="flex flex-col items-center text-center">
          <div className="h-14 w-14 2xl:h-16 2xl:w-16 bg-cover bg-center mb-4" style={{ backgroundImage: 'url(/health-insurance-icon.png)' }}></div>
          <h3 className="font-heroTitle text-base lg:text-xl text-lightBlue mb-2">Health Insurance</h3>
          <p className="text-slate-400 text-sm lg:text-base 2xl:text-lg font-textRegular lg:px-8 xl:px-14 2xl:px-0">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="h-14 w-14 2xl:h-16 2xl:w-16 bg-cover bg-center mb-4" style={{ backgroundImage: 'url(/medicare-icon.png)' }}></div>
          <h3 className="font-heroTitle text-base lg:text-xl text-lightBlue mb-2">Medicare Supplement</h3>
          <p className="text-slate-400 text-sm lg:text-base 2xl:text-lg font-textRegular lg:px-8 xl:px-14 2xl:px-0">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="h-14 w-14 2xl:h-16 2xl:w-16 bg-cover bg-center mb-4" style={{ backgroundImage: 'url(/life-insurance-icon.png)' }}></div>
          <h3 className="font-heroTitle text-base lg:text-xl text-lightBlue mb-2">Life Insurance</h3>
          <p className="text-slate-400 text-sm lg:text-base 2xl:text-lg font-textRegular lg:px-8 xl:px-14 2xl:px-0">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="h-14 w-14 2xl:h-16 2xl:w-16 bg-cover bg-center mb-4" style={{ backgroundImage: 'url(/medicare-advantage-icon.png)' }}></div>
          <h3 className="font-heroTitle text-base lg:text-xl text-lightBlue mb-2">Medicare Advantage</h3>
          <p className="text-slate-400 text-sm lg:text-base 2xl:text-lg font-textRegular lg:px-8 xl:px-14 2xl:px-0">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="h-14 w-14 2xl:h-16 2xl:w-16 bg-cover bg-center mb-4" style={{ backgroundImage: 'url(/obamacare-icon.png)' }}></div>
          <h3 className="font-heroTitle text-base lg:text-xl text-lightBlue mb-2">ACA / Obamacare</h3>
          <p className="text-slate-400 text-sm lg:text-base 2xl:text-lg font-textRegular lg:px-8 xl:px-14 2xl:px-0">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="h-14 w-14 2xl:h-16 2xl:w-16 bg-cover bg-center mb-4" style={{ backgroundImage: 'url(/short-term-icon.png)' }}></div>
          <h3 className="font-heroTitle text-base lg:text-xl text-lightBlue mb-2">Short-Term Medical</h3>
          <p className="text-slate-400 text-sm lg:text-base 2xl:text-lg font-textRegular lg:px-8 xl:px-14 2xl:px-0">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insurances;
