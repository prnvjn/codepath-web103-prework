

const DeleteButton = (props) => {

  return (


<dialog id="modal-example" >
  <article>
    <a href="#close"
      aria-label="Close"
      className="close"
      data-target="modal-example"
      onClick="toggleModal(event)">
    </a>
    <h3>Confirm your action!</h3>
    <p>
      Cras sit amet maximus risus. 
      Pellentesque sodales odio sit amet augue finibus pellentesque. 
      Nullam finibus risus non semper euismod.
    </p>
    <footer>
      <a href="#cancel"
        role="button"
        className="secondary"
        data-target="modal-example"
        onClick="toggleModal(event)">
        Cancel
      </a>
      <a href="#confirm"
        role="button"
        data-target="modal-example"
        onClick="toggleModal(event)">
        Confirm
      </a>
    </footer>
  </article>
</dialog>
  )
}

export default DeleteButton