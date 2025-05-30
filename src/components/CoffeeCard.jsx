import React from 'react';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {

  const { _id, photo } = coffee

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })

      }
    });
  }
  return (
    <div className="card card-side bg-base-100 shadow-sm border-2">
      <figure>
        <img
          src={photo}
          alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <div className="join join-vertical">
            <button className="btn join-item">View</button>
            <button className="btn join-item">Edit</button>
            <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;