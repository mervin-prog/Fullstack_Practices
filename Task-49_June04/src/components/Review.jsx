import React from "react";
import { ImQuotesLeft } from "react-icons/im";

function Review(props){

    return (

    <div className="d-flex flex-column w-100 lg:w-2/6 border border-dark p-3 rounded-lg gap-5" id="testimonial">
      <div>
        <ImQuotesLeft size={25} />
        <h1 className="text-xl pt-4" style={{opacity:'0.75'}}>{props.name}</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        consequatur fuga suscipit perspiciatis totam. Eos esse nisi omnis dicta,
        aperiam distinctio fuga ipsam rerum rem.
      </p>
    </div>

    );
}

export default Review;