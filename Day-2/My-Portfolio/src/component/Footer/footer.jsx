import React from 'react'

function Footer() {
    const year  = new Date().getFullYear();
  return (
    <>
      <section className="footer bg-[#282828] text-center  py-4">
        Copyright &copy;{year} Uche Emmanuel. All right reserved.
      </section>
    </>
  );
}

export default Footer
