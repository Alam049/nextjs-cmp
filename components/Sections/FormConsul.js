import React from "react";

const FormConsul = () => {
  return (
    <section
      id="formconsul"
      className="bg-[#2728a9] text-white py-16 box-border"
    >
      <div className="px-6 sm:mx-5">
        <div>
          <div className="lg:w-[928px] lg:h-[513.75px] lg:mx-auto">
            <h2 className="text-center font-bold text-2xl sm:text-4xl mb-4">
              Siap Bertransformasi?
            </h2>
            <h4 className="text-center font-medium text-lg mb-4">
              Isi dan submit formulir di bawah ini dan Cloud Consultant kami
              akan segera merespons Anda!
            </h4>
            <form>
              <div className="py-6 px-4 sm:px-14  grid grid-cols-1 gap-4 sm:grid-cols-2  ">
                <div className="flex flex-grow flex-shrink basis-[45%] gap-1 flex-wrap flex-col">
                  <label className="text-base">
                    Nama Lengkap {""}
                    <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="py-2 px-4 text-black rounded text-sm"
                  />
                </div>
                <div className="flex flex-grow flex-shrink basis-[45%] gap-1 flex-wrap flex-col">
                  <label className="text-base">
                    Email {""}
                    <span>*</span>
                  </label>
                  <input
                    type="email"
                    className="py-2 px-4 text-black rounded text-sm"
                  />
                </div>
                <div className="flex flex-grow flex-shrink basis-[45%] gap-1 flex-wrap flex-col">
                  <label className="text-base">
                    Nomor Telepon {""}
                    <span>*</span>
                  </label>
                  <input
                    type="number"
                    className="py-2 px-4 text-black rounded text-sm"
                  />
                </div>
                <div className="flex flex-grow flex-shrink basis-[45%] gap-1 flex-wrap flex-col">
                  <label className="text-base">
                    Sektor Industri {""}
                    <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="py-2 px-4 text-black rounded text-sm"
                  />
                </div>
                <div className="flex flex-grow flex-shrink basis-[45%] gap-1 flex-wrap flex-col sm:grid sm:col-span-2">
                  <label className="text-base">
                    Ceritakan Kebutuhan Anda {""}
                    <span>*</span>
                  </label>
                  <textarea
                    rows="5"
                    className="py-2 px-4 text-black rounded text-sm"
                  ></textarea>
                  <span>(*) wajib diisi</span>
                </div>
              </div>
              <div className="mt-6 px-[10%] w-full ">
                <button
                  className="text-base font-medium bg-[#FF6D00] hover:bg-[#ffa7a3] ease-out duration-300 rounded-full py-2 px-5 text-white border-2 border-transparent cursor-pointer"
                  type="submit"
                >
                  Kirim Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormConsul;
