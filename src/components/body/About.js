import React from "react";

export default function About() {
  document.title = "About";
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-lg-4">
          <img src="assets/about.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-8">
          <div className="card text-left">
            <div className="card-header">About</div>
            <div className="card-body">
              According to Elliott Shore and Katie Rawson, co-authors of Dining
              Out: A Global History of Restaurants, the very first
              establishments that were easily recognizable as restaurants popped
              up around 1100 A.D. in China, when cities like Kaifeng and
              Hangzhou boasted densely packed urban populations of more than 1
              million inhabitants each. Trade was bustling between these
              northern and southern capitals of the 12th-century Song Dynasty,
              explains Shore, a professor emeritus of history at Bryn Mawr
              College, but Chinese tradesmen traveling outside their home city
              weren’t accustomed to the strange local foods. “The original
              restaurants in those two cities are essentially southern cooking
              for people coming up from the south or northern cooking for people
              coming down from the north,” says Shore. “You could say the
              ‘ethnic restaurant’ was the first restaurant.”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
