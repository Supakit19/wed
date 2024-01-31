import Swal from 'sweetalert2';

function Confirm() {
  const showAlert = () => {
      Swal.fire({
        title: "My Dialog",
        text: "ไอ้ควายกิตติพล โดนกุหลอกขาย",
        icon: 'success',
      });
   };

   const Confirm = () => {
    Swal.fire ({
      title: "Are you sure",
      text: "Youwant delete",
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true,
      
        
    }).then(res =>  {
        if(res.isConfirmed) {
          showAlert();
        }

    })
   };


  return (
    
    <div className="flex w-full mt-4  justify-center rounded-md bg-rose-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#e11d48] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    {/* <button onClick={showAlert}>EnterPLSS</button> */}
    <button onClick={Confirm}>ซื้อสินค้า </button>
    </div>
    
  );
}

export default Confirm;
