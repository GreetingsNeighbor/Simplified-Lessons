const Modal = ({ showModal, toggleModal, onShowChange, children }: { showModal: boolean, toggleModal?: () => void, onShowChange: ()=> void, children: React.ReactNode }) => {
  return (
    <>
      {/* <label htmlFor="d_modal" className="btn" >open modal</label> */}
      <input type="checkbox" id="d_modal" className="modal-toggle" checked={showModal} onChangeCapture={onShowChange} />
      <div className="modal" role="dialog">
        <div className="modal-box">
          {/* <h3 className="text-lg font-bold">Modal!</h3>
          <p className="py-4">basic modal!</p> */}
          {children}
          <label className="btn" htmlFor="d_modal">Close</label>
        </div>
        <label className="modal-backdrop" htmlFor="d_modal">Close</label>
      </div>
    </>
  );
}
export default Modal;