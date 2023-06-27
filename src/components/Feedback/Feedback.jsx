import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import up from "../../assets/33000-feedback.json";

const Feedback = () => {
  const { _id } = useLoaderData();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const feedback = from.feedback.value;

    // console.log(price, quantity, description);
    const update = {
      feedback: feedback,
    };
    fetch(`https://summer-camp-sever.vercel.app/feedback/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          Swal.fire("Feedback!", "", "success");
          navigate("/dashboard/manageClass");
        }
      });
  };

  return (
    <>
      <div>
        <div className=" min-h-fit py-12 bg-base-200">
          <div className="hero-content justify-around flex-col lg:flex-row-reverse">
            <div className="text-center w-1/2 lg:text-left">
              <Player
                autoplay
                style={{ height: "100%", width: "100%" }}
                loop
                src={up}
              ></Player>
            </div>
            <div className="card  w-1/2 shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl font-bold">Please give a feedback!</h1>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-2"></div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Feedback</span>
                    </label>
                    <textarea
                      className="textarea textarea-success textarea-lg w-full max-w-xs"
                      type="text"
                      name="feedback"
                      placeholder="feedback"
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="submit"
                      value="feedback"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
