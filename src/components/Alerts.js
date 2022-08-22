import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const config = {
  position: "top-end",
  showCloseButton: true,
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
};

export function fireSuccess(message, isAlert) {
  MySwal.fire({
    icon: "success",
    title: message,
    toast: isAlert ? false : true,
    ...config,
  });
}

export function fireError(message, isAlert) {
  MySwal.fire({
    icon: "error",
    title: message,
    toast: isAlert ? false : true,
    ...config,
  });
}
