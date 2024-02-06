import { useState } from "react";
import { Quiz } from "./components/Quiz";
import pismo from "./assets/pismo.png";
import { Pismo } from "./components/Pismo";

function App() {
  const [modal, setModal] = useState(false);
  const [pismoOpen, setPismoOpen] = useState(true);
  const [open, setOpen] = useState(false);

  const onClickModal = () => {
    setModal(true);
    setOpen(false);
  };

  const onClickPismo = () => {
    setPismoOpen(false);
    setOpen(true);
  };

  return (
    <div className="bg-[url('./assets/3.jpg')] h-screen w-full bg-no-repeat bg-cover flex items-center justify-center">
      {pismoOpen && (
        <a className="">
          <img
            onClick={onClickPismo}
            src={pismo}
            alt="hogwarts"
            className="cursor-pointer hover:scale-110 duration-500 animate-bounce"
          />
        </a>
      )}
      {open && <Pismo onClickModal={onClickModal} />}
      {modal && <Quiz />}
    </div>
  );
}

export default App;
