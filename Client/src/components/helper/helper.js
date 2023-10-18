import Swal from 'sweetalert2';

export const alert = function (param1, param2) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: param1,
    title: param2,
  });
};

export const base64EncodedImage = function (file) {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        resolve(reader.result);
      };
    } catch (error) {
      reject(error);
    }
  });
};

export const SERVER = 'https://portfolio-api-esvo.onrender.com/api'; // http://localhost:8080/api
